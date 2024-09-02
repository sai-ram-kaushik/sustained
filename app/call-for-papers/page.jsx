'use client';

import data from "../../data/call-for-papers.json";
import { guidlines } from "../../constants/index";
import Link from "next/link";


const CallForPapers = () => {
  const {
    callForPapers: { title, subTitle, content },
  } = data;


  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">

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
                <td >&nbsp;Deadline for Full Paper Submission</td>
                <td >
                  <span className="line-through decoration-red-500 text-black"><strong>&nbsp;30<sup>th</sup>&nbsp;August 2024</strong>&nbsp;</span>
                  <strong className="text-red-500">&nbsp;30<sup>th</sup>&nbsp;September 2024</strong>&nbsp;
                </td>
              </tr>
              <tr>
                <td>&nbsp;Notification of Paper Acceptance/Rejection</td>
                <td>
                  <span className="line-through decoration-red-500 text-black">&nbsp;<strong>30<sup>th</sup>&nbsp;September 2024</strong></span>
                  &nbsp;<strong  className="text-red-500">10<sup>th</sup>&nbsp;October 2024</strong>
                </td>
              </tr>
              <tr >
                <td >&nbsp;Deadline for Camera-Ready Paper Submission</td>
                <td >
                  <span className="line-through decoration-red-500 text-black">&nbsp;<strong>15<sup>th</sup>&nbsp;October 2024</strong></span>
                  &nbsp;<strong className="text-red-500">15<sup>th</sup>&nbsp;October 2024</strong>
                </td>
              </tr>
              <tr >
                <td >&nbsp;Early Registration Deadline</td>
                <td >
                  <span className="line-through decoration-red-500 text-black">&nbsp;<strong>30<sup>th</sup>&nbsp;September 2024</strong></span>
                  &nbsp;<strong className="text-red-500">15<sup>th</sup>&nbsp;October 2024</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <h3>Guidelines</h3>
          <ol className="flex flex-col gap-2 py-6">{
            guidlines.map((item, index) => (
              <li key={index} className="list-disc">{item}</li>
            ))
          }
          </ol>
        </div>
        <div>
          <h4> IEEE Similarity / Plagiarism Policy:</h4>
          <Link
            href={'https://www.ieee.org/publications/rights/plagiarism/plagiarism.html'}
            target="_blank"
          >
            https://www.ieee.org/publications/rights/plagiarism/plagiarism.html
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
