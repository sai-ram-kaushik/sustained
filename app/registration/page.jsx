import React from "react";
import Button from "@/components/Button";
import { FaLongArrowAltRight } from "react-icons/fa";
import TransitionEffect from "@/components/TransitionEffect";
const Registration = () => {
  return (
    <div className="px-4 lg:px-10 mt-5">
      <div className="container mx-auto">
        <TransitionEffect />
        <div className="flex items-center justify-center">
          <h2>
            Registration <span>Guidelines</span>
          </h2>
        </div>
        <div className="mt-14 justify-center flex text-gray-600 ">
          <table>
            <thead>
              <tr>
                <th className="text-lg font-bold">Nature of Participant</th>
                <th colSpan="2" className="text-lg font-bold">
                  For Indian Authors and Deligates (in INR)
                </th>
                <th colSpan="2" className="text-lg font-bold">
                  For Foreign Authors and Deligates (in USD)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-lg font-bold">Researchers from Industry</td>
                <td colSpan="2">9,000</td>
                <td>400</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">
                  Faculty from an academic institution
                </td>
                <td colSpan="2">8,000</td>
                <td>350</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">
                  Students (UG/PG)/ Research Scholar
                </td>
                <td colSpan="2">6,000</td>
                <td>250</td>
              </tr>

              <tr>
                <td className="text-lg font-bold">Attendee only</td>
                <td colSpan="2">2,000</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center mt-5">
          <ul
            role="list"
            className="marker:text-secondary list-disc text-justify"
          >
            <li>
              If author submit more than one paper, he/she will receive
              significant concession in the second registration. For more
              details please contact Conference Chair and Convener.
            </li>
            <li>
              Additional Fees will be charged for publication of extended
              version of manuscripts according to the Journal.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center mt-5">
          <a href="https://forms.gle/jXHp1gtJnaxAhUzP7" target="_blank">
            <Button title="Click Here to Register" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
