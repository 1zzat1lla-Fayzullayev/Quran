import React, { useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Wrapper from "../layout/Wrapper";
import NavbarMobile from "../shared/navbarMobile/NavbarMobile";
import ShowProfile from "../shared/navbarLaptop/ShowProfile";
import LogOutButton from "../shared/navbarLaptop/LogOutButton";
import Hamburger from "../shared/navbarLaptop/Hamburger";
import List from "../shared/navbarLaptop/List";

function Navbar() {
  const [showProfile, setShowProfile] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const [isLoginOnEmail, setIsLoginOnEmail] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState({
    backgroundColor: "#272f33",
    backdropFilter: "blur(0px)",
  });
  const dropdownRef = useRef(null);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowProfile(false);
    }
  };
  const handleShowMobileNav = () => {
    setShowMobileNav(!showMobileNav);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
      setNavbarBackground({
        backgroundColor: "#3c4347",
        backdropFilter: "blur(100px)",
      });
    } else {
      setNavbarBackground({
        backgroundColor: "#272f33",
        backdropFilter: "blur(0px)",
      });
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        if (user) {
          const { displayName, photoURL } = user;
          localStorage.setItem("displayName", displayName);
          setUserPhoto(photoURL);
          if (photoURL) {
            setIsLoginOnEmail(isLoginOnEmail);
          } else {
            setIsLoginOnEmail(!isLoginOnEmail);
          }
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      }
    });
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      unsubscribe();
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className="flex fixed w-[100%] z-[777] justify-evenly md:justify-around items-center bg-[#272f33] rounded-bl-[15px] rounded-br-[15px] p-[8px] font-Poppins"
        style={navbarBackground}
      >
        <h1 className="text-white text-[25px] md:text-[35px] font-semibold cursor-pointer font-Poppins">
          Quran
        </h1>
        {/* List */}
        <List />
        {!isLoginOnEmail ? (
          <div className="flex relative" ref={dropdownRef}>
            <div>
              {userPhoto && (
                <img
                  src={userPhoto}
                  alt="User Photo"
                  className="border-2 md:border-4 border-gray-400 rounded-full w-[33px] h-[33px] md:w-12 md:h-12 cursor-pointer"
                  onClick={handleShowProfile}
                />
              )}
            </div>
            {showProfile && <ShowProfile handleLogOut={handleLogOut} />}
          </div>
        ) : (
          // LogOut
          <LogOutButton handleLogOut={handleLogOut} />
        )}
        {/* Hamburger */}
        <Hamburger handleShowMobileNav={handleShowMobileNav} />
      </nav>
      {/* NavMobile */}
      {showMobileNav && (
        <NavbarMobile handleShowMobileNav={handleShowMobileNav} />
      )}
    </div>
  );
}

export default Navbar;
