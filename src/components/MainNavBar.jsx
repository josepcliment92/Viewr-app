import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchBar from "./SearchBar";
import { Link, useLocation } from "react-router-dom";
import appLogo from "../assets/img/viewr-logo.png";
import homeLogo from "../assets/img/home-logo.png";
import allShowsLogo from "../assets/img/all-shows-logo.png";
import aboutLogo from "../assets/img/about-logo.png";
import sloganLogo2 from "../assets/img/slogan-logo-2.png";
import { useState } from "react";

function MainNavBar() {
  const expand = false;
  const [isOffCanvasShowing, setIsOffCanvasShowing] = useState(false);
  const location = useLocation();
  const handleToggleOffCanvas = () =>
    setIsOffCanvasShowing(!isOffCanvasShowing);
  const shouldShowNavbar = () => {
    return location.pathname !== "/";
  };

  return (
    <>
      {shouldShowNavbar() && (
        <Navbar
          expand={expand}
          className="bg-body-tertiary justify-content-between"
          bg="dark"
          data-bs-theme="dark"
          sticky="top"
        >
          <Container fluid>
            <Navbar.Brand>
              <div style={{ display: "flex" }}>
                <Link to={"/home"}>
                  <img
                    src={appLogo}
                    alt="viewr-logo"
                    height="40px"
                    style={{ marginRight: "25px" }}
                  />
                </Link>
                <SearchBar />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleToggleOffCanvas}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg="dark"
              data-bs-theme="dark"
              show={isOffCanvasShowing}
              onHide={setIsOffCanvasShowing}
            >
              <Offcanvas.Header>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={sloganLogo2} alt="viewr" height="80px" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body onClick={handleToggleOffCanvas}>
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
      )}
    </>
  );
}

export default MainNavBar;
