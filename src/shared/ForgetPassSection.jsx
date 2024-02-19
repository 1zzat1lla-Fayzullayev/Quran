import React, { useRef, useState } from "react";

function ForgetPassSection({ onForgetChange, handleChange, forgetHandler }) {
  const email = useRef(null);
  return (
    <>
      {onForgetChange && (
        <div className="flex flex-col gap-[10px] font-Poppins w-[100%]">
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={email}
              onChange={handleChange}
              className="relative border border-[#091d22] rounded-[6px] pr-[48px] outline-none pl-[15px] py-[7px] w-full text-white bg-transparent text-[15px] md:text-[20px]"
            />
            <i className="bx bx-envelope absolute right-3 text-[25px] text-[#a4a8a8] top-[25%]"></i>
          </div>
          <button
            className="bg-[#091d22] px-[20px] py-[8px] rounded-[6px] text-white text-[15px] md:text-[20px]"
            onClick={forgetHandler}
          >
            Yuborish
          </button>
        </div>
      )}
    </>
  );
}

export default ForgetPassSection;
