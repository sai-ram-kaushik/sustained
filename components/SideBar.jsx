"use client"
import React, { useState } from "react";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { menuList } from "../constants";
import Link from "next/link";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="w-full h-[10vh] z-[999] bg-background lg:bg-secondary mt-3 lg:text-background sticky top-0">
        <div className="flex items-center justify-between lg:justify-center w-full h-full px-6 lg:px-16">
          <div className="block lg:hidden">
            <Image src={"/logo.png"} width={100} height={100} alt="logo" />
          </div>
          <div className="hidden lg:flex items-center gap-5">
            {menuList.map((list, index) => (
              <ul
                key={index}
                className="text-lg font-normal duration-200 cursor-pointer">
                <Link href={list.path}>
                  {" "}
                  <li>{list.label}</li>
                </Link>
              </ul>
            ))}
          </div>

          <div
            className="block lg:hidden p-3 rounded-full bg-secondary text-background"
            onClick={handleChange}>
            {nav ? <IoCloseSharp size={30} /> : <RiMenuFill size={30} />}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] bg-primary text-background overflow-y-scroll p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
          }>
          <div className="flex flex-col items-center justify-center w-full h-full gap-7">
            {menuList.map((link, index) => (
              <ul
                key={index}
                className="text-xl text-background"
                onClick={handleChange}>
                <Link
                  href={link.path}
                  className="text-background hover:text-secondary text-center duration-200">
                  <li>{link.label}</li>
                </Link>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;




