"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/module/Input";
import "@/template/SignPage.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

const SignupPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      if (res.status == 201) {
        toast.success(res.data.message);
        router.push("/signin");
        setIsLoading(false);
      }
      console.log(res.data.message);
    } catch (err) {
      setIsLoading(false);
      toast.error(err.response.data.error);
    }
  };

  return (
    <div className="form">
      <h4>فرم ثبت نام</h4>
      <form>
        <Input
          lable="ایمیل :"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          lable="رمز عبور :"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          lable="تکرار رمز عبور :"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          required
        />

        <button type="submit" onClick={signupHandler}>
          {isLoading ? "loading" : "ثبت نام"}
        </button>
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
    </div>
  );
};

export default SignupPage;

//   const fetcher = (url) =>
//     axios
//       .post(url, {
//         email,
//         password,
//       })
//       .then((res) => res);
//   const { data, error, isLoading } = useSWR("/api/auth/signupp", fetcher, {
//     revalidateOnMount: false,
//   });

//   useEffect(() => {
//     console.log(data, error, isLoading);
//   }, [data, error, isLoading]);
