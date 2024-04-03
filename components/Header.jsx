import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { CiCalendarDate } from "react-icons/ci";
import mrlogo from "@/public/mrlogo.png";
const Header = () => {
  return (
    <div className="w-full px-5 lg:px-10 border-b">
      <div className="container mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:justify-between w-full">
          <Image src={logo} alt="logo" width={150} height={150} className="mb-20" />

          <div className="flex flex-col gap-2 items-center">
            <Image
              src={"/images/mr-2-pre.png"}
              alt="img"
              height={150}
              width={150}
            />
            <h2 className="text-secondary">SUSTAINED - 2024</h2>
            <p className="flex items-center gap-2 text-xl font-bold">
              <span>
                <CiCalendarDate />
              </span>
              13<sup>th</sup> - 14<sup>th</sup> December, 2024
            </p>
            <p className="text-[#B33D24] text-2xl text-center font-bold">
              Manav Rachna International Institute of Research and Studies, Faridabad
            </p>
          </div>

          <Image src={mrlogo} width={250} height={250}  className="mb-20"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
