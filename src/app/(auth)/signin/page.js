import SigninPage from "@/template/SigninPage/SigninPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Signin = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <SigninPage />;
};

export default Signin;
