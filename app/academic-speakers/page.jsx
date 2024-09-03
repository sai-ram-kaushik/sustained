"use client"

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import keynote from "../../data/keynote-speakers.json"

const Publications = () => {


  return (
    <div className="px-5 lg:px-10">
      <div className="container my-5 flex flex-col justify-center gap-20">
        <div className="flex flex-col items-center w-full gap-10">
          <h3 className="text-secondary">Guest Of Honor</h3>
          <div className="flex md:flex-row flex-col w-full justify-evenly items-center lg:gap-0 gap-10">

            <div className="flex flex-col items-center gap-2">
              <Image src={"/guest-of-honor/DeepakMathur.jpg"} height={200} width={200} className="shadow-md rounded-md object-cover h-64" />
              <span className="text-xl font-bold text-center font-unbounded text-black">Mr Deepak Mathur</span>
              <span className="text-center text-secondary">Vice President IEEE MGA</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <Image src={"/guest-of-honor/DebabrataDas.jpg"} height={200} width={200} className="shadow-md rounded-md object-cover h-64" />
                  <span className="text-xl font-bold text-center text-black ">Dr. Debabrata Das</span>
              <span className="text-center text-secondary">Chair of IEEE India Council &amp; Director, IIIT Bangalore</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-10">
          <h3 className="text-secondary">Keynote Speakers</h3>
          {/* carousel */}
          <Marquee
            pauseOnHover
            speed={150}
          >
            {keynote.map((speaker, index) => (
              <div key={index} className="flex flex-col gap-1 items-center  w-[350px]">
                <Image src={speaker.Image} height={200} width={200} className="shadow-md rounded-md object-cover h-64 " />
                <span className="text-xl font-bold text-center text-black w-[300px] ">{speaker.Name}</span>
                <span className="text-center text-secondary w-[300px]">{speaker.Designation}, {speaker.Affiliation}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Publications;
