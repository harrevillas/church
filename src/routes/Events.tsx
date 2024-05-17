import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/events.jpg";
import Footer from "../components/Footer";
import Mass from "../components/Mass";

function Events() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Events"
        btnClass="hide"
        text="" // Provide default value for text prop
        url="" // Provide default value for url prop
        buttonText="" // Provide default value for buttonText prop
      />
      <Mass />
      <Footer />
    </>
  );
}

export default Events;
