import React from "react";
import data from "../data/academic-partners.json";
const AcademicPartners = () => {
  const {
    academicPartners: { title, content },
  } = data;
  return (
    <div className="px-5 lg:px-10 py-10 min-w-[300px] lg:sticky lg:top-0 border-l">
      {/* <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-center">{title}</h3>

          <div className="flex flex-col items-center">
            {content.map((list, index) => {
              return (
                <div key={index}>
                  <img src={list.image} />
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AcademicPartners;
