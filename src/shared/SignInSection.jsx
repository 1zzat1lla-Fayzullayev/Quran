import React from "react";
import Inputs from "../components/SignInInput";

function SignInSection({ handleChange, handleSignToRegister }) {
  const onSignToRegister = (e) => {
    handleSignToRegister(e);
  };
  return (
    <>
      <div className="flex flex-col gap-[10px] font-Poppins w-[100%]">
        <Inputs handleChange={handleChange} />
        <button
          className="bg-[#091d22] px-[20px] py-[8px] rounded-[6px] text-white text-[15px] md:text-[20px]"
          onClick={onSignToRegister}
        >
          Kirish
        </button>
      </div>
    </>
  );
}

export default SignInSection;
