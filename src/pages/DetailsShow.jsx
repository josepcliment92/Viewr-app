import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../utils/api";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";
import Button from "react-bootstrap/esm/Button";
import LOCAL_URL from "../utils/databaseLocal";
import ReviewCard from "../components/ReviewCard";
import DetailsCard from "../components/DetailsCard";
import Card from "react-bootstrap/Card";
import { TailSpin } from "react-loader-spinner";

function DetailsShow() {
  const [show, setShow] = useState(null);
  const [review, setReview] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  const [isAddFormShowing, setIsAddFormShowing] = useState(false);

  useEffect(() => {
    getDataFromApi();
    getDataFromServer();
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

  const handleToggleAddForm = () => {
    setIsAddFormShowing(!isAddFormShowing);
  };

  if (show === null) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TailSpin color={"white"} size={500} />
        </div>
    );
  }

  return (
    <div>
      <DetailsCard show={show} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          bg="dark"
          text="white"
          style={{ width: "18rem" }}
          className="add-review-card"
        >
          <Card.Body className="d-grid gap-2">
            <Button variant="success" size="lg" onClick={handleToggleAddForm}>
              Did you like the show? Tell us!
            </Button>
            {isAddFormShowing === true ? (
              <ReviewForm
                showId={show["#IMDB_ID"]}
                showName={show["#AKA"]}
                showImage={show["#IMG_POSTER"]}
                getDataFromServer={getDataFromServer}
                handleToggleAddForm={handleToggleAddForm}
              />
            ) : null}
          </Card.Body>
        </Card>
      </div>
      <div>
        <hr />
        {review.map((eachReview) => {
          return (
            <ReviewCard
              eachReview={eachReview}
              key={eachReview.id}
              getDataFromServer={getDataFromServer}
              setReview={setReview}
              review={review}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DetailsShow;
