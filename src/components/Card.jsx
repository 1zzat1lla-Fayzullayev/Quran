import React from "react";

function Card({ surah }) {
  return (
    <>
      <div className="card bg-[#1f2125] w-[300px] md:w-[350px] h-[80px] border border-[#464b50] cursor-pointer rounded-[6px] hover:border-[#2ca4ab] flex font-Poppins z-[10]">
        <div className="card__element bg-[#343a40] flex justify-center items-center rounded-[3px] transform rotate-[45deg] m-auto ml-[20px]">
          <p className="transform rotate-[315deg] text-white font-semibold">
            {surah.number}
          </p>
        </div>
        <div className="ml-[20px] flex items-center justify-between w-full">
          <div>
            <p className="text-white">{surah.englishName}</p>
            <p className="text-[#6c7277] text-[12px] onBlue-p font-semibold">
              {surah.englishNameTranslation}
            </p>
          </div>
          <div className="mr-[15px]">
            <p className="text-white">{surah.name}</p>
            <p className="text-[#6c7277] text-[12px] onBlue-p font-semibold">
              {surah.ayahs.length} Oyat
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
