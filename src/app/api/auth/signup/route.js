import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export async function POST(req) {
  try {
    //   connectDB
    await connectDB();

    const { email, password } = await req.json();

    //   validate
    if (!email || !password) {
      return Response.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 422 }
      );
    }

    //   existingUser
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return Response.json(
        { error: "این حساب کاربری وجود دارد" },
        { status: 422 }
      );
    }

    //   hashedPassword
    const hashedPassword = await hashPassword(password);

    //   create user
    const newUser = await User.create({ email, password: hashedPassword });
    return Response.json(
      { message: "حساب کاربری ایجاد شد", data: newUser },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return Response.json(
      { message: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
