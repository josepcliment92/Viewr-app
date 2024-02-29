import aboutLogo from "../assets/img/about-logo.png";

function About() {
  return (
    <div>
      <div style={{marginBottom: "20px"}}>
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
      <div className="about-content">
        <h2>Welcome to Viewr!</h2>
        <p>
          Viewr is your ultimate destination for{" "}
          <b>
            discovering, exploring, and celebrating the world of movies and
            television
          </b>
          . Whether you're a cinephile, TV enthusiast, or casual viewer, Viewr
          offers a comprehensive platform to satisfy your entertainment
          cravings.
        </p>
        <h3>What do we do?</h3>
        <p>
          At Viewr, our mission is simple yet ambitious: to provide a
          centralized hub where users can access a vast collection of movies, TV
          shows, and other cinematic content. We strive to empower users to
          delve into the depths of cinema, discover hidden gems and recommend
          each other the best releases.
        </p>
        <h3>Our features</h3>
        <ul>
          <li>
            <b>Extensive Database:</b> Explore a diverse library of movies, TV
            series, documentaries, and more.
          </li>
          <li>
            <b>Detailed Information:</b> Access comprehensive details about each
            title, including cast information, ratings, reviews and much more.
          </li>
          <li>
            <b>Personalized Experience:</b> Rate your favorite titles, write
            reviews and share your opinion with the Viewr community.
          </li>
          <li>
            <b>Discover & Explore:</b> Discover trending titles and find
            recommendations based on other users preferences.
          </li>
          <li>
            <b>Community Engagement:</b> Connect with fellow movie enthusiasts,
            participate in discussions and share your thoughts on your favorite
            titles.
          </li>
        </ul>
        <h3>Our Team</h3>
        <p>
          Viewr is developed and maintained by a passionate team of movie buffs,
          television aficionados, and technology enthusiasts. We are dedicated
          to delivering an exceptional user experience and continuously
          improving our platform to meet the evolving needs of our community.
        </p>
        <h3>Thank You for Choosing Viewr!</h3>
        <p>
          We appreciate your support and enthusiasm for the world of cinema.{" "}
          <b>Join us on Viewr,</b> where every movie has a story and every story
          deserves to be told.
        </p>
      </div>
    </div>
  );
}

export default About;
