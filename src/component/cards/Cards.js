import React, { useState } from "react";
import Button from "../button/Button";
import itemimg from "../../img/itemimg.svg";

const Cards = ({ cardDetails }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  return (
    <>
      <div className="w-full">
        <h1 className="text-nowrap font-medium text-2xl text-[#2C384A]">
          Related deals you might like for
        </h1>
        <div className="pt-2 flex items-center">
          {cardDetails.map((item, index) => (
            <div key={index} onClick={() => handleCardClick(index)}>
              <div
                className={`w-full mt-3 gap-3 p-2 items-center text-[#626E79] flex-col hover:border-2 rounded border-blue-400 ${
                  selectedCard === index && "selected-card"
                }`}
              >
                <img src={itemimg} alt="" className="w-full p-10" />
                <a className="text-blue-400 hover:bg-blue-300 cursor-pointer">
                  <span className="bg-blue-100 text-blue-400 m-1">
                    <a>{item.link1}</a>
                  </span>
                  <span className="bg-blue-100 text-blue-400">
                    <a>{item.link2}</a>
                  </span>
                </a>
                <h1 className="text-center font-semibold">{item.cardName}</h1>
                <p className="text-wrap">{item.cardTitle}</p>
                <span>
                  {item.cardRating}
                  <span className="pl-2 text-gary-200 font-light hover:text-blue-300">
                    $49.96
                  </span>
                  <span className="pl-2 text-red-400 font-light hover:text-red-500">
                    (20% Off)
                  </span>
                </span>
                <div className="mt-2 mb-2 text-center w-full h-full bg-blue-500 hover:bg-blue-700 rounded-xl text-white">
                  <Button
                    type="button"
                    name="View Deal"
                    className="font-bold"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCard !== null && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p>This is the modal content for card {selectedCard}.</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => handleCardClick(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
