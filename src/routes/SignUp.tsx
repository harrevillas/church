import React from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import UserSignUp from "../auth/UserSignUp";
import LogIn from "../auth/LogIn";
import JoinUs from "../assets/JoinUs.jpg";
import Hero from "../components/Hero";

function SignUp() {
  const handleLogin = () => {
    // Your login logic here
  };

  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={JoinUs}
        title="Join Us"
        btnClass="hide"
        text=""
        url=""
        buttonText=""
      />
      {/* Pass onLogin prop to LogIn component */}
      <LogIn onLogin={handleLogin} />
      <UserSignUp />
      <NavBar />
      <Footer />
    </>
  );
}

export default SignUp;

