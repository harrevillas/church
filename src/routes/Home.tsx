import React from 'react';
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Mass from "../components/Mass";

interface HomeProps {
  content: string;
}

const Home = ({ content }: HomeProps) => {
  return (
    <>
      {/* Your Home component JSX */}
      <NavBar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1477672680933-0287a151330e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="In His Presence: A Home for Worship"
        text="In Christian worship, hearts find solace and souls unite in transformative harmony."
        buttonText="Join Us"
        url="/signup"
        btnClass="show"
      />
      <Destination />
      <Mass />
      <Footer />
    </>
  );
}

export default Home;

