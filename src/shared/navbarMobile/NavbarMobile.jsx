import React from "react";

function NavbarMobile({ handleShowMobileNav }) {
  return (
    <>
      <div
        className={`mobile__nav w-full h-full bg-[#091d22] absolute top-0 left-0 right-0 bottom-0`}
      >
        <i
          className={`bx bx-x absolute right-0 text-red-600 text-[40px] m-[15px] cursor-pointer`}
          onClick={handleShowMobileNav}
        ></i>
        <ul className="flex flex-col justify-center items-center gap-[40px] text-white text-[20px] font-Montserrat cursor-pointer h-[100vh]">
          <li>Bosh sahifa</li>
          <li>Suralar</li>
          <li>Aloqa</li>
        </ul>
      </div>
    </>
  );
}

export default NavbarMobile;
