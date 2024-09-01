import React from 'react'

const FeaturedContent =({
    svg,
    text,
  }: {
    text?: string;
    svg?: React.ReactElement;
  }) => {
    return (
      <div className="menu-item py-[8px] px-4 rounded-md hover:bg-[#A259FF] hover:text-[white] cursor-pointer flex items-center justify-between text-[14px] font-[600]">
        <div className="flex items-center space-x-3 ">
            
        <span>{text}</span>
        <span className="icon">
          {svg}
        </span>{" "}
        
        </div>
       
      </div>
    );
  };

export default FeaturedContent