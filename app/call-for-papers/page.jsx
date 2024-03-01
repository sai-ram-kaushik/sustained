import React from "react";
import data from "@/data/call-for-papers.json";
const CallForPapers = () => {
  const {
    callForPapers: { title, subTitle, content },
  } = data;
  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </div>

        <div className="grid grid-col-1 lg:grid-cols-3 gap-6 items-center justify-center mt-10">
          {content.map((date, index) => {
            return (
              <div key={index} className="border border-secondary rounded-lg min-w-[12rem] min-h-[8rem] p-3">
                <h4 className="text-secondary">{date.label}</h4>
                <p>{date.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
