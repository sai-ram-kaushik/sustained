import { menuList } from "@/constants";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className=" px-5 lg:px-10 py-10 border-l lg:sticky lg:top-0">
      <div className="container mx-auto w-full">
        <div className="flex flex-col items-start gap-5">
          {menuList.map((list, index) => {
            return (
              <ul className="min-w-[300px] bg-secondary px-3 py-2 rounded-lg text-background font-semibold" key={index}>
                <Link href={list.path} className="flex items-center gap-3">
                  <li className="text-background">{list.icon}</li>
                  <li>{list.label}</li>
                </Link>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
