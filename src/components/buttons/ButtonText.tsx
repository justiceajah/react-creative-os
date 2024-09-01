export const ButtonText = ({
  text,
  svgEnd,
  svgStart,
  showBg = false,
  svgOnly = {
    isSvgOnly: false,
    svg: <></>,
  },
  
}: {
  text: string;
  svgStart?: React.ReactElement;
  svgEnd?: React.ReactElement;
  showBg?: boolean;
  svgOnly?:{
    isSvgOnly:boolean;
    svg:React.ReactElement;
  }
}) => {

    if(svgOnly.isSvgOnly){
        return (
            <div className={` max-w-[133px] px-2 font-medium flex items-center justify-center text-[13px]  cursor-pointer rounded-md py-[8px] ${showBg ? " bg-gradient-to-b from-[#A259FF] hover:to-[100%] hover:delay-300 from-[6%] to-[#613599] to-[60%] bg-no-repeat !text-white border-[1px] border-[#A259FF]  ": " border-[1px] border-[black] hover:bg-[#fcfcfc] "}`}>
              {svgOnly.svg}
            </div>
          );
    }
  return (
    <div
      className={` max-w[133px] px-2 font-medium flex items-center justify-center text-[13px]  cursor-pointer rounded-md py-[6px] ${showBg ? " bg-gradient-to-b from-[#A259FF] hover:to-[100%] hover:delay-300 from-[6%] to-[#613599] to-[60%] bg-no-repeat !text-white border-[1px] border-[#A259FF]  ": " border-[1px] border-[black] hover:bg-[#fcfcfc] "}`}
    >
      {svgStart && <span className="icon px-[5px]">{svgStart}</span>}
      <span className="px-[0.5px]">{text}</span>
      {svgEnd && <span className="icon px-[5px]">{svgEnd}</span>}
    </div>
  );
};
