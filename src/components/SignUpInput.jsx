import React, { useRef, useState } from "react";

function SignUpInput({ handleChange }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [lockChange, setLockChange] = useState(false);

  const handleInputChange = (e) => {
    handleChange(e);
  };

  const handleLockChange = () => {
    setLockChange(!lockChange);
    const passwordInput = document.getElementById("password");

    if (lockChange) {
      passwordInput.type = "password";
    } else {
      passwordInput.type = "text";
    }
  };

  return (
    <>
      <div className="relative">
        <input
          type="email"
          name="email"
          placeholder="Email"
          ref={emailRef}
          onChange={handleInputChange}
          className="relative border border-[#091d22] rounded-[6px] outline-none pl-[15px] pr-[48px] py-[7px] w-full text-white bg-transparent text-[15px] md:text-[20px]"
        />
        <i className="bx bx-envelope absolute right-3 text-[25px] text-[#a4a8a8] top-[25%]"></i>
      </div>
      <div className="relative">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Parol"
          ref={passwordRef}
          onChange={handleInputChange}
          className="relative border border-[#091d22] rounded-[6px] outline-none pl-[15px] pr-[48px] py-[7px] w-full text-white bg-transparent text-[15px] md:text-[20px]"
        />
        {lockChange ? (
          <i
            className="bx bx-lock-open-alt absolute right-3 text-[25px] text-[#a4a8a8] top-[25%] cursor-pointer"
            onClick={handleLockChange}
          ></i>
        ) : (
          <i
            className="bx bx-lock-alt absolute right-3 text-[25px] text-[#a4a8a8] top-[25%] cursor-pointer"
            onClick={handleLockChange}
          ></i>
        )}
      </div>
    </>
  );
}

export default SignUpInput;
