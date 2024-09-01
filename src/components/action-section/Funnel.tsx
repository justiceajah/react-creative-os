import { ButtonText } from "../buttons/ButtonText";

const Funnel = () => {
  return (
    <div className=" sectionColor w-full  lg:min-w[250px]  rounded-md">
        <div className="page-item ">
          <div className="header-section w-full border-b-[1px] border-[#dbdbdb] px-4 py-4 flex items-center justify-between">
            {" "}
            <div className="image  w-fit flex items-center justify-center space-x-2">
              <div className="w-[30px] h-[30px]">
                <img src="/assets/person.png" alt="person png" />
              </div>{" "}
              <h4 className="text-[16px] font-[500]">Caraway</h4>
            </div>
            <div className="w-fit">
              <ButtonText text="Save Funnel" />
            </div>
          </div>
          <div className="images-section w-full border-b-[1px] border-[#dbdbdb] px-4 py-4 space-y-4 md:space-y-0 md:flex items-center justify-between">
            {" "}
            <div className="">
              <div className="text-[14px] font-[600] text-[#7F7F7F] pb-2">
                Ad Creative
              </div>
              <img
                className=" w-full md:w-[350px] h-[430px]"
                src="/assets/creative-vertical.png"
                alt="creative png"
              />
            </div>
            <div className="hidden md:block line w-[82px] px-2 ">
              <div className="w-full h-[0.8px] bg-[#A259FF]"></div>
            </div>
            <div>
              <div className="text-[14px] font-[600] text-[#7F7F7F] pb-2">
                Landing Page
              </div>

              <img
                className="w-full md:w-[350px] md:w-[400px] h-[430px] "
                src="/assets/creative-vertical2.png"
                alt="page png"
              />
            </div>
          </div>
          <div className="footer-section w-full  border-[#dbdbdb] px-4 py-4 flex items-center justify-between">
            {" "}
            <div className="w-fit flex space-x-4 ml-auto">
              <ButtonText text="Request Template" />
              <ButtonText text="View Funnel" />
              <ButtonText
                text="View Funnel"
                svgOnly={{
                  isSvgOnly: true,
                  svg: (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.37143 6.05615V12.2724C1.37143 12.6846 1.53285 13.0799 1.82018 13.3713C2.10752 13.6628 2.49722 13.8265 2.90357 13.8265H12.0964C12.5028 13.8265 12.8925 13.6628 13.1798 13.3713C13.4671 13.0799 13.6286 12.6846 13.6286 12.2724V6.05615"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.3286 3.62921L7.5 0.715332L4.67143 3.62921"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 1.2019V10.9148"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ),
                }}
              />
            </div>
          </div>
          </div>
        </div>
    
  );
};

export default Funnel;
