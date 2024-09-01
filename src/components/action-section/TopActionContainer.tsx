import { ButtonText } from "../buttons/ButtonText";
import ButtonLock from "../side-bar/ButtonLock";

const TopActionContainer = () => {
  return (
    <div className="py-4 px-4 md:grid grid-cols-1 lg:flex items-center justify-between border-b-[1px] pb-4">
      <div className="flex items-center md:space-x-5">
        <div className="hidden lg:block">
          <ButtonText text="Back" />
        </div>
        <div className="font-bold text-[20px] md:text-[34px] lg:text-[20px] bg-gradient-to-b from-[#A259FF] from-[12%] to-[#613599] to-[60%] bg-no-repeat bg-clip-text text-transparent">
          Brand name
        </div>
      </div>
      <div className="brand-name w-fit mx-auto items-start mt-4 md:mt-0 lg:flex lg:items-center  md:items-center md:space-x-5 lg:w-fit">
        <p className="mt-2 hidden lg:inline-block lg:mt-0">Show: </p>
        <div className="mt-2 sm:grid-cols-4 md:mt-0 w-fit grid grid-cols-2 gap-4 md:grid-cols-2 lg:flex  md:w-full">
          <ButtonText
            text="Templates"
            svgStart={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_253_215)">
                  <path
                    d="M9.72889 1H2.09111C1.48851 1 1 1.48851 1 2.09111V9.72889C1 10.3315 1.48851 10.82 2.09111 10.82H9.72889C10.3315 10.82 10.82 10.3315 10.82 9.72889V2.09111C10.82 1.48851 10.3315 1 9.72889 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.00061 4.81892C4.45257 4.81892 4.81895 4.45254 4.81895 4.00058C4.81895 3.54863 4.45257 3.18225 4.00061 3.18225C3.54866 3.18225 3.18228 3.54863 3.18228 4.00058C3.18228 4.45254 3.54866 4.81892 4.00061 4.81892Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8199 7.54669L8.09216 4.81891L2.09105 10.82"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_215">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />
          <ButtonText
            text="Email"
            svgStart={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_253_215)">
                  <path
                    d="M9.72889 1H2.09111C1.48851 1 1 1.48851 1 2.09111V9.72889C1 10.3315 1.48851 10.82 2.09111 10.82H9.72889C10.3315 10.82 10.82 10.3315 10.82 9.72889V2.09111C10.82 1.48851 10.3315 1 9.72889 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.00061 4.81892C4.45257 4.81892 4.81895 4.45254 4.81895 4.00058C4.81895 3.54863 4.45257 3.18225 4.00061 3.18225C3.54866 3.18225 3.18228 3.54863 3.18228 4.00058C3.18228 4.45254 3.54866 4.81892 4.00061 4.81892Z"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.8199 7.54669L8.09216 4.81891L2.09105 10.82"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_253_215">
                    <rect width="12" height="12" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
            svgEnd={ButtonLock()}
          />
          <ButtonText
            text="Landers"
            svgStart={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.49901 4.9967C1.51269 3.06503 3.08972 1.51018 5.02141 1.52389C6.7293 1.536 8.1787 2.77978 8.44993 4.46605L9.99342 5.02668C9.99342 5.01668 9.99342 5.0067 9.99342 4.9967C9.99342 2.23711 7.75631 0 4.9967 0C2.23709 0 0 2.23711 0 4.9967C0 7.75629 2.23711 9.9934 4.9967 9.9934C5.00719 9.9934 5.01668 9.9934 5.02717 9.9934L4.46654 8.44991C2.76102 8.1884 1.50103 6.72218 1.49901 4.9967Z"
                  fill="black"
                />
                <path
                  d="M6.7789 4.03475C6.86435 4.03475 6.94878 4.04925 7.03374 4.05723C6.5174 2.92998 5.18498 2.43472 4.05772 2.95106C2.93046 3.4674 2.4352 4.79981 2.95154 5.92706C3.17455 6.41389 3.5642 6.80499 4.05021 7.02977C3.91387 5.51814 5.02878 4.18217 6.54044 4.04585C6.61973 4.03868 6.69929 4.03498 6.7789 4.03475Z"
                  fill="black"
                />
                <path
                  d="M11.7712 10.7113L10.4495 9.3897L11.282 8.55726C11.7974 8.04202 11.7976 7.20646 11.2823 6.69101C11.1459 6.55451 10.9812 6.4496 10.7998 6.38369L7.38304 5.1415C6.47532 4.81148 5.47192 5.27978 5.14188 6.18753C5.00149 6.57366 5.00153 6.99692 5.14202 7.38304L6.38421 10.7998C6.53734 11.2243 6.89771 11.5406 7.33859 11.6372C7.43342 11.6583 7.53025 11.669 7.62741 11.6692C7.97654 11.6689 8.31117 11.5296 8.55729 11.282L9.38973 10.4495L10.7114 11.7712C10.9989 12.0689 11.4734 12.0771 11.7712 11.7896C12.0689 11.502 12.0772 11.0275 11.7896 10.7298C11.7835 10.7235 11.7774 10.7174 11.7712 10.7113ZM7.69484 10.0233L6.5506 6.87087C6.51446 6.77987 6.53765 6.67602 6.60906 6.60903C6.67544 6.53656 6.78 6.51324 6.8709 6.55057L10.0233 7.69481L7.69484 10.0233Z"
                  fill="black"
                />
              </svg>
            }
            svgEnd={ButtonLock()}
          />
          <ButtonText
            showBg={true}
            text="Funnels"
            svgStart={
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.49901 4.9967C1.51269 3.06503 3.08972 1.51018 5.02141 1.52389C6.7293 1.536 8.1787 2.77978 8.44993 4.46605L9.99342 5.02668C9.99342 5.01668 9.99342 5.0067 9.99342 4.9967C9.99342 2.23711 7.75631 0 4.9967 0C2.23709 0 0 2.23711 0 4.9967C0 7.75629 2.23711 9.9934 4.9967 9.9934C5.00719 9.9934 5.01668 9.9934 5.02717 9.9934L4.46654 8.44991C2.76102 8.1884 1.50103 6.72218 1.49901 4.9967Z"
                  fill="white"
                />
                <path
                  d="M6.7789 4.03475C6.86435 4.03475 6.94878 4.04925 7.03374 4.05723C6.5174 2.92998 5.18498 2.43472 4.05772 2.95106C2.93046 3.4674 2.4352 4.79981 2.95154 5.92706C3.17455 6.41389 3.5642 6.80499 4.05021 7.02977C3.91387 5.51814 5.02878 4.18217 6.54044 4.04585C6.61973 4.03868 6.69929 4.03498 6.7789 4.03475Z"
                  fill="white"
                />
                <path
                  d="M11.7712 10.7113L10.4495 9.3897L11.282 8.55726C11.7974 8.04202 11.7976 7.20646 11.2823 6.69101C11.1459 6.55451 10.9812 6.4496 10.7998 6.38369L7.38304 5.1415C6.47532 4.81148 5.47192 5.27978 5.14188 6.18753C5.00149 6.57366 5.00153 6.99692 5.14202 7.38304L6.38421 10.7998C6.53734 11.2243 6.89771 11.5406 7.33859 11.6372C7.43342 11.6583 7.53025 11.669 7.62741 11.6692C7.97654 11.6689 8.31117 11.5296 8.55729 11.282L9.38973 10.4495L10.7114 11.7712C10.9989 12.0689 11.4734 12.0771 11.7712 11.7896C12.0689 11.502 12.0772 11.0275 11.7896 10.7298C11.7835 10.7235 11.7774 10.7174 11.7712 10.7113ZM7.69484 10.0233L6.5506 6.87087C6.51446 6.77987 6.53765 6.67602 6.60906 6.60903C6.67544 6.53656 6.78 6.51324 6.8709 6.55057L10.0233 7.69481L7.69484 10.0233Z"
                  fill="white"
                />
              </svg>
            }
            svgEnd={ButtonLock()}
          />
        </div>
      </div>
      <div className="flex items-center w-full sm:mx-auto sm:mr-10 md:mt-4 lg:mr-0 md:w-fit md:ml-auto justify-center space-x-4 mt-4">
        <ButtonText text="Save" />
        <ButtonText text="Share" />
      </div>
    </div>
  );
};

export default TopActionContainer;
