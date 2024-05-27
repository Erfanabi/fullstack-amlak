import DashboardPage from "@/template/Dashboard/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

const Dashboard = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  return <DashboardPage user={user} />;
};

export default Dashboard;
