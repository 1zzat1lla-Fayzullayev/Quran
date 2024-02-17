import React from "react";

function Button({ handleRegisterGoogle, google }) {
  return (
    <>
      <button
        onClick={handleRegisterGoogle}
        className="bg-[#091d22] rounded-[6px] px-[10px] md:px-[20px] py-[8px] flex justify-center items-center mb-[30px] w-[78%]"
      >
        <img
          src={google}
          alt="google image"
          className="mx-[5px] w-[20px] md:w-[30px]"
        />
        <h1 className="text-[15px] md:text-[20px] text-white">
          Google orqali kirish
        </h1>
      </button>
    </>
  );
}

export default Button;
