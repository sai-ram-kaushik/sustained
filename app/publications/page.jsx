'use client'
import Image from "next/image";
import React from "react";

const Publications = () => {
  return (
    <div className=" px-5 lg:px-10">
      <div className="container mx-auto h-full">
        <div className="w-full py-10">
          <ul className="flex flex-col space-y-2">
            <li className="flex gap-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-black" />
              <li className="font-medium text-lg">
                All the selected papers of SUSTAINED 2024 will be published in the
                <span className="font-semibold text-black"> the proceedings of IEEE Xplore</span>
              </li>
            </li>
            <li className="flex gap-x-2 items-center">
              <div className="w-2 h-2 rounded-full bg-black" />
              <li className="font-medium text-lg">
                Selected extended versions of manuscripts will be published in <span className="font-semibold text-black">Scopus-indexed Journals</span> as follows.

              </li>
            </li>
            <div className="px-7">
              <p className="flex flex-row gap-x-2 items-center font-semibold">
                <div className="w-2 h-2 rounded-sm bg-black" />
                Special Issue in International Journal of Energy for a Clean Environment
              </p>
              <p className="flex flex-row gap-x-2 items-center font-semibold">
                <div className="w-2 h-2 rounded-sm bg-black" />
                Indian Journal of Environmental Protection
              </p>
              <p className="flex flex-row gap-x-2 items-center font-semibold">
                <div className="w-2 h-2 rounded-sm bg-black" />
                SAE International Journals
              </p>
              <p className="flex flex-row gap-x-2 items-center font-semibold">
                <div className="w-2 h-2 rounded-sm bg-black" />
                The Journal Of Solidwaste Technology And Management
              </p>
            </div>
          </ul>
          <div className="pb-80 sm:pb-0 mx-auto w-full grid gap-y-4 grid-cols-1 sm:grid-cols-2 lg:gap-y-0 lg:grid-cols-4 py-8">
            <div className="flex items-center justify-center"> 
              <Image
                src={'/images/pub-1.png'}
                width={300}
                height={300}
                alt="image"
                className="shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center"> 
              <Image
                src={'/images/pub-2.png'}
                width={300}
                height={300}
                alt="image"
                className="shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center"> 
              <Image
                src={'/images/pub-3.png'}
                width={300}
                height={300}
                alt="image"
                className="shadow-lg"
              />
            </div>
            <div className="flex items-center justify-center"> 
              <Image
                src={'/images/ran.jpg'}
                width={300}
                height={300}
                alt="image"
                className="shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Publications;
