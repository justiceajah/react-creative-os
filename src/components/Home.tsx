// src/pages/Home.tsx
import React from "react";
import SideBar from "./side-bar/SideBar";
import TopActionContainer from "./action-section/TopActionContainer";
import Funnel from "./action-section/Funnel";

const Home: React.FC = () => {
  return (
    <div className=" w-full text-black flex border-[1px] border-t-[0px]">
      <div className="max-w-[250px] w-[20%] hidden lg:block border-[1px] border-t-[0px] h-fit">
        <SideBar />
      </div>
      <div className="w-[100%]   py-4 px-4">
        <TopActionContainer />
        <div className="page-contents mt-4  py-4 md:px-4 flex flex-wrap   gap-5">
          <Funnel />
          <Funnel />
          <Funnel />
          <Funnel />
        </div>
      </div>
    </div>
  );
};

export default Home;
