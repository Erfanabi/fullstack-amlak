import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function DELETE(req, context) {
  try {
    //   connectDB
    await connectDB();

    // get params
    const id = context.params.profileId;

    // authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return Response.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
        { status: 401 }
      );
    }

    //   existingUser
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return Response.json(
        {
          error: "حساب کاربری یافت نشد",
        },
        { status: 404 }
      );
    }

    const profile = await Profile.findOne({ _id: id });
    // equals == true or false
    if (!user._id.equals(profile.userId)) {
      return Response.json(
        {
          error: "دستری شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    // delete profile
    await Profile.deleteOne({ _id: id });

    return Response.json({ message: "آگهی موردنظر حذف شد" }, { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
