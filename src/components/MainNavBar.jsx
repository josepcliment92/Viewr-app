import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import appLogo from "../assets/img/viewr-logo.png";
import homeLogo from "../assets/img/home-logo.png";
import allShowsLogo from "../assets/img/all-shows-logo.png";
import aboutLogo from "../assets/img/about-logo.png";
import sloganLogo2 from "../assets/img/slogan-logo-2.png";

function MainNavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary justify-content-between"
          bg="dark"
          data-bs-theme="dark"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Brand>
              <div style={{display: "flex"}}>
              <img src={appLogo} alt="viewr-logo" height="40px" style={{marginRight: "25px"}}/>
              <SearchBar />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark"
              data-bs-theme="dark"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={sloganLogo2} alt="viewr" height="80px" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <hr />
                  <Link to={"/home"}>
                    <img src={homeLogo} alt="home-logo" height="20px" />
                  </Link>
                  <hr />
                  <Link to={"/list-shows"}>
                    <img
                      src={allShowsLogo}
                      alt="all-shows-logo"
                      height="20px"
                    />
                  </Link>
                  <hr />
                  <Link to={"/about"}>
                    <img src={aboutLogo} alt="about-logo" height="20px" />
                  </Link>
                  <hr />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MainNavBar;
