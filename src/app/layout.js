import { yekan } from "@/utils/font";
import "./globals.css";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک | خرید و فروش ملک",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
