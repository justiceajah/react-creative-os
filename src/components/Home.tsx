// src/pages/Home.tsx
import React from "react";
import SideBar from "./SideBaer/SideBar";

const Home: React.FC = () => {
  return (
    <div className=" border-2 border-[tomato] w-full text-black">
      <div className="w-[250px] hidden lg:block border-2">
        <SideBar />
      </div>

      <div className="w-full border-2"></div>
    </div>
  );
};

export default Home;
