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
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src={searchLogo} alt="search-logo" height="70px" />
          </Offcanvas.Title>
        </Offcanvas.Header>
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
                ) }
              </Col>
            </Row>
          </Form>
          <div className="card-search-bar">
            {showList.map((eachResult) => {
              return (
                <div
                  onClick={(e) => handleSubmit(eachResult["#IMDB_ID"])}
                  style={{ display: "flex", flexDirection: "row" }}
                  key={eachResult["#IMDB_ID"]}
                >
                  <Link
                    to={`/list-shows/${eachResult["#IMDB_ID"]}`}
                    onClick={(e) => handleSubmit(eachResult["#IMDB_ID"])}
                    style={{ textDecoration: "none" }}
                  >
                    <Card style={{ width: "10rem", margin: "0.5em" }}>
                      <Card.Img
                        style={{ maxHeight: "10rem", objectFit: "cover" }}
                        variant="top"
                        src={eachResult["#IMG_POSTER"]}
                      />
                      <Card.Body
                        style={{
                          height: "6rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Title className="card-title-search-bar">
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
