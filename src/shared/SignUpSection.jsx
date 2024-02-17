import React from "react";
import SignUpInput from "../components/SignUpInput";

function SignUpSection({
  handleChange,
  handleSignToEmailandPassword,
  onForgetChange,
}) {
  return (
    <>
      <div
        className={`flex flex-col gap-[10px] font-Poppins w-[100%] ${onForgetChange ? "hidden" : "block"}`}
      >
        <SignUpInput handleChange={handleChange} />
        <button
          className="bg-[#091d22] px-[20px] py-[8px] rounded-[6px] text-white text-[15px] md:text-[20px]"
          onClick={handleSignToEmailandPassword}
        >
          Kirish
        </button>
      </div>
    </>
  );
}

export default SignUpSection;
