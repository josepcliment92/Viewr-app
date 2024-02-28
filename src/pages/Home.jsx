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

function Home() {
  const [lastReviews, setLastReviews] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${LOCAL_URL}/reviews`)
      .then((res) => {
        const reviews = res.data;
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

  if (shows === null) {
    return <h3> Cargando... </h3>; // incluir más adelante un Spinner
  }

  return (
    <div className="card-home-list-shows">
      {shows.map((eachShow) => {
        return (
          <div >
            <ShowCard eachShow={eachShow} />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
