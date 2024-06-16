import Link from "next/link";
import { categories } from "../constants/strings";
import { HiFilter } from "react-icons/hi";
import "./BuyResidentialsSidebar.css";

function BuyResidentialsSidebar() {
  return (
    <div className="buy-residential-sidebar">
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i) => (
        <Link
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default BuyResidentialsSidebar;
