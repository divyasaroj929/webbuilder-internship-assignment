import React, { useState } from "react";
import itemimg from "../../img/itemimg.svg";
import Button from "../button/Button";
import IMAGE from "../../img/IMAGE.svg";
import Hiddenpart from "./Hiddenpart";
import Cards from "../cards/Cards";
import { cardDetails } from "../../data";
import cup from "../../img/cup.svg";
import diamand from "../../img/diamand.svg";

const MiddleSection = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [message, setMessage] = useState("");

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
    setMessage("Button clicked!");
    alert("button click");
  };

  const ItemDetails = [
    {
      img: itemimg,
      imgTitle: "Builder",
      productDetailsh1: "WixPro 72-Inch Responsive Website Builder-",
      productDetails:
        " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      productHighlight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.8",
      ratingReview: "Exceptional",
      starimg: IMAGE,
    },
    {
      index: "2",
      img: itemimg,

      imgTitle: "Builder",
      productDetailsh1: "SiteCraft 68-Inch Ultimate Web Design Studio-",

      productDetails:
        " Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      productHighlight:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: "9.5",
      ratingReview: "Excellent",
      starimg: IMAGE,
    },
    {
      index: "3",
      img: itemimg,

      imgTitle: "Builder 1",
      productDetailsh1: "WixPro 72-Inch Responsive Website Builder-",

      productDetails:
        " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      productHighlight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: "9.3",
      ratingReview: "Exceptional",
      starimg: IMAGE,
    },
    {
      index: "3",
      img: itemimg,

      imgTitle: "CDK",
      productDetailsh1: "CDK Resposive Builder:",

      productDetails:
        " An extensive library of widgets and apps, and detailed step-by-step guides",
      productHighlight: [
        {
          highreating: "9.5",
          highlightpara: "Buliding Responsive",
        },
        {
          highreating: "8.9",
          highlightpara: "Cool",
        },
        {
          highreating: "8.9",
          highlightpara: "Docs",
        },
      ],
      moreDetails: [
        {
          whyWeLoveIt: "Why we love it",
        },
        {
          documentation: "Documentation",
        },
        {
          easyUse: "Easy Use",
        },
        {
          outOfBox: "Out of box",
        },
      ],
      rating: "9.1",
      ratingReview: "very-good",
      starimg: IMAGE,
    },
  ];

  return (
    <>
      <div className="w-[100%] pl-[150px] pr-[150px]">
        <Hiddenpart />
        {ItemDetails.map((item, index) => (
          <div key={index} className="relative">
            <div
              className=" p-5 w-80% h-[255px] flex gap-2 justify-around items-center relative"
              style={{ cursor: "smaller" }}
            >
              <div>
                {(index === 0 || index === 1) && (
                  <div className="absolute top-0 left-0 bg-[#FF7724] text-[#FFFFFF] flex justify-between items-center w-30 h-5 p-1 ">
                    <img src={index === 0 ? cup : diamand} alt="" />
                    <span className="bg-[#FF7724] text-[#FFFFFF] font-light text-xs w-full h-5 text-nowrap">
                      {index === 0 ? "Best Choice" : "Best Value"}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute top-10 left-0 bg-white  hover:border-2 hover:border-blue-600 rounded-full h-10 w-10 flex items-center justify-center">
                <span>{parseInt(index) + 1}</span>
              </div>
              <div
                className="p-10 flex
               justify-center items-center flex-col"
              >
                <img src={item.img} alt="" />
                <span className=" text-nowrap text-center text-[#626E79] w-full">
                  {item.imgTitle}
                </span>
              </div>
              <div className="font-thin text-wrap text-sm">
                <h1 className="font-semibold text-[#333e4f]">
                  {item.productDetailsh1}
                </h1>
                <p className="font-light text-[#333e4f]">
                  {item.productDetails}
                </p>
                {Array.isArray(item.productHighlight) ? (
                  item.productHighlight.map((highlight, i) => (
                    <>
                      <div className=" w-full bg-[#FFF4ED] pl-3 pr-3 pt-2 pb-1">
                        <p key={i} className="bg-[#FFF4ED] flex">
                          <div className="w-7 flex justify-center items-center bg-white text-blue-600">
                            {highlight.highreating}
                          </div>
                          : {highlight.highlightpara}
                        </p>
                      </div>
                    </>
                  ))
                ) : (
                  <>
                    <h1 className="text-[#2C384A] font-bold pt-3 ">
                      Main highlights
                    </h1>
                    <p className="pl-3 text-[#2C384A] font-light text-[#333e4f]">
                      {item.productHighlight}
                    </p>
                  </>
                )}
                <div>
                  {index === 3 && (
                    <div className=" w-full">
                      {item.moreDetails.map((detail, i) => (
                        <p key={i}>{Object.values(detail)}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className=" h-full flex justify-between items-center flex-col">
                <div className="flex justify- items-center flex-col pt-5 bg-[#F3F9FF]  text-[#074786] mt-2 text-xl">
                  {item.rating}
                  <span className="w-full p-1 text-nowrap text-sm">
                    {item.ratingReview}
                  </span>
                  <img src={IMAGE} alt="" className="p-1" />
                </div>
                <Button
                  type="submit"
                  name="View"
                  className="w-[40px]"
                  onClick={() => handleCardClick(index)}
                />
                {message && <p>{message}</p>}
              </div>
            </div>
          </div>
        ))}

        <Cards cardDetails={cardDetails} />
        <div className=" w-full  p-10 m-5 flex justify-center items-center">
          <p className="  text-[#5C6874]  bg-[#FBFCFD] font-semibold text-3xl hover:border-b-2 hover:border-blue-600 ">
            Sign up and get exclusive special deals
          </p>
          <div className=" w-[300px]   bg-white-600 flex justify-end items-center hover:border-2 hover:border-blue-600">
            <button
              type="button"
              name="Sign Up"
              className=" p-1 bg-[#1B88F4] rounded"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleSection;
