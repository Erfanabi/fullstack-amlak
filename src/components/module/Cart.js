import Link from "next/link";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { icons } from "../constants/icons";
import { sp } from "@/utils/replaceNumber";
import "./Cart.css";

function Cart({ item: { _id, category, title, location, price }, children }) {
  return (
    <div className="cart">
      <div className="cart-icon">{icons[category]}</div>
      <p className="cart-title">{title}</p>
      <p className="cart-location">
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span className="cart-price">{sp(price)} تومان</span>
      <Link className="cart-link" href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <BiLeftArrowAlt />
      </Link>
      {children}
    </div>
  );
}

export default Cart;
