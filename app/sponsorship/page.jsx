"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import sponsor_image from "@/public/sponsor.svg";
import TransitionEffect from "@/components/TransitionEffect";
import TabButton from "@/components/TabButton";
const SponsorshipProposal = () => {
  const [tab, setTab] = useState("Platinum Sponsorship (1,00,000 INR)");
  const [isPending, startTransition] = useTransition();
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
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
          <ul
            role="list"
            className="marker:text-secondary list-disc flex flex-col gap-5 p-3 text-justify lg:w-[40rem]"
          >
            <li>
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
            <li>
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
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h2>
            Sponsorship <span>Proposal</span>
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 lg:gap-28 mt-10">
          <div className="flex flex-col items-center lg:items-start text-justify gap-5 text-lg">
            <p>
              SUSTAINED-2024 is a two-day event held on August 30-31, 2024, and
              hosted by the School of Engineering and Technology, MRIIRS,
              Faridabad. The event will include oral and poster presentations of
              research papers grouped into parallel tracks. Keynote talks from
              experts and panel discussions are also included in the program
              schedule of the conference.
            </p>
            <p>
              SUSTAINED-2024 is likely to be attended by Scientists and
              Academicians, Engineers, Industry representatives, and Students
              from all over the globe.
            </p>
            <p>
              We invite you to team with us in the promotion of scientific and
              engineering research by sponsoring the conference. Various
              opportunities for association are available as per sponsorship
              details given below.
            </p>
          </div>

          <div>
            <Image src={sponsor_image} alt="sponsor_vector" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-16 text-lg lg:text-xl font-bold">
          <TabButton
            selectTab={() =>
              handleTabChange("Platinum Sponsorship (1,00,000 INR)")
            }
            active={tab === "Platinum Sponsorship (1,00,000 INR)"}
          >
            Platinum Sponsorship (1,00,000 INR)
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Silver Sponsorship (50,000 INR)")}
            active={tab === "Silver Sponsorship (50,000 INR)"}
          >
            Silver Sponsorship (50,000 INR)
          </TabButton>
          <TabButton
            selectTab={() =>
              handleTabChange("Dinner Sponsorship (25,0000 INR)")
            }
            active={tab === "Dinner Sponsorship (25,0000 INR)"}
          >
            Dinner Sponsorship (25,0000 INR)
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Allied Sponsorship")}
            active={tab === "Allied Sponsorship"}
          >
            Allied Sponsorship
          </TabButton>
        </div>

        <div>{Product_Tab_Data.find((t) => t.id === tab).content}</div>

        <div className="flex flex-col items-start justify-start mt-10 gap-3">
          <p>
            <b>Note:</b> For Coloured advertisements, artwork on CD with a
            printout of the same should be provided by the advertiser only.
          </p>

          <div className="flex flex-col items-start gap-3">
            <p>
              <b>General Terms & Conditions:</b>
            </p>
            <ol
              role="list"
              className="marker:text-secondary list-decimal p-3 text-justify"
            >
              <li>
                Since sponsorship opportunities are limited, these shall be
                allocated on a first come first serve basis.
              </li>
              <li>
                The sponsors shall set up their stalls (specified size) and
                bring display material as desired by them for the display
                stalls.
              </li>
              <li>
                All payments for sponsorship/stall bookings are to be made in
                advance.
              </li>
              <li>All transactions are subject to Noida jurisdiction.</li>
              <li>
                All stall requirements shall be made known seven days before the
                event. All additions shall be charged appropriately.
              </li>
              <li>
                Company&apos;s Logo & complete Name of the Company with style
                will be required for acknowledgment through Backdrops, Banners,
                brochures, stationary, Invitation cards & other promotional
                material.
              </li>
            </ol>
          </div>

          <p>
            <b>Mode of Payment:</b> All payments are to be made through
            DD/Cheque drawn in favour of &apos;Manav Rachna International
            Institute of Research and Studies, Haryana&apos; payable at
            Faridabad.
          </p>
          <p>
            Please feel free to contact the finance person regarding any query
            on sponsorship:
          </p>
          <p>
            <b>Dr. Devendra Vashisht</b> Mobile number: 8800495701 Email
            id: devendra.set@mriu.edu.in
          </p>
        </div>
      </div>
    </div>
  );
};

export default SponsorshipProposal;
