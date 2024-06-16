import LogoutButton from "@/layout/LogoutButton/LogoutButton";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ user }) => {
  return (
    <div className="dashboard-sidebar">
      <CgProfile />
      {/* {role === "ADMIN" ? "ادمین" : null} */}
      <p>{user.email}</p>
      <span></span>
      <Link href="/dashboard">حساب کاربری</Link>
      <Link href="/dashboard/my-profiles">آگهی های من</Link>
      <Link href="/dashboard/add">ثبت آگهی</Link>
      {/* {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link> : null} */}
      <LogoutButton />
    </div>
  );
};

export default DashboardSidebar;
