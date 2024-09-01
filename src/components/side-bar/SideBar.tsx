import ButtonLock from "./ButtonLock";
import FeaturedContent from "./FeaturedContent";
import MenuItem from "./MenuItem";
import Saved from "./Saved";

const SideBar = () => {
  return (
    <div className="px-4 pt-4 sectionColor h-fit">
      <div className="border-b-[1px] pb-4 ">
        <MenuItem
          svg={
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.18 17.36C13.6977 17.36 17.36 13.6977 17.36 9.18C17.36 4.66231 13.6977 1 9.18 1C4.66231 1 1 4.66231 1 9.18C1 13.6977 4.66231 17.36 9.18 17.36Z"
                stroke="url(#paint0_linear_253_97)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6483 5.71167L10.9141 10.9141L5.71167 12.6483L7.44583 7.44583L12.6483 5.71167Z"
                stroke="url(#paint1_linear_253_97)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_253_97"
                  x1="9.18"
                  y1="1"
                  x2="9.18"
                  y2="17.36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_253_97"
                  x1="9.17999"
                  y1="5.71167"
                  x2="9.17999"
                  y2="12.6483"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
              </defs>
            </svg>
          }
          text="Inspiration"
          showArrow={true}
        />
        <MenuItem
          svg={
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5422 1H2.81778C1.81385 1 1 1.81385 1 2.81778V15.5422C1 16.5462 1.81385 17.36 2.81778 17.36H15.5422C16.5462 17.36 17.36 16.5462 17.36 15.5422V2.81778C17.36 1.81385 16.5462 1 15.5422 1Z"
                stroke="url(#paint0_linear_253_105)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.36216 4.63556H4.6355V12.8156H7.36216V4.63556Z"
                stroke="url(#paint1_linear_253_105)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.7245 4.63556H10.9978V9.18H13.7245V4.63556Z"
                stroke="url(#paint2_linear_253_105)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_253_105"
                  x1="9.18"
                  y1="1"
                  x2="9.18"
                  y2="17.36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_253_105"
                  x1="5.99883"
                  y1="4.63556"
                  x2="5.99883"
                  y2="12.8156"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_253_105"
                  x1="12.3611"
                  y1="4.63556"
                  x2="12.3611"
                  y2="9.18"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
              </defs>
            </svg>
          }
          text="Templates"
          showArrow={false}
        />
        <MenuItem
          text="Collections"
          svg={
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8728 5.54443V17.36H2.4873V5.54443"
                stroke="url(#paint0_linear_253_113)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.36 1H1V5.54444H17.36V1Z"
                stroke="url(#paint1_linear_253_113)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.69263 9.17999H10.6672"
                stroke="url(#paint2_linear_253_113)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_253_113"
                  x1="9.18003"
                  y1="5.54443"
                  x2="9.18003"
                  y2="17.36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_253_113"
                  x1="9.18"
                  y1="1"
                  x2="9.18"
                  y2="5.54444"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_253_113"
                  x1="9.1799"
                  y1="9.17999"
                  x2="9.1799"
                  y2="10.18"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
              </defs>
            </svg>
          }
          showArrow={false}
        />
        <MenuItem
          text={"Brands"}
          svg={
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.72667 1L1 4.272V15.724C1 16.1579 1.19152 16.574 1.53241 16.8808C1.87331 17.1876 2.33567 17.36 2.81778 17.36H15.5422C16.0243 17.36 16.4867 17.1876 16.8276 16.8808C17.1685 16.574 17.36 16.1579 17.36 15.724V4.272L14.6333 1H3.72667Z"
                stroke="url(#paint0_linear_253_119)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 4.272H17.36"
                stroke="url(#paint1_linear_253_119)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.8157 7.54401C12.8157 8.41179 12.4326 9.24404 11.7508 9.85766C11.069 10.4713 10.1443 10.816 9.18011 10.816C8.2159 10.816 7.29118 10.4713 6.60939 9.85766C5.92759 9.24404 5.54456 8.41179 5.54456 7.54401"
                stroke="url(#paint2_linear_253_119)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_253_119"
                  x1="9.18"
                  y1="1"
                  x2="9.18"
                  y2="17.36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_253_119"
                  x1="9.18"
                  y1="4.272"
                  x2="9.18"
                  y2="5.272"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_253_119"
                  x1="9.18011"
                  y1="7.54401"
                  x2="9.18011"
                  y2="10.816"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A259FF" />
                  <stop offset="1" stop-color="#613599" />
                </linearGradient>
              </defs>
            </svg>
          }
          showArrow={false}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-[12px] font-semibold text-[#7F7F7F]">FEATURED</h3>

        <div className="border-b-[1px] pb-4">
          <FeaturedContent text="Hidden gems" svg={ButtonLock()} />
          <FeaturedContent text="Evergreen ads" svg={ButtonLock()} />
          <FeaturedContent text="Testing lab" svg={ButtonLock()} />
        </div>
      </div>
      <div className="mt-4  pb-4 border-b-[1px]">
        <h3 className="text-[12px] font-semibold text-[#7F7F7F] flex items-center justify-between">
          <span className="ml-8">SAVED </span>
          <span className="cursor-pointer">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99994 1V13"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 7H13"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </h3>

        <div className="relative px-2">
        <div className="absolute -left-1 w-[0.8px] h-[80%] bg-[#A259FF]"></div>
          <Saved text="All saved" />
          <Saved
            text="Board name"
            svg={
              <svg
                width="15"
                height="4"
                viewBox="0 0 15 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97585 2.75C8.39173 2.75 8.72886 2.41421 8.72886 2C8.72886 1.58579 8.39173 1.25 7.97585 1.25C7.55997 1.25 7.22284 1.58579 7.22284 2C7.22284 2.41421 7.55997 2.75 7.97585 2.75Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.247 2.75C13.6628 2.75 14 2.41421 14 2C14 1.58579 13.6628 1.25 13.247 1.25C12.8311 1.25 12.494 1.58579 12.494 2C12.494 2.41421 12.8311 2.75 13.247 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.70479 2.75C3.12067 2.75 3.45781 2.41421 3.45781 2C3.45781 1.58579 3.12067 1.25 2.70479 1.25C2.28892 1.25 1.95178 1.58579 1.95178 2C1.95178 2.41421 2.28892 2.75 2.70479 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Saved
            text="Board name"
            svg={
              <svg
                width="15"
                height="4"
                viewBox="0 0 15 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97585 2.75C8.39173 2.75 8.72886 2.41421 8.72886 2C8.72886 1.58579 8.39173 1.25 7.97585 1.25C7.55997 1.25 7.22284 1.58579 7.22284 2C7.22284 2.41421 7.55997 2.75 7.97585 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.247 2.75C13.6628 2.75 14 2.41421 14 2C14 1.58579 13.6628 1.25 13.247 1.25C12.8311 1.25 12.494 1.58579 12.494 2C12.494 2.41421 12.8311 2.75 13.247 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.70479 2.75C3.12067 2.75 3.45781 2.41421 3.45781 2C3.45781 1.58579 3.12067 1.25 2.70479 1.25C2.28892 1.25 1.95178 1.58579 1.95178 2C1.95178 2.41421 2.28892 2.75 2.70479 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Saved
            text="Board name"
            svg={
              <svg
                width="15"
                height="4"
                viewBox="0 0 15 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97585 2.75C8.39173 2.75 8.72886 2.41421 8.72886 2C8.72886 1.58579 8.39173 1.25 7.97585 1.25C7.55997 1.25 7.22284 1.58579 7.22284 2C7.22284 2.41421 7.55997 2.75 7.97585 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.247 2.75C13.6628 2.75 14 2.41421 14 2C14 1.58579 13.6628 1.25 13.247 1.25C12.8311 1.25 12.494 1.58579 12.494 2C12.494 2.41421 12.8311 2.75 13.247 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.70479 2.75C3.12067 2.75 3.45781 2.41421 3.45781 2C3.45781 1.58579 3.12067 1.25 2.70479 1.25C2.28892 1.25 1.95178 1.58579 1.95178 2C1.95178 2.41421 2.28892 2.75 2.70479 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Saved
            text="Board name"
            svg={
              <svg
                width="15"
                height="4"
                viewBox="0 0 15 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97585 2.75C8.39173 2.75 8.72886 2.41421 8.72886 2C8.72886 1.58579 8.39173 1.25 7.97585 1.25C7.55997 1.25 7.22284 1.58579 7.22284 2C7.22284 2.41421 7.55997 2.75 7.97585 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.247 2.75C13.6628 2.75 14 2.41421 14 2C14 1.58579 13.6628 1.25 13.247 1.25C12.8311 1.25 12.494 1.58579 12.494 2C12.494 2.41421 12.8311 2.75 13.247 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.70479 2.75C3.12067 2.75 3.45781 2.41421 3.45781 2C3.45781 1.58579 3.12067 1.25 2.70479 1.25C2.28892 1.25 1.95178 1.58579 1.95178 2C1.95178 2.41421 2.28892 2.75 2.70479 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Saved
            text="Board name"
            svg={
              <svg
                width="15"
                height="4"
                viewBox="0 0 15 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97585 2.75C8.39173 2.75 8.72886 2.41421 8.72886 2C8.72886 1.58579 8.39173 1.25 7.97585 1.25C7.55997 1.25 7.22284 1.58579 7.22284 2C7.22284 2.41421 7.55997 2.75 7.97585 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.247 2.75C13.6628 2.75 14 2.41421 14 2C14 1.58579 13.6628 1.25 13.247 1.25C12.8311 1.25 12.494 1.58579 12.494 2C12.494 2.41421 12.8311 2.75 13.247 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.70479 2.75C3.12067 2.75 3.45781 2.41421 3.45781 2C3.45781 1.58579 3.12067 1.25 2.70479 1.25C2.28892 1.25 1.95178 1.58579 1.95178 2C1.95178 2.41421 2.28892 2.75 2.70479 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <Saved
            text="Board name"
            svg={
              <svg
                width="15"
                height="4"
                viewBox="0 0 15 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.97585 2.75C8.39173 2.75 8.72886 2.41421 8.72886 2C8.72886 1.58579 8.39173 1.25 7.97585 1.25C7.55997 1.25 7.22284 1.58579 7.22284 2C7.22284 2.41421 7.55997 2.75 7.97585 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.247 2.75C13.6628 2.75 14 2.41421 14 2C14 1.58579 13.6628 1.25 13.247 1.25C12.8311 1.25 12.494 1.58579 12.494 2C12.494 2.41421 12.8311 2.75 13.247 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.70479 2.75C3.12067 2.75 3.45781 2.41421 3.45781 2C3.45781 1.58579 3.12067 1.25 2.70479 1.25C2.28892 1.25 1.95178 1.58579 1.95178 2C1.95178 2.41421 2.28892 2.75 2.70479 2.75Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
        </div>
        <button className="menu-item text-[14px] font-[600] w-full rounded-md hover:bg-[#A259FF] py-[14px] px-4 hover:text-[white] cursor-pointer  ">View all  boards</button>
      </div>
       
      <div className="bottom-section mt-5 text-[14px] font-[700] space-y-1 border-b-[1px] pb-4">
        <div className="menu-item cursor-pointer hover:bg-[#A259FF]  py-[5px] px-4 hover:text-[white] rounded-md">Settings</div>
        <div className="menu-item cursor-pointer hover:bg-[#A259FF] py-[5px]  px-4 hover:text-[white] rounded-md">Help & Feedback</div>
        <div className="menu-item cursor-pointer hover:bg-[#A259FF]  py-[5px] px-4 hover:text-[white] rounded-md">Join the CreativeOS Slack</div>
      </div>
    
     
      <div className="account-section py-[10px] px-[10px]  flex items-center cursor-pointer text-black text-[14px] font-[600]" >
        <span className="account-icon w-[40px] h-[40px] rounded-[50%] bg-[#A259FF] mr-[10px]"></span> My Account
      </div> 
    </div>
  );
};
export default SideBar;
