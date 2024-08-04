import React from "react";
import content from "../assets/Content.svg";

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-center h-[72px] items-center shadow-md">
      <img src={content} alt="logo" />
    </div>
  );
};
export default Header;
