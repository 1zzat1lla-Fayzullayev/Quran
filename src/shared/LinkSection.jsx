import React from "react";

function LinkSection({
  handleClickChangeClasses,
  isChange,
  forgetHandlerClass,
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center md:gap-[10px]">
        <p
          className="text-blue-500 hover:text-blue-600 text-[15px] md:text-[16px] hover:underline mb-[20px] cursor-pointer"
          onClick={handleClickChangeClasses}
        >
          {isChange ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
        </p>
        <p
          className="text-blue-500 hover:text-blue-600 text-[15px] md:text-[16px] hover:underline mb-[20px] cursor-pointer"
          onClick={forgetHandlerClass}
        >
          Parolni unutdingizmi?
        </p>
      </div>
    </>
  );
}

export default LinkSection;
