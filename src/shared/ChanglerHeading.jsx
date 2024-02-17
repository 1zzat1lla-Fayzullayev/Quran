import React from "react";

function ChanglerHeading({ isChange, onForgetChange }) {
  return (
    <>
      <h1
        className={`text-white text-[25px] md:text-[30px] my-[15px] md:my-[25px]`}
      >
        {isChange
          ? "Ro'yxatdan o'tish"
          : onForgetChange
            ? "Parolni tiklash"
            : "Tizimga kirish"}
      </h1>
    </>
  );
}

export default ChanglerHeading;
