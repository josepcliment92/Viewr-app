import aboutLogo from "../assets/img/about-logo.png";

function About() {
  return (
    <div>
      <img
        src={aboutLogo}
        alt="about-logo"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
    </div>
  );
}

export default About;
