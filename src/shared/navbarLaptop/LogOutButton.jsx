import React from "react";

function LogOutButton({ handleLogOut }) {
  return (
    <>
      <button
        onClick={handleLogOut}
        className="bg-[#27374D] text-white py-[4px] px-[10px] md:py-[8px] md:px-[20px] rounded-[6px] font-Poppins text-[18px] hover:scale-[0.9] transition-all"
      >
        Chiqish
      </button>
    </>
  );
}

export default LogOutButton;
