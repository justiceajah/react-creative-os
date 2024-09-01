import React from "react";

const MenuItem = ({
  svg,
  text,
  showArrow = false,
}: {
  text?: string;
  svg?: React.ReactElement;
  showArrow: boolean;
}) => {
  return (
    <div className="menu-item py-[14px] px-4 rounded-md hover:bg-[#A259FF]  hover:text-[white] cursor-pointer flex items-center justify-between text-[14px] font-[700]">
      <div className="flex items-center space-x-3 "><span className="icon">
        {svg}
      </span>{" "}
      <span>{text}</span>
      </div>
      {showArrow && (
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 11L1 6L6 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 11L8 6L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        
       
      )}
    </div>
  );
};

export default MenuItem;
