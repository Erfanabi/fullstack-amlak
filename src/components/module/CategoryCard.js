import Link from "next/link";
import "./CategoryCard.css";

function CategoryCard({ categorie, name }) {
  console.log(categorie);
  return (
    <div className="category-card">
      <Link href={`/buy-residential?category=${categorie}`}>
        {/* <Image
          src={`/images/${categorie}.png`}
          alt={categorie}
          width={240}
          height={144}
          priority={true}
        /> */}
        <img src={`/images/${categorie}.png`} alt={categorie} />
        <p>{name}</p>
      </Link>
    </div>
  );
}

export default CategoryCard;

{
  /* <img src={`/images/${categorie}.png`} alt={categorie} />; */
}
