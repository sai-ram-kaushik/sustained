'use client';
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
const Registration = () => {

  const [mounted,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }


  return (
    <div className="px-4 lg:px-10 mt-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2>
            Registration <span>Guidelines</span>
          </h2>
        </div>
        <div className="mt-14 justify-center flex text-gray-600 ">
          <table>
              <tr className="text-lg font-bold text-black">
                <th>Registration Type</th>
                <th>Country</th>
                <th>IEEE Member</th>
                <th>Non-IEEE Member</th>
              </tr>
               <tr className="text-black font-semibold text-md">
                 <td>Industry Person</td>
                 <td>
                  <tr>Indian</tr>
                  <tr>Foreigner</tr>
                 </td>
                 <td>
                  <tr>10000 INR</tr>
                  <tr>350 USD</tr>
                 </td>
                 <td>
                  <tr>11000 INR</tr>
                  <tr>400 USD</tr>
                 </td>
               </tr>
               <tr className="text-black font-semibold text-md">
                 <td>Faculty Members</td>
                 <td>
                  <tr>Indian</tr>
                  <tr>Foreigner</tr>
                 </td>
                 <td>
                  <tr>8500 INR</tr>
                  <tr>300 USD</tr>
                 </td>
                 <td>
                  <tr>9500 INR</tr>
                  <tr>350 USD</tr>
                 </td>
               </tr>
               <tr className="text-black font-semibold text-md">
                 <td>Students</td>
                 <td>
                  <tr>Indian</tr>
                  <tr>Foreigner</tr>
                 </td>
                 <td>
                  <tr>6000 INR</tr>
                  <tr>200 USD</tr>
                 </td>
                 <td>
                  <tr>7000 INR</tr>
                  <tr>250 USD</tr>
                 </td>
               </tr>
               <tr className="text-black font-semibold text-md">
                 <td>Attendee Only</td>
                 <td>
                  <tr>Indian</tr>
                  <tr>Foreigner</tr>
                 </td>
                 <td>
                  <tr>2000 INR</tr>
                  <tr>50 USD</tr>
                 </td>
                 <td>
                  <tr>3000 INR</tr>
                  <tr>100 USD</tr>
                 </td>
               </tr>
              </table>
        </div>

        <div className="flex items-center justify-center mt-5">
          <ul
            role="list"
            className="marker:text-secondary list-disc text-justify flex flex-col gap-5"
          >
            <li>
             •	If the author submits more than one paper, he/she will receive a significant <span className="text-black 
             font-bold">concession (10%) </span>in the subsequent registrations. For more details, please contact the organizing committee.
            </li>
            <li>
              An extended version of the presented paper will be considered for publication in <span className="text-black font-extrabold">various journals </span> which all are SCOPUS indexed.<span className="text-black font-extrabold"> *Additional Fees of INR 3000 </span>will be charged for the publication of extended versions of manuscripts according to the Journal applicable to the student category only.
            </li>
            <li>
             . An extra page charge of ₹ 1000/- INR per page for Indian authors and $ 50 per page for international authors will be chargeable from the authors during the registration process.
            </li>
          </ul>
        </div>

        <div className="my-10">
          <div className="font-extrabold text-xl mb-3">Account Details</div>
          <table>
            <tbody>
              <tr >
                <td >&nbsp;Name of Account</td>
                <td >&nbsp;Manav Rachna International Institute of Research and Studies &nbsp;</td>
              </tr>
              <tr>
                <td>&nbsp;Account Number</td>
                <td>&nbsp;201004119068</td>
              </tr>
          
              <tr >
                <td >&nbsp;IFSC Code</td>
                <td >&nbsp;INDB0000702</td>
              </tr>
              <tr >
                <td >&nbsp;Bank Name</td>
                <td >&nbsp;IndusInd Bank</td>
              </tr>
              <tr >
                <td >&nbsp;SWIFT CODE</td>
                <td >&nbsp;INDBINBB</td>
              </tr>
            </tbody>
          </table>
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
