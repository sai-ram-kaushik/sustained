"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import logo from '@/public/logo.png'
import { menuList, socials } from "@/constants";
const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

    <div className="w-full bg-[#10182F]">
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <Image src={logo} width={100} height={100} alt="logo" />

        <div className="hidden text-[10px] lg:flex items-center gap-6 text-background">
          {menuList.map((list, index) => (
            <ul key={index}>
              <Link href={list.path}>
                {" "}
                <li>{list.label}</li>
              </Link>
            </ul>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-8">
          {/* <div className="flex flex-row gap-2 items-center text-sm text-white">
            <BiPhoneCall />
            <p>+91 9466239008 (Dr. Rajendra Kumar)</p>
          </div> */}
          <div className="flex flex-row gap-2 items-center text-sm text-white">
            <AiOutlineMail />
            <p className="text-background">sustained@mriu.edu.in</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((link) => (
            <div
              key={link.key}
              className="bg-secondary text-background rounded-full p-3"
            >
              {/* <a href={link.path} target="_blank"> */}
              <div>{link.icon}</div>
              {/* </a> */}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center text-sm text-white text-center">
          Copyright &#169; Sustained - 2024. All Rights Resevered
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
