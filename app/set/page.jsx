import React from "react";
import dataSet from "../../data/set.json";
import Image from "next/image";
// import TransitionEffect from "@/components/TransitionEffect";

const AboutSet = () => {
  const { aboutSET, aboutME, aboutEEE, aboutECE, aboutCE } = dataSet;
  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">
        {/* <TransitionEffect /> */}
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3 className="text-center">{aboutSET.title}</h3>
          <p>{aboutSET.content}</p>
          <div className="w-full"> 
            <Image
              src={"/images/manav-2.jpg"}
              alt="img"
              width={1000}
              height={1000}
              className="mx-auto rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3 className="text-center">{aboutME.title}</h3>
          <p>{aboutME.content}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 mt-3 mb-5">
             <Image
               src={"/images/mech-1.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/mech-2.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/mech-3.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3 className="text-center">{aboutEEE.title}</h3>
          <p>{aboutEEE.content}</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 mt-3 mb-5">
             <Image
               src={"/images/ee-1.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/ee-2.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/ee-3.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3 className="text-center">{aboutECE.title}</h3>
          <p>{aboutECE.content}</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 mt-3 mb-5">
             <Image
               src={"/images/ece-1.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/ece-2.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/ece-3.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />
          </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3 className="text-center">{aboutCE.title}</h3>
          <p>{aboutCE.content}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 mt-3 mb-5">
             <Image
               src={"/images/civil-1.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/civil-2.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />

             <Image
               src={"/images/civil-3.jpg"}
               alt="img"
               height={500}
               width={500}
               className="rounded-lg"
             />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSet;
