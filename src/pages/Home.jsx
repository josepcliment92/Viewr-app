import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LOCAL_URL from "../utils/databaseLocal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShowCard from "../components/ShowCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import lastReviewsLogo from "../assets/img/last-reviews-logo.png";
import LastReviews from "../components/LastReviews";
import { TailSpin } from "react-loader-spinner";

function Home() {
  const [lastReviews, setLastReviews] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${LOCAL_URL}/reviews`)
      .then((res) => {
        const reviews = [...res.data];
        reviews.sort((a, b) => {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
          return dateB - dateA;
        });
        const lastReviews = reviews.slice(0, 10);
        setLastReviews(lastReviews);
      })
      .catch((error) => {
        navigate("*");
      });
  }, []);

  if (lastReviews === null) {
    return (<div style={{ display: "flex", justifyContent: "center" }}>
    <TailSpin color={"white"} size={500} />
  </div>)
  }

  return (
    <div>
      <img
        src={lastReviewsLogo}
        alt="last-reviews-logo"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
        }}
      />
      <div className="card-home-list-shows">
        {lastReviews.map((eachReview) => {
          return (
            <div key={eachReview.id}>
              <LastReviews review={eachReview} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
