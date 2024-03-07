import React from "react";
import Navbar from "./navber/Navbar";
import { navData, footerData } from "../data";
import Footer from "./footer/Footer";
import MiddleSection from "./middlepart/MiddleSection";

const Home = () => {
  return (
    <>
      <div className="h-screen w-full ">
        <Navbar navData={navData} />
        <div className=" relative middle-section w-[100%] h-full pl-2 pr-2">
          <MiddleSection />
          <Footer footerData={footerData} />
        </div>
      </div>
    </>
  );
};

export default Home;
