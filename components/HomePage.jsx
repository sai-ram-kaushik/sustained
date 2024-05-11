import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
import TransitionEffect from "./TransitionEffect";
import Image from "next/image";
import { more } from "../data/more";
const HomePage = ({ homePage, aboutConference, aboutManavRachna }) => {
  const { title, location, organized, buttonTitle, image } = homePage;
  const { conferenceTitle, content } = aboutConference;
  const { collegeTitle, collegeContent } = aboutManavRachna;
  return (
    <div className="py-10 px-5 lg:px-10 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-5">
    

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

         
            <a href="https://forms.gle/jXHp1gtJnaxAhUzP7" target="_blank" className="absolute left-2 top-1">
              <Button title="Register Now" />
            </a>

            <a
              className="absolute right-2 top-1"
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FSUSTAINED2024"
              target="_black"
            >
              <Button title="Submission Open" />
            </a>
  

           <div className="rounded-xl">
             <Image
             
             src={"/images/new.jpg"}
             alt="img"
             height={1000}
             width={1000}
             className="rounded-xl py-11"
           />
           </div>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-10">
          <h3 className="text-center">{conferenceTitle}</h3>
          <p className="text-justify">{content}</p>
        </div>

         {more?.map((item,index) =>  (
            <div className="flex flex-col gap-3 items-center justify-center mt-10" key={index}>
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
