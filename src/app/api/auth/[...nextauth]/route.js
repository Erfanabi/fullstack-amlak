import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        //   connectDB
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }

        //   validate
        if (!email || !password) {
          throw new Error("لطفا اطلاعات معتبر وارد کنید");
        }

        //   findUser
        const user = await User.findOne({ email: email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");

        //   compare password with hashPassword
        //   password in client with password write user
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");

        // for create token
        return { email };
      },
    }),
  ],
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
