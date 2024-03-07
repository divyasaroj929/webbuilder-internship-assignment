import React from "react";
import Vector from "../../../img/Vector.svg";

const Search = () => {
  return (
    <>
      <div className="search-container relative border-none">
        <input
          type="text"
          placeholder=""
          className="input h-8 w-30 border-1 pl-10 relative rounded"
          style={{
            backgroundImage: `url(${Vector})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "5px center",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </>
  );
};

export default Search;
