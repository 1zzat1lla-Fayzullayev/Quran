import React, { useState } from "react";
import SurahsCard from "./SurahsCard";

function Hero() {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="flex pt-[20vh] justify-center items-center flex-col">
      <h1 className="text-[50px] font-semibold text-white m-[20px] font-Poppins">
        AL Quran
      </h1>
      <div className="relative w-[80%] md:w-[50%]">
        <input
          type="text"
          name="text"
          placeholder="Nima o'qimoqchisiz?"
          value={search}
          onChange={handleSearchChange}
          className="relative rounded-[100px] pr-[55px] md:px-[50px] px-[25px] text-[20px] border-none outline-none w-[100%] py-[15px] md:py-[20px]"
        />
        <i
          className="bx bx-search absolute z-[20] right-4 text-[25px] text-[#a4a8a8] top-[30%] md:top-[35%]"
          onClick={() => {}}
        ></i>
      </div>
      <div>
        <SurahsCard search={search} />
      </div>
    </div>
  );
}

export default Hero;
