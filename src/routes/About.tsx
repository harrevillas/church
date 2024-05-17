import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/cross.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Announcement"
        btnClass="hide"
        text=""
        url=""
        buttonText=""
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
