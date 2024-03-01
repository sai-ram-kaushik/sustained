import React from "react";
import data from "@/data/conference-theme.json";
import TransitionEffect from "@/components/TransitionEffect";
const ConferenceTheme = () => {
  const {
    conferenceTheme: { title, themes },
  } = data;
  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">
        <TransitionEffect />
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3>{title}</h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center justify-center mt-5">
            {themes.map((theme, index) => {
              return (
                <ul
                  key={index}
                  className="border border-secondary p-3 rounded-lg min-h-[100px]"
                >
                  <li className="text-xl font-bold text-secondary">
                    {theme.label}
                  </li>
                  <li>{theme.data}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceTheme;
