import React from "react";

const Footer = ({ footerData }) => {
  return (
    <>
      <footer className="w-full  bg-[#212731] text-[#FFFFff]">
        {footerData.map((item) => {
          return (
            <>
              <div className="flex justify-evenly items-center  lg:flex justify-evenly items-center ">
                {item.map((value) => {
                  return (
                    <>
                      <div className="p-[10px] m-[3px]">
                        <h1 className=" text-xl font-semibold inline-flex">
                          {value.heading}
                          <img src={value.img} alt="" className=" pl-2" />
                        </h1>
                        <ul className="m-3">
                          {value.title.map((list) => {
                            return (
                              <>
                                <li className="pl-0 pr-2 pt-2 pb-2 font-light">
                                  {list}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
          );
        })}
      </footer>
    </>
  );
};

export default Footer;
