import connectDB from "@/utils/connectDB";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import User from "@/models/User";
import MyProfilesPage from "@/template/Dashboard/MyProfilesPage";

async function MyProfiles() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    // یک یوزری رو پیدا کن که ایمیلش برابر با سشن دات یوزره
    { $match: { email: session.user.email } },
    {
      // بگرد و پیدا کن
      $lookup: {
        // برو داخل پروفایل (بزرگ و کوچیک و (فقط جمع) تاثییری نداره فرقی نداره)
        from: "profiles",
        // profile
        foreignField: "userId",
        // user (اونی که ایدیش و یوزر ادیش برابر بود رو اگهیش رو برگردون)
        localField: "_id",
        // به این اسم برگردون
        as: "profiles",
      },
    },
  ]);

  //   console.log(user.profiles);

  return (
    <MyProfilesPage profiles={JSON.parse(JSON.stringify(user.profiles))} />
  );
}

export default MyProfiles;
