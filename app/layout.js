import Footer from "@/sections/Footer";
import StarParticles from "@/components/StarParticles";
import "./globals.css";
import Header from "@/sections/Header";

export const metadata = {
  title: "Noah Rodriguez Portfolio",
  description: "My portfolio website to showcase my projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-[--primary-text] px-12 sm:px-36 items-center flex flex-col min-h-lvh">
        <StarParticles id="tsparticles" />
        <main className="container text-primaryText">
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
