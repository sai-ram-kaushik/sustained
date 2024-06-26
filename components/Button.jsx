import React from "react";

const Button = ({ title, className }) => {
  return (
    <button
      className={`px-3 py-2 rounded-full bg-[#be202a] border border-[#be202a] hover:text-primary text-background hover:bg-background duration-500 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
