import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
import TransitionEffect from "./TransitionEffect";
import Image from "next/image";
import { more } from "@/data/more";
const HomePage = ({ homePage, aboutConference, aboutManavRachna }) => {
  const { title, location, organized, buttonTitle, image } = homePage;
  const { conferenceTitle, content } = aboutConference;
  const { collegeTitle, collegeContent } = aboutManavRachna;
  return (
    <div className="py-10 px-5 lg:px-10">
      <div className="container mx-auto">
        <TransitionEffect />
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-center text-secondary">{title}</h1>

          {/* <p className="flex items-center gap-2 text-xl font-bold">
            <span>
              <CiCalendarDate />
            </span>
            30<sup>th</sup> - 31<sup>st</sup> August, 2024
          </p> */}

          {/* <p className="flex items-center gap-2 text-xl font-bold">
            <span>
              <FaLocationDot />
            </span>
            {location}
          </p> */}

          <div className="flex flex-col gap-y-2">
             <p className="text-center font-semibold text-md  mt-3">{organized}</p>
             <p className="text-center text-2xl font-semibold">&</p>
             <p className="text-center font-semibold text-md mb-5">
              SDA Committe - IEEE India Council<sup>*</sup>
             </p>

          </div>

          <div className="flex items-center gap-3">
            <a href="https://forms.gle/jXHp1gtJnaxAhUzP7" target="_blank">
              <Button title="Register Now" />
            </a>

            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FSUSTAINED2024"
              target="_black"
            >
              <Button title="Submission Open" />
            </a>
          </div>

           <Image
             src={"/images/manav-1.png"}
             alt="img"
             height={800}
             width={800}
             className="rounded-md"
           />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-10">
          <h3 className="text-center">{conferenceTitle}</h3>
          <p className="text-justify">{content}</p>
        </div>

         {more?.map((item,index) =>  (
            <div 
              key={index}
              className="flex flex-col gap-3 items-center justify-center mt-10">
               <h3 className="text-center">{item.title}</h3>
               <p className="text-justify">{item.dec}</p>
            </div>
         ))}

        <div className="flex flex-col gap-3 items-center justify-center mt-10">
          <h3 className="text-center">{collegeTitle}</h3>
          <p className="text-justify">{collegeContent}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
