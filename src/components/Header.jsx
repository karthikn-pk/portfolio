import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between h-[80px] border-b-4 p-6 text-3xl">
      <h1 className="text-xl mb-4 sm:mb-0">Karthikeyan's portfolio</h1>
      <div className="flex justify-between">
        <button className="mr-4">Projects</button>
        <button className="mr-4">Skills</button>
        <button>Contact</button>
      </div>
    </div>
  );
};

export default Header;
