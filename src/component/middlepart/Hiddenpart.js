import React from "react";
import clock from "../../img/clock.svg";
import add from "../../img/add.svg";
import TopRelevant from "../../img/TopRelevant.svg";
import arrow from "../../img/arrow.svg";
import BreadCrumbs from "./BreadCrumbs";
import breadcrumbs from "../../data";

const Hiddenpart = () => {
  const breadcrumbs = [
    { label: "Home", url: "/" },
    { label: "Hosting for all", url: "/hosting-for-all" },
    { label: "Hosting", url: "/hosting-for-all/hosting" },
    { label: "Hosting6", url: "/hosting-for-all/hosting/hosting6" },
    { label: "Hosting5" },
  ];
  return (
    <>
      <div>
        <h1 className="text-[#2C384A] bg-[#FBFCFD] text-[48px] font-[400]">
          Best Website builders in the US
        </h1>
        <p className=" flex justify-between items-center border-y-2 mb-2 p-2 font-[200] text-sm">
          <div className="flex justify-between items-center gap-2">
            <div className="flex justify-between items-center">
              <img src={clock} alt="" className="w-4" />
              <span>last update-February 22, 2020</span>
            </div>
            <div className="flex justify-between items-center">
              <img src={add} alt="" className="w-4" />
              <span>Advertising Disclosure</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span>Top Relevant</span>
            <img src={TopRelevant} alt="" className="w-4" />
          </div>
        </p>
      </div>
      <div className="tabs w-full h-10 text-[#4B5665]">
        <ul className="flex justify-center items-center pl-3 pr-5 ml-10 mr-10">
          <li className=" pl-5 pr-5 text-nowrap hover:border-2 hover:rounded-full hover: border-blue-400 ">
            Tools
          </li>
          <li className=" pl-5 pr-5 text-nowrap text-center font-light hover:border-2 hover:rounded-full hover: border-blue-400 ">
            AWS Builder
          </li>
          <li className=" pl-5 pr-5 text-nowrap text-center font-light hover:border-2 hover:rounded-full hover: border-blue-400  ">
            Start Build
          </li>
          <li className=" pl-5 pr-5 text-nowrap text-center font-light hover:border-2 hover:rounded-full hover: border-blue-400  ">
            Build Supplies
          </li>
          <li className=" pl-5 pr-5 text-nowrap text-center font-light hover:border-2 hover:rounded-full  hover: border-blue-400 ">
            Tooling
          </li>
          <li className=" pl-5 pr-5 text-nowrap text-center font-light hover:border-2 hover:rounded-full hover: border-blue-400  ">
            BlueHosting
          </li>
        </ul>
      </div>
      <BreadCrumbs items={breadcrumbs} />
    </>
  );
};

export default Hiddenpart;
