import "./HeroStyles.css";

interface HeroProps {
  cName: string;
  heroImg: string;
  title: string;
  text: string;
  url: string;
  btnClass: string;
  buttonText: string;
}

function Hero(props: HeroProps) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
