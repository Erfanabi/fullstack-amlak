import BuyResidentialsSidebar from "@/module/BuyResidentialsSidebar";
import Cart from "@/module/Cart";

async function BuyResidentialsPage({ data }) {
  return (
    <div className="page-layout-container">
      <div className="sidebar">
        <BuyResidentialsSidebar />
      </div>

      <div className="main">
        {data.length == 0 ? (
          <p className="text-nothing">هیچ آگهی ثبت نشده است</p>
        ) : null}
        <div className="cart-container">
          {data?.map((item) => (
            <Cart item={item} key={item._id}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuyResidentialsPage;
