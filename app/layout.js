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
      <StarParticles id="tsparticles" />
      <body className="text-[--primary-text] px-[40px] items-center flex flex-col min-h-lvh">
        <Header />
        <div className="container">
          <main className="flex flex-col gap-52 text-primaryText max-w-ful">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
