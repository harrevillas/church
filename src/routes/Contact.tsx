import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
        text=""
        url=""
        buttonText=""
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
