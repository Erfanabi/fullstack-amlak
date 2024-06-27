import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { icons } from "@/constants";
import { categories } from "@/constants";
import { e2p, sp } from "@/utils/replaceNumber";
import convertDate from "@/utils/convertDate";
import ShareButton2 from "@/module/ShareButton2";
import "./DetailsPage.css";

function DetailsPage({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    phone,
    price,
    category,
    constructionDate,
  },
}) {
  return (
    <div className="details-page">
      <div className="main-details">
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>

        <h3>توضیحات</h3>
        <p>{description}</p>

        <h3>امکانات</h3>
        {amenities.length ? (
          <ul>
            {amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده</p>
        )}

        <h3>قوانین</h3>
        {rules.length ? (
          <ul>
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        ) : (
          <p>هیچ موردی ذکر نشده</p>
        )}
      </div>

      <div className="sidebar-container">
        <div className="sidebar-details">
          <div className="realState">
            <SiHomebridge />
            <p>املاک {realState}</p>
            <span>
              <AiOutlinePhone />
              {e2p(phone)}
            </span>
          </div>
        </div>

        <div className="sidebar-details">
          <ShareButton2 />
        </div>

        <div className="sidebar-details">
          <div className="price">
            <p>
              {icons[category]}
              {categories[category]}
            </p>
            <p>{sp(price)} تومان</p>
            <p>
              <BiCalendarCheck />
              {convertDate(constructionDate)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
