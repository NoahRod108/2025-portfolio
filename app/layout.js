import Footer from "@/sections/Footer";
import "./globals.css";
import Header from "@/sections/Header";

export const metadata = {
  title: "Noah Rodriguez Portfolio",
  description: "My portfolio website to showcase my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[--background] text-[--primary-text]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
