import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import Button from "react-bootstrap/esm/Button";
import LOCAL_URL from "../utils/databaseLocal";

function DetailsShow() {
  const [show, setShow] = useState([]);
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getDataFromApi();
    getDataFromServer()
  }, []);

  async function getDataFromApi() {
    try {
      const show = await axios.get(`${API_URL}/?q=${params.showId}`);

      setShow(show.data.description[0]);
    } catch (error) {
      navigate("*");
    }
  }
  async function getDataFromServer() {
    try {
      const review = await axios.get(
        `${LOCAL_URL}/reviews?showID=${params.showId}`
      );

      setReview(review.data);
    } catch (error) {
      navigate("*");
    }
  }

  const handleDelete = (e) => {
    axios
      .delete(`${LOCAL_URL}/reviews/${e}`)
      .then(() => {
        getDataFromServer();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (show === null) {
    return <h3> Cargando... </h3>; // incluir más adelante un Spinner
  }

  return (
    <div>
      <div>
        <img src={show["#IMG_POSTER"]} alt={show["#TITLE"]} width="200px" />
        <h2>{show["#TITLE"]}</h2>
        <hr />
        <p>
          <strong>AKA:</strong> {show["#AKA"]}
        </p>
        <p>
          <strong>Year:</strong> {show["#YEAR"]}{" "}
        </p>
        <p>
          <strong>Actors:</strong> {show["#ACTORS"]}
        </p>
        <p>
          <strong>Rank in IMDb:</strong> {show["#RANK"]}
        </p>
        <Link to={show["#IMDB_URL"]} target="_blank">
          <Button variant="outline-info" style={{ margin: "25px" }}>
            More info
          </Button>
        </Link>
        <hr />
      </div>
      <div>
        <ReviewForm
          showId={show["#IMDB_ID"]}
          showName={show["#TITLE"]}
          showImage={show["#IMG_POSTER"]}
          getDataFromServer={getDataFromServer}
        />
      </div>
      <div>
        <hr />
        {review.map((eachReview) => {
          return (
            <div key={eachReview.id}>
              <h1>
                <strong>Rating:</strong>
                <br />
                {eachReview.rating}
              </h1>
              <h3>
                <strong>Review:</strong>
                <br />
                {eachReview.review}
              </h3>
              <h3 style={{ marginBottom: "50px" }}>
                <strong>Username:</strong>
                <br />
                {eachReview.username}
              </h3>
              <div className="d-grid gap-2">
                <Button variant="outline-warning" size="lg">
                  Edit
                </Button>
                <Button
                  variant="outline-danger"
                  size="lg"
                  onClick={(e) => handleDelete(eachReview.id)}
                >
                  Delete
                </Button>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailsShow;

//En el botón de MORE INFORMATION, hacer que el link se abra en una pestaña nueva para no salir de nuestra página (es un link externo)
