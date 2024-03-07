import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./search/Search";
import { navData } from "../../data";
const Navbar = ({ navData }) => {
  return (
    <div className="container-navbar h-17 w-full flex justify-center items-center bg-[#212731]">
      <Search />

      <ul className="none flex flex-row justify-center items-center  ">
        {navData.map((item, index) => {
          console.log(item);
          return (
            <li key={index} className="flex justify-center items-center p-3">
              <NavLink to={item.path} className="link text-[#D1D6DA] pl-5 pr-5">
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
