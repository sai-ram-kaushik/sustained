'use client';

import data from "@/data/call-for-papers.json";
import TransitionEffect from "@/components/TransitionEffect";


const CallForPapers = () => {
  const {
    callForPapers: { title, subTitle, content },
  } = data;
  

  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">
        <TransitionEffect />
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </div>

        <div className="grid grid-col-1 lg:grid-cols-3 gap-6 items-center justify-center mt-10">
          {content.map((date, index) => {
            return (
              <div
                key={index}
                className="border border-slate-600/70 p-3 pb-4 rounded-md h-[100px] shadow-md"
              >
                <p className="font-semibold text-slate-600 text-lg">{date.label}</p>
                <p className="text-sm font-semibold text-slate-700 mt-3 pb-3">{date.date}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
