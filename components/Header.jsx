import React from "react";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
export const Header = () => {
  return (
    <div className="w-full px-5 lg:px-10 border-b">
      <div className="container mx-auto w-full">
        <div className="flex flex-row justify-between items-center">
           <div className="flex flex-row items-center gap-x-2">
            <Image src={"/logo.png"} alt="logo" width={150} height={150} className="" />

             <div>
                <Image
                width={150}
                height={50}
                alt="image"
                src={'/IEEE.webp'}
              />
             </div>
           </div>

           <div>
            <h2 className="text-secondary text-5xl font-semibold">SUSTAINED - 2024</h2>
           </div>

           <div className="flex flex-row gap-x-2">
            <Image
            src={'/images/mr-2-pre.png'}
            height={100}
            width={200}
            alt="Image"
          />
          <Image src={"/mrlogo.png"} width={250} height={250}  />
 
           </div>
        </div> 
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:justify-between w-full">
  
          <div className="flex flex-col gap-2 items-center">
        
          
            <p className='text-green-700 text-3xl font-semibold text-center w-full max-w-6xl'>
              International Conference on Sustainability and Technological Advancements in Engineering Domain
            </p>
            <div className="flex flex-col gap-y-2">
             <p className="text-center font-semibold text-md  mt-3">
              School of Engineering & Technology,
               <br/>
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
  );
};


