import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import Button from "./Button";
import TransitionEffect from "./TransitionEffect";
import Image from "next/image";
import Carousel from "../components/Carousel";
import { more } from "../data/more";
import Marquee from "react-fast-marquee";
const HomePage = ({ homePage, aboutConference, aboutManavRachna }) => {
    const { title, location, organized, buttonTitle, image } = homePage;
    const { conferenceTitle, content } = aboutConference;
    const { collegeTitle, collegeContent } = aboutManavRachna;
    return (
        <div className="py-10 px-5 lg:px-10 relative">
            <div className="container mx-auto">
                <div className="flex flex-col items-center gap-5 ">
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

                    <a
                        href="https://forms.gle/jXHp1gtJnaxAhUzP7"
                        target="_blank"
                        className="absolute left-2 top-1"
                    >
                        <Button title="Register Now" />
                    </a>
                    <span className="text-[#b22b2f] text-lg font-semibold absolute top-4 md:block hidden">
                        IEEE CONFERENCE RECORD #63638
                    </span>
                    <Marquee className="text-center text-lg font-bold text-secondary">
                        In response to multiple requests received, we announce
                        the extension of the deadline for submission of papers
                        to 31 st October 2024.
                    </Marquee>
                    <a
                        className="absolute right-2 top-1"
                        href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FSUSTAINED2024"
                        target="_black"
                    >
                        <Button title="Submission Open" />
                    </a>
                    <Carousel />
                </div>

                <div className="flex flex-col gap-3 items-center justify-center mt-10">
                    <h3 className="text-center">{conferenceTitle}</h3>
                    <p className="text-justify">{content}</p>
                </div>

                {more?.map((item, index) => (
                    <div
                        className="flex flex-col gap-3 items-center justify-center mt-10"
                        key={index}
                    >
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
