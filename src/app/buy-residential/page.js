import BuyResidentialsPage from "@/template/BuyResidentials/BuyResidentialsPage";

async function BuyResidentials({ searchParams: { category } }) {
  // console.log(searchParams.category);
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await res.json();

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  let filterData = data.data;
  if (category) {
    filterData = data.data.filter((item) => {
      return item.category == category;
    });
  }

  return <BuyResidentialsPage data={filterData} />;
}

export default BuyResidentials;

// بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم ( این مورد حالت تمرینی دارد )
// چون ای پی آی رو ما خودمون در نکست نوشتیم و کامپوننت سرورساید هست و نیازی اینطوری عمل کنیم
// ما می تونیم مستقیم به دیتابیس کویری بزنیم
