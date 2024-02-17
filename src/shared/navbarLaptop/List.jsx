import React from "react";

function List() {
  return (
    <>
      <ul className="hidden md:flex justify-center items-center gap-[40px] text-white text-[20px] font-Poppins cursor-pointer">
        <li className="font-Montserrat">
          <a href="#">Bosh sahifa</a>
        </li>
        <li className="font-Montserrat">
          <a href="#">Suralar</a>
        </li>
        <li className="font-Montserrat">
          <a href="#">Aloqa</a>
        </li>
      </ul>
    </>
  );
}

export default List;
