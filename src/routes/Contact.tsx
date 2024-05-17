import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import PrayerRequest from "../components/PrayerRequest";

function Contact() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Prayer Request"
        btnClass="hide"
        text=""
        url=""
        buttonText=""
      />
      <PrayerRequest />
      <Footer />
    </>
  );
}

export default Contact;
