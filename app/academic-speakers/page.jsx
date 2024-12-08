"use client"

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import keynote from "../../data/keynote-speakers.json"
import guest from "../../data/guest-of-honor.json"

const Publications = () => {


  return (
    <div className="px-5 lg:px-10">
      <div className="container my-5 flex flex-col justify-center gap-20">
        <div className="flex flex-col items-center w-full gap-10">
          <h3 className="text-secondary">Chief Guest</h3>
          <div className="flex md:flex-row flex-col w-full justify-evenly items-center lg:gap-0 gap-10">

            <div className="flex flex-col items-center gap-2">
              <Image src={"/keynote/chief.png"} height={200} width={200} className="shadow-md rounded-md object-cover h-64" />
              <span className="text-xl font-bold text-center font-unbounded text-black">Dr. Avichal Raj Kapur</span>
              <span className="text-center text-secondary">Joint Secretary, 
University Grants Commission,
New Delhi
</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full gap-10">
          <h3 className="text-secondary">Guests of Honor</h3>
          {/* carousel */}
          <Marquee
            pauseOnHover
            speed={150}
          >
            {guest.map((speaker, index) => (
              <div key={index} className="flex flex-col gap-1 items-center  w-[350px]">
                <Image src={speaker.Image} height={200} width={200} className="shadow-md rounded-md object-cover h-64 " />
                <span className="text-xl font-bold text-center text-black w-[300px] ">{speaker.Name}</span>
                <span className="text-center text-secondary w-[300px]">{speaker.Designation}, {speaker.Affiliation}</span>
              </div>
            ))}
          </Marquee>
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
