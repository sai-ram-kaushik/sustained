"use client";
import React, { useState, useTransition } from "react";
import { sponsorships} from "../../data/sponsorship.js";
import { useEffect } from "react";
const SponsorshipProposal = () => {

 const [mounted,setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  },[]);

  if(!mounted){
    return null;
  }


  const Product_Tab_Data = [
    {
      title: "Platinum Sponsorship (1,00,000 INR)",
      id: "Platinum Sponsorship (1,00,000 INR)",
      content: (
        <div className="flex flex-col items-center justify-center mt-5">
          <ul
            role="list"
            className="marker:text-secondary list-disc flex flex-col gap-5 p-3 text-justify"
          >
            <li>Keynote speaker in one of the sessions of the conference.</li>
            <li>Recognition on all Press releases.</li>
            <li>Company logo and link on the conference website.</li>
            <li>Acknowledgement during the inaugural ceremony.</li>
            <li>
              Colour advertisement of the sponsor/ product on the front page of
              the Souvenir.
            </li>
            <li>
              Company&apos;s name and logo printed on the conference
              proceedings, posters, and signage.
            </li>
            <li>
              Company&apos;s brochure and demo CD to be included in the
              Conference kit.
            </li>
            <li>Two complimentary registrations.</li>
            <li>One double exhibit space.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Silver Sponsorship (50,000 INR)",
      id: "Silver Sponsorship (50,000 INR)",
      content: (
        <div className="flex flex-col items-center justify-center mt-5">
          <ul
            role="list"
            className="marker:text-secondary list-disc flex flex-col gap-5 p-3 text-justify"
          >
            <li>Company logo and link on the Conference Website.</li>
            <li>Acknowledgement during the Inaugural Ceremony.</li>
            <li>
              Colour advertisement of the sponsor/product in the Conference
              Souvenir.
            </li>
            <li>
              Company&apos;s name and logo printed on the Conference
              Proceedings, Posters, and Signage.
            </li>
            <li>One complimentary registration.</li>
            <li>One exhibit space.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Bronze Sponsorship (40,000 INR)",
      id: "Bronze Sponsorship (40,000 INR)",
      content: (
        <div className="flex flex-col items-center justify-center mt-5">
          <ul
            role="list"
            className="marker:text-secondary list-disc flex flex-col gap-5 p-3 text-justify "
          >
            <li>Company logo and link on the Conference Website.</li>
            <li>
              Colour advertisement of the sponsor/ product in the Conference
              Souvenir.
            </li>
            <li>
              Company&apos;s name and logo printed on the Conference Signage.
            </li>
            <li>Display of Company Banner within the Lunch Area.</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Dinner Sponsorship (25,0000 INR)",
      id: "Dinner Sponsorship (25,0000 INR)",
      content: (
        <div className="flex flex-col items-center justify-center mt-5">
          <ul
            role="list"
            className="marker:text-secondary list-disc flex flex-col gap-5 p-3 text-justify "
          >
            <li>Company Logo and link on the Conference Website</li>
            <li>
              Colour Advertisement of sponsor/product in the Conference
              Souvenir.
            </li>
            <li>Special talk/Presentation of 10 minutes before the dinner</li>
            <li>
              Company&apos;s Name and Logo printed on the Conference Signage.
            </li>
            <li>Display of Company Banner within the Dinner Area</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Allied Sponsorship",
      id: "Allied Sponsorship",
      content: (
        <div className="flex flex-col items-center justify-center mt-5">
          <ul role="list"
            className="marker:text-secondary list-disc flex flex-col gap-5 p-3 text-justify lg:w-[40rem]"
          >
            <li >
              Conference Kit Sponsorship: 50,000 INR (Benefits: Sponsor&apos;s
              Logo along with Organizer&apos;s Logo will be placed on the bag)
            </li>
            <li>
              Banner and Poster Sponsorship: 25,000 INR (Benefits: Conference
              Banner and Poster contain the sponsor&apos;s logo. There will be
              placed at the Conference Venue and Publicized across colleges and
              Universities.)
            </li>
            <li>Pen drive, T-shirts, and Blazers Sponsorship.</li>
            <li >
              Any other sponsorship as per mutual understanding and open
              discussion.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full px-4 lg:px-16 mt-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="text-black">
            Sponsorship Proposal
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 lg:gap-28 mt-10">
          <div className="flex flex-col items-center lg:items-start text-justify gap-5 text-lg">
            <p>
              SUSTAINED-2024 is a two-day event held on December 13-14, 2024, and hosted by the School of Engineering and Technology, MRIIRS, Faridabad. The event will include oral and poster presentations of research papers grouped into parallel tracks. Keynote talks from experts and panel discussions are also included in the program schedule of the conference.
            </p>
            <p>
              SUSTAINED-2024 is likely to be attended by Scientists and Academicians, Engineers, Industry representatives, and Students from all over the globe. So, it will be a golden platform to showcase your business/ product/ services and shape the conference for our mutual benefit.
            </p>
            <p>
             We invite you to team with us in the promotion of scientific and engineering research by sponsoring the conference. Various opportunities for association are available as per sponsorship details given below. To become a sponsor of the First IEEE International Conference on Sustainability and Technological Advancements in Engineering Domain (SUSTAINED 2024), please complete the form and email it to sustained@mriu.edu.in
            </p>

            <div className="self-center">
              <table>
                <tr className="text-lg font-bold text-black">
                  <th>SPONSORSHIP RATES PARTICULARS</th>
                  <th>AMOUNT (INDIAN RS)</th>
                  <th>REMARKS</th>
               </tr>
                <tr className="text-md">
                  <th>Platinum Sponsor</th>
                  <th>₹ 2,00,000/-	</th>
                  <th></th>
                </tr>
                <tr className="text-md">
                  <th>Gold Sponsor		</th>
                  <th>₹ 1,00,000/-	</th>
                  <th></th>
                </tr>
                <tr className="text-md">
                  <th>Silver Sponsor</th>
                  <th>₹ 50,000/-</th>
                  <th></th>
                </tr>
                <tr className="text-md">
                  <th>Technical Session Sponsorship</th>
                  <th>₹ 50,000/-	</th>
                  <th>(Per Day)</th>
                </tr>
                <tr className="text-md">
                  <th>Conference Banquet Dinner</th>
                  <th>₹ 1,50,000/-</th>
                  <th>on Dec 13, 2024</th>
                </tr>
                <tr className="text-md">
                  <th>Delegate Kits</th>
                  <th>₹ 1,50,000/-</th>
                  <th></th>
                </tr>
                <tr className="text-md">
                  <th>High Tea & Lunch</th>
                  <th>₹ 50,000/-</th>
                  <th>(Per Day)</th>
                </tr>
              </table>
            </div>
          </div>


        </div>

        <div className="flex flex-col gap-y-3 py-10 mt-11">
           {sponsorships.map(item => (
              <div className="mb-3 pb-3">
                <p className="text-xl text-secondaryn font-semibold">{item.title}</p>
                <div>
                  {item.data.map(data => (
                    <div className="flex flex-row gap-x-2 items-center mt-2">
                       <div className="w-2 h-2 rounded-full bg-black/70"/>
                       <p className="text-black text-md font-medium">{data}</p>
                    </div>
                  ))}
                </div>
              </div>
           ))}
        </div>
        <div className="flex flex-col">
          <p className="text-xl text-black font-semibold">
           ALLIED SPONSORSHIP:
          </p>
          <ol className="mt-1 flex-col gap-y-2">
            <li className=" text-black text-md font-medium list-disc">Banner and Poster Sponsorship: 25,000 INR (Benefits: Conference Banner and Poster contain the sponsor's logo.) There will be an area for placement at the Conference Venue and Publicized across colleges and Universities.</li>
           <li className=" text-black text-md font-medium list-disc">Pen drive, T-shirts, and Blazers Sponsorship.</li>
           <li className=" text-black text-md font-medium list-disc">Pen drive, T-shirts, and Blazers Sponsorship.</li>
          </ol>

          <div className="mt-7 self-center">
            <table>
              <tr>
                <th className="text-lg">Advertisement Size and Location</th>
                <th className="text-lg">Rate (INR)</th>
              </tr>
              <tr>
                <th>Back Cover Page (Colour)</th>
                <th>50,000</th>
              </tr>
              <tr>
                <th>Inner Cover Page (Front & Back)</th>
                <th>40,000</th>
              </tr>
              <tr>
                <th>Full Page (Colour)</th>
                <th>30,000</th>
              </tr>
              <tr>
                <th>Full Page (B & W)</th>
                <th>20,000</th>
              </tr>
              <tr>
                <th>Half Page (Colour)</th>
                <th>15,000</th>
              </tr>
              <tr>
                <th>Half Page (B & W)</th>
                <th>12,000</th>
              </tr>
            </table>
          </div>
        </div>
        <div className="mt-3">
          <p className="line-clamp-2">
            <span className="text-black font-bold text-md">Note : </span>
            For Coloured advertisements, artwork on CD with a printout of the same should be provided by the advertiser only.
          </p>
        </div>
        <div className="mt-5">
           <p className="text-xl text-black font-semibold">General Terms & Conditions:</p>
           <ol className="flex flex-col gap-y-2 mt-3">
              <li className="list-decimal ">Since sponsorship opportunities are limited, these shall be allocated on a first come first serve basis.</li>
              <li className="list-decimal "> The sponsors shall set up their stalls (specified size) and bring display material as desired by them for the display stalls.</li>
              <li className="list-decimal "> The sponsors shall set up their stalls (specified size) and bring display material as desired by them for the display stalls.</li>
              <li className="list-decimal ">All transactions are subject to Faridabad jurisdiction.</li>
              <li className="list-decimal ">All stall requirements shall be made known seven days before the evenAll additions shall be charged appropriately.</li>
              <li className="list-decimal ">
               Company's Logo & complete Name of the Company with style will be required for acknowledgment through Backdrops, Banners, brochures, stationary, Invitation cards & other promotional material.
              </li>
           </ol>
        </div>
        <div className="mt-4 py-6">
          <p>
            <span className="text-3xl font-semibold">Mode of Payment : </span>
            All payments are to be made through DD/Cheque drawn in favour of 'Manav Rachna International Institute of Research and Studies, Faridabad, Haryana' payable at Faridabad.
          </p>

          <p className="text-xl font-semibold mt-2">
            Please feel free to contact us regarding any query on sponsorship: sustained@mriu.edu.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipProposal;
