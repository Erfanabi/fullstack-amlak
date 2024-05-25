"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Input from "@/element/Input";
import "@/template/SignPage.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignupPage = () => {
  const router = useRouter();
  const { status } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [router, status]);

  const signupHandler = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }

    try {
      const res = await axios.post("/api/auth/signup", {
        email,
        password,
      });
      if (res.status == 201) {
        toast.success(res.data.message);
        router.push("/signin");
      }
      console.log(res.data.message);
    } catch (err) {
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
          ثبت نام
        </button>
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster />
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
