import "./globals.css";

import AcademicPartners from "../components/AcademicPartners.jsx"
import {Header} from '../components/Header.jsx'
import Footer from "../components/Footer.jsx";
import SideBar from "../components/SideBar.jsx"

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
