import "./globals.css";
import SideBar from "@/components/SideBar";
import AcademicPartners from "@/components/AcademicPartners";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sustained - 2024",
  description: "International Conference",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SideBar />
        <div>
          <main className="flex-grow">{children}</main>
          <AcademicPartners />
        </div>
        <Footer />
      </body>
    </html>
  );
}
