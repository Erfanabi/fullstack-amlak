import Profile from "@/models/Profile";
import DetailsPage from "@/template/BuyResidentials/DetailsPage";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });

  if (!profile) return <h3>مشکلی پیش آمده است</h3>;

  return <DetailsPage data={profile} />;
}

export default ProfileDetails;
