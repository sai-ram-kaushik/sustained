import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import mrlogo from "@/public/mrlogo.png";
const Header = () => {
  return (
    <div className="w-full px-5 lg:px-10 border border-b">
      <div className="container mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:justify-between w-full">
          <Image src={logo} alt="logo" width={150} height={150} />

          <div className="flex flex-col items-center">
            <h2 className="text-secondary">SUSTAINED - 2024</h2>
            <p className="text-[#B33D24] text-center">
              Manav Rachna International Institute of Research and Studies
            </p>
          </div>

          <Image src={mrlogo} width={250} height={250} />
        </div>
      </div>
    </div>
  );
};

export default Header;
