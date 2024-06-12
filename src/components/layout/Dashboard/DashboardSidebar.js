import "./DashboardSidebar.css";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "@/layout/LogoutButton/LogoutButton";

const DashboardSidebar = ({ children, user }) => {
  return (
    <div className="das-layout-container">
      <div className="sidebar">
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

      <div className="main">{children}</div>
    </div>
  );
};

export default DashboardSidebar;
