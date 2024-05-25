"use client";

import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import "./Header.css";
import { useSession } from "next-auth/react";

function Header() {
  const { data } = useSession();

  return (
    <header className="header">
      <div>
        <ul>
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>

      <div className="login">
        {data?.user ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              gap: "15px",
            }}
          >
            <span>{data?.user?.email}</span>
            <Link href="/dashboard">
              <FaUserAlt />
            </Link>
          </div>
        ) : (
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;

{
  /* <Link href="/dashboard">
          <FaUserAlt />
        </Link>
      </div> */
}
