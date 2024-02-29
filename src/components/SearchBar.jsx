import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import lupaLogo from "../assets/img/logo-lupa.png";
import searchLogo from "../assets/img/search-logo.png";
import API_URL from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SearchBar() {
  const [show, setShow] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setSpinner(true);
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    setSearch(
      setTimeout(() => {}),
      1000
    );
  };

  const [showList, setShowList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (search.trim() !== "") {
        axios
          .get(`${API_URL}/?q=${search}`)
          .then((response) => {
            setShowList(response.data.description);
            setSpinner(false);
          })
          .catch((error) => {
            navigate("*");
          });
      } else {
        setShowList([]);
        setSpinner(false);
      }
    }, 1000);
    return () => clearTimeout(delaySearch);
  }, [search]);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/list-shows/${eachResult["#IMDB_ID"]}`);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          borderRadius: "100px",
          margin: "0px",
          padding: "0px",
          backgroundColor: "transparent",
          border: "0px",
        }}
      >
        <img src={lupaLogo} alt="lupa-logo" height="20px" />
      </Button>

      <Offcanvas
        className="my-custom-off-canvas"
        show={show}
        onHide={handleClose}
        placement="top"
        bg="dark"
        data-bs-theme="dark"
      >
        <Offcanvas.Title>
          <img
            src={searchLogo}
            alt="search-logo"
            height="70px"
            style={{ margin: "5px", padding: "0px" }}
          />
        </Offcanvas.Title>

        <Offcanvas.Body>
          <Form inline onSubmit={handleSubmit}>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search Your Show"
                  className=" mr-sm-2"
                  value={search}
                  onChange={handleSearch}
                />
              </Col>
              <Col xs="auto">
                {spinner && (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
              </Col>
            </Row>
          </Form>
          <div className="card-search-bar">
            {showList.map((eachResult) => {
              return (
                <div
                  onClick={(e) => handleSubmit(eachResult["#IMDB_ID"])}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    minWidth: "200px",
                    margin: "5px",
                    borderRadius: "10px",
                  }}
                  key={eachResult["#IMDB_ID"]}
                >
                  <Link
                    to={`/list-shows/${eachResult["#IMDB_ID"]}`}
                    onClick={(e) => handleSubmit(eachResult["#IMDB_ID"])}
                    style={{
                      textDecoration: "none",
                      width: "200px",
                      maxWidth: "100%",
                      maxHeight: "300px",
                      margin: "5px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Card>
                      <div style={{ height: "200px", position: "relative" }}>
                        <Card.Img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                          variant="top"
                          src={eachResult["#IMG_POSTER"]}
                        />
                      </div>
                      <Card.Body
                        style={{
                          height: "100px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Card.Title
                          style={{
                            color: "white",
                            fontSize: "16px",
                            lineHeight: "20px",
                            textAlign: "center",
                          }}
                        >
                          {eachResult["#AKA"]}
                        </Card.Title>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SearchBar;
