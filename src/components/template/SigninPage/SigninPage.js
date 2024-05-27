"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/module/Input";
import "@/template/SignPage.css";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SigninPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status == 401) {
      toast.error(res.error);
    } else {
      toast.success("شما وارد شدید");
      router.push("/");
    }
  };

  return (
    <div className="form">
      <h4>فرم ورود</h4>
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

        <button type="submit" onClick={signinHandler}>
          ورود
        </button>
      </form>
      <p>
        حساب کاربری ندارید؟
        <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SigninPage;
