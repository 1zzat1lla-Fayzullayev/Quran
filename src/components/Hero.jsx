import React from "react";
import SurahsCard from "./SurahsCard";

function Hero() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-[50px] font-semibold text-white m-[20px] font-Poppins">
        AL Quran
      </h1>
      <input
        type="search"
        name="search"
        placeholder="Nima o'qimoqchisiz?"
        className="rounded-[100px] text-[20px] border-none outline-none min-w-[50%] px-[20px] md:px-[40px] py-[15px] md:py-[20px]"
      />
      <div>
        <SurahsCard />
      </div>
    </div>
  );
}

export default Hero;
