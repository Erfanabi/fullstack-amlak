import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { categories } from "@/constants/strings";
import { services } from "@/constants/strings";
import { cities } from "@/constants/strings";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <div className="home-services">
        <h1>سامانه خرید و اجاره ملک</h1>
        <ul>
          {services.map((i) => (
            <li key={i}>
              <FiCircle />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="home-categories">
        {Object.keys(categories).map((item) => (
          <CategoryCard name={categories[item]} categorie={item} key={item} />
        ))}
      </div>

      <div className="home-city">
        <h3>شهر های پر بازدید</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;

// {Object.keys(categories).map((i) => (
//     <CategoryCard title={categories[i]} name={i} />
//   ))}
