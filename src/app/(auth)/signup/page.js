import SignupPage from "@/template/SignupPage/SignupPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signup = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <SignupPage />;
};

export default Signup;
