import React from "react";

function ShowProfile({handleLogOut}) {
  return (
    <>
      <div
        className={`dropdown-menu bg-[#DDE6ED] p-4 w-[130px] md:w-[250px] rounded-[6px] shadow-lg absolute -left-[180%] md:-left-[250%] top-[110%] flex justify-center items-center`}
      >
        <ul className="flex justify-center items-center flex-col ">
          <li className="p-2 text-[15px] md:text-lg cursor-pointer rounded hover:bg-blue-200 hover:rounded-[6px] w-full">
            <p className="flex justify-center items-center">
              <i className="bx bx-user text-[15px] md:text-[22px] px-[5px]"></i>
              {localStorage.getItem("displayName")}
            </p>
          </li>
          <li className="p-2 text-[15px] md:text-lg cursor-pointer rounded hover:bg-red-200 hover:rounded-[6px] w-full">
            <button
              onClick={handleLogOut}
              className="flex justify-center items-center"
            >
              <i className="bx bx-exit text-[15px] md:text-[22px] px-[5px]"></i>
              Chiqish
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ShowProfile;
