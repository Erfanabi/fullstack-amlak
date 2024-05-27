import DashboardSidebar from "@/layout/Dashboard/DashboardSidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "پنل کاربری املاک | خرید و فروش ملک",
};

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/");
  console.log(session);

  return <DashboardSidebar user={session.user}>{children}</DashboardSidebar>;
}
