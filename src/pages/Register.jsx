import React, { useEffect, useState } from "react";
import { auth, provider } from "../firebase/server";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import google from "../assets/google.png";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";
import SignInSection from "../shared/SignInSection";
import ForgetPassSection from "../shared/ForgetPassSection";
import SignUpSection from "../shared/SignUpSection";
import ChanglerHeading from "../shared/ChanglerHeading";
import LinkSection from "../shared/LinkSection";
import Button from "../shared/Button";
import Hero from "../components/Hero";

function Register() {
  const [user, setUser] = useState("");
  const [isChange, setIsChange] = useState(false);
  const [onForgetChange, setOnForgetChange] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignToRegister = async (e) => {
    e.preventDefault();
    try {
      if (!formData.email || !formData.password) {
        toast.error("Tizimga kirish uchun ma'lumotlarni to'ldiring");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const newUser = userCredential.user;

      // Clear the input values
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });

      // navigate to other page
      setIsChange(!isChange);
    } catch (error) {
      console.error(error);
      toast.error("Bunday email mavjud yoki xatolik yuz berdi");
    }
  };

  const forgetHandler = () => {
    sendPasswordResetEmail(auth, formData.email)
      .then(() => {
        toast.success("Emailingizga xabar yuborildi!");
        setOnForgetChange(!onForgetChange);
        formData.email = "";
      })
      .catch(() => {
        toast.error("Qaytadan urinib ko'ring!");
      });
  };

  const forgetHandlerClass = () => {
    setOnForgetChange(!onForgetChange);
  };

  const handleSignToEmailandPassword = async (e) => {
    e.preventDefault();
    try {
      const data = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      setUser(data.user);
      localStorage.setItem(
        "users",
        JSON.stringify({ uid: data.user.uid, email: data.user.email })
      );
      toast.success("Assalomu alekom Xush kelibsiz!!!");
    } catch (error) {
      toast.error("Email yoki parol xato");
    }
  };

  const handleClickChangeClasses = () => {
    setIsChange(!isChange);
  };

  const handleRegisterGoogle = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      setUser(data.user);
      localStorage.setItem(
        "users",
        JSON.stringify({ uid: data.user.uid, email: data.user.email })
      );
      toast.success("Assalomu alekom Xush kelibsiz!!!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("users"));
    setUser(storedUser);
  }, []);
  return (
    <>
      <div>
        {user ? (
          <>
            <Navbar />
            <Hero />
          </>
        ) : (
          <div className="bg-bgQuranRegister bg-cover h-[100vh] bg-no-repeat font-Poppins">
            <div className="bg-[#133841] backdrop-blur-[60px] absolute top-[20%] md:top-[15%] left-[50%] transform translate-x-[-50%] w-[250px] md:w-[400px] h-auto flex  items-center flex-col rounded-[16px]">
              {/* O'zgaruvchi heading yani h1 */}
              <ChanglerHeading
                isChange={isChange}
                onForgetChange={onForgetChange}
              />
              <div className="input__div flex justify-center items-center flex-col bg-transparent m-[10px] p-[5px] w-[80%] rounded-[6px]  backdrop-filter backdrop-blur-[60px]">
                {isChange ? (
                  // Ro'yxatdan o'tish
                  <SignInSection
                    handleChange={handleChange}
                    handleSignToRegister={handleSignToRegister}
                  />
                ) : (
                  <>
                    {/* Forget password */}
                    <ForgetPassSection
                      onForgetChange={onForgetChange}
                      handleChange={handleChange}
                      forgetHandler={forgetHandler}
                    />

                    {/* Tizimga kirish */}
                    <SignUpSection
                      handleChange={handleChange}
                      handleSignToEmailandPassword={
                        handleSignToEmailandPassword
                      }
                      onForgetChange={onForgetChange}
                    />
                  </>
                )}
              </div>
              <LinkSection
                handleClickChangeClasses={handleClickChangeClasses}
                isChange={isChange}
                forgetHandlerClass={forgetHandlerClass}
              />
              <Button
                handleRegisterGoogle={handleRegisterGoogle}
                google={google}
              />
            </div>
          </div>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default Register;
