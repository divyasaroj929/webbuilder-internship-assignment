import React from "react";
import arrow from "../../img/arrow.svg";

const BreadCrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex justify-start items-center pb-4 pl-5">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === items.length - 1 ? "active" : ""
            }`}
          >
            {index !== items.length - 1 ? (
              <React.Fragment>
                <a
                  href={item.url}
                  className="text-[#5C6874] hover:border-b-2 hover:border-blue-600 p-1 text-xs"
                >
                  {item.label}
                </a>
                <img
                  src={arrow}
                  alt=""
                  className="h-3 w-2 ml-1 mr-1 inline text-[#5C6874] group-hover:text-blue-600"
                />
              </React.Fragment>
            ) : (
              <span className="text-[#5C6874] border-b border-blue-600">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
