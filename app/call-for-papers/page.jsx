'use client';

import data from "@/data/call-for-papers.json";
import TransitionEffect from "@/components/TransitionEffect";
import { guidlines } from "@/constants";


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
        <div className="mt-10 flex flex-col gap-3">
          <h3>Submit Full Length Paper</h3>
          <p>Authors are requested to submit full-length papers online using the following web link:
          </p>

          <a href="https://cmt3.research.microsoft.com/SUSTAINED2024/" className="text-secondary underline block break-all max-w-full">https://cmt3.research.microsoft.com/SUSTAINED2024/ </a>

        </div>

        <div className=" flex flex-col gap-5 mt-10">
          <h3>Important Dates</h3>
          <table>
            <tbody>
              <tr >
                <td >&nbsp;<strong>Deadline for Full Paper Submission</strong></td>
                <td ><strong>&nbsp;30<sup>th</sup>&nbsp;July 2024</strong>&nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;<strong>Notification of Paper Acceptance/Rejection</strong></td>
                <td>&nbsp;<strong>30<sup>th</sup>&nbsp;August 2024</strong></td>
              </tr>
              <tr >
                <td >&nbsp;<strong>Deadline for Camera-Ready Paper Submission</strong></td>
                <td >&nbsp;<strong>15<sup>th</sup>&nbsp;September 2024</strong></td>
              </tr>
              <tr >
                <td >&nbsp;<strong>Early Registration Deadline</strong></td>
                <td >&nbsp;<strong>30<sup>th</sup>&nbsp;September 2024</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h3>Guidlines</h3>
          <h4>Full Paper Submission & Guidlines</h4>
          <div className="flex flex-col gap-2 py-6">{
            guidlines.map((item) => (
              <li className="">{item}</li>
            ))
          }
          </div>
        </div>
        <div>
          <p> IEEE Similarity / Plagiarism Policy:</p>
          <a href="www.ieee.org/publications/rights/plagiarism/plagiarism.html" className="text-secondary underline block break-all max-w-full">www.ieee.org/publications/rights/plagiarism/plagiarism.html
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
