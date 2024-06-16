import BuyResidentialsPage from "@/template/BuyResidentials/BuyResidentialsPage";
import axios from "axios";

async function BuyResidentials(props) {
  //   console.log(props.searchParams);

  // بهتر است در کامپوننت های سرورساید از ای پی آی روت استفاده نکنیم ( این مورد حالت تمرینی دارد )
  // چون ای پی آی رو ما خودمون در نکست نوشتیم و کامپوننت سرورساید هست و نیازی اینطوری عمل کنیم
  // ما می تونیم مستقیم به دیتابیس کویری بزنیم
  const { data } = await axios.get("http://localhost:3000/api/profile", {
    caches: "no-store",
  });

  if (data.error) return <h3>مشکلی پیش آمده است</h3>;

  console.log(data.data);

  return <BuyResidentialsPage data={data.data} />;
}

export default BuyResidentials;
