"use client"

import data from "../../data/organizing-committee.json"
import {
  accommodation,
  chief_patrons,
  co_convenor,
  covenors,
  co_patrons,
  conference_chair,
  discipline,
  finance,
  general_chair,
  inaugural_and_valedictory_committee,
  industrial,
  international_collaboration,
  national_collaboration,
  patrons,
  poster,
  publicity,
  registration,
  review,
  sponsorship,
  website,
  conference,
  worshop
} from "../../constants";
// import adData from "../../data/advisory-committee.json"
const Committee = () => {

  const {
    organizingCommittee: { title: organizingCommitteeTitle },
  } = data;




  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">
    
        <div className="flex items-center justify-center mt-5 gap-5">
          <h3 className={`text-secondary `} >Organizing Committee</h3>
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Chief Patron</h3>
        </div>


        <div className="flex flex-col items-start justify-start gap-5 mt-5">
          {chief_patrons.map((list, index) => (
            <div key={index} className="flex items-center gap-3">
              <p className="text-lg text-center font-unbounded">
                {list.label},
              </p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Patron</h3>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 mt-5">
          {patrons.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">
                {list.label},
              </p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>


        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">General Chair</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {general_chair.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-xl text-center font-unbounded">
                {list.label},
              </p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Technical Program Chair</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-3 items-center">
              <p className="text-xl text-center font-unbounded">
              Prof. (Dr.) Geeta Nijhawan,
              </p>
              <p className="text-center text-secondary ">Associate Dean SET, MRIIRS, Faridabad</p>
            </div>
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Conference Chair</h3>
        </div>

        <div className="flex item-start justify-start gap-10 lg:gap-20 mt-5">
          {conference_chair.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">
                {list.label},
              </p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>


        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Convenors</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {covenors.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">
                {list.label},
              </p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>



        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Co - Convenors</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {co_convenor.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">
                {list.label},
              </p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>



        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            International Collaboration Committee
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {international_collaboration.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

         <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Industrial Collaboration Committee</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {industrial.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>


        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Publication Committee</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {review.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Conference Oversight Committe</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {conference.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Workshop and Session Committe</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {worshop.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>



        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Registration and Finance Committee</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {finance.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Sponsorship Committee</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {sponsorship.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Publicity Committee</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {publicity.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
             Local Arrangement Committee
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {inaugural_and_valedictory_committee.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

      

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">Website Management Committee</h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {website.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-start mt-5">
          <h3 className="text-secondary">
            Accommodation and Hospitality Management Committee
          </h3>
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {accommodation.map((list, index) => (
            <div key={index} className="flex gap-3 items-center">
              <p className="text-lg text-center font-unbounded">{list.label}</p>
              <p className="text-center text-secondary">{list.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
