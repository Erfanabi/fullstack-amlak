import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardSidebar from "@/module/DashboardSidebar";

export const metadata = {
  title: "پنل کاربری املاک | خرید و فروش ملک",
};

export default async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <div className="page-layout-container">
      <div className="sidebar">
        <DashboardSidebar user={session.user} />
      </div>

      <div className="main">{children}</div>
    </div>
  );
}
