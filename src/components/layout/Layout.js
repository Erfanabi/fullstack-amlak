import Footer from "@/layout/Footer/Footer";
import Header from "@/layout/Header/Header";

function Layout({ children }) {
  const style = { minHeight: "700px", padding: "0px 20px" };

  return (
    <>
      <Header />
      <div style={style}>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
