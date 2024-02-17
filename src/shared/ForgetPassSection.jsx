import React, { useRef, useState } from "react";

function ForgetPassSection({ onForgetChange, handleChange, forgetHandler }) {
  const email = useRef(null);
  return (
    <>
      {onForgetChange && (
        <div className="flex flex-col gap-[10px] font-Poppins w-[100%]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            ref={email}
            onChange={handleChange}
            className="border border-[#091d22] rounded-[6px] outline-none pl-[15px] py-[7px] w-full text-white bg-transparent text-[15px] md:text-[20px]"
          />
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
