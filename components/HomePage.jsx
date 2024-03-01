import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
import TransitionEffect from "./TransitionEffect";
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

          <p className="flex items-center gap-2 text-xl font-bold">
            <span>
              <CiCalendarDate />
            </span>
            30<sup>th</sup> - 31<sup>st</sup> August, 2024
          </p>

          <p className="flex items-center gap-2 text-xl font-bold">
            <span>
              <FaLocationDot />
            </span>
            {location}
          </p>

          <p className="text-center">{organized}</p>

          <Button title={buttonTitle} />

          <img src={image} alt="conference_image" />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-10">
          <h3 className="text-center">{conferenceTitle}</h3>
          <p className="text-justify">{content}</p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-10">
          <h3 className="text-center">{collegeTitle}</h3>
          <p className="text-justify">{collegeContent}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
