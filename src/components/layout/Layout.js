import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";
import { Toaster } from "react-hot-toast";

function Layout({ children }) {
  const style = { minHeight: "700px", padding: "0px 20px" };

  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Toaster />
      <Footer />
    </>
  );
}

export default Layout;
