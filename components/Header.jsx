import React from "react";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
export const Header = () => {
  return (
    <div className="w-full px-5 lg:px-10 border-b">
      <div className="container mx-auto w-full">
        <div className="flex flex-row justify-between items-center border-b-4 border-secondary ">
          <div className="flex flex-row items-center gap-x-2">
            <div>
              <Image
                width={110}
                height={50}
                alt="image"
                src={'/set.jpg'}
                className="h-fit lg:block hidden"
              />
            </div>
            <Image src={"/naac.jpeg"} alt="logo" width={250} height={250} className="h-fit" />

          </div>


          <div className="flex flex-row gap-x-2 items-center">
            <Image className="h-fit "
              src={'/IEEElogo.webp'}
              height={100}
              width={180}
              alt="Image"
            />
            <Image src={"/IEEE.webp"} width={70} height={100} className="h-fit lg:block hidden" />
            <Image src={"/logo.png"} width={100} height={120} className="h-fit lg:block hidden" />

          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-3 mt-10">
          <div>
            <h2 className="text-secondary text-5xl font-semibold">SUSTAINED - 2024</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:justify-center w-full">

            <div className="flex flex-col gap-2 items-center">


              <p className='text-green-700 text-3xl font-semibold text-center w-full max-w-6xl'>
                International Conference on Sustainability and Technological Advancements in Engineering Domain
              </p>
              <h4 className="text-[#b22b2f]">In Association With IEEE India Council</h4>
              <div className="flex flex-col gap-y-2">
                <p className="text-center font-semibold text-md ">
                  School of Engineering & Technology,
                  <br />
                  Manav Rachna International Institute of Research and Studies, Faridabad
                </p>
                <div className="flex items-center justify-center gap-x-3">

                  <p className="flex items-center gap-2 text-xl font-bold">
                    <span>
                      <CiCalendarDate />
                    </span>
                    13<sup>th</sup> - 14<sup>th</sup> December, 2024
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


