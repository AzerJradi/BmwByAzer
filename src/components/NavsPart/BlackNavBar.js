import React from "react";
import '../../style.css'
import { Container, Nav, Navbar } from "react-bootstrap";

function BlackNavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-red">
        <Container id="whitenav">
          <Navbar.Brand href="#home">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFB4ekfnKhEGfCwaSzTO-7JqFm7TQgy-pKg&s" width="60px" alt="" className="navvPhoto" id="navvPhoto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id='navThings' className="me-auto">
              <Nav.Link className="whiteNavNames" >Models</Nav.Link>
              <Nav.Link className="whiteNavNames" >Electric Range</Nav.Link>
              <Nav.Link className="whiteNavNames">Configure</Nav.Link>
              <Nav.Link className="whiteNavNames">Buy</Nav.Link>
              <Nav.Link className="whiteNavNames">Brand and Services</Nav.Link>
            </Nav>
            <Nav id='navImgs'>
              <Nav.Link href="#deets">
                <img src="./photos/user_icon.png" alt="" width="20px" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src="./photos/shopping_cart_icon.png" alt="" width="20px" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src="./photos/maps_icon.png" alt="" width="20px" />
              </Nav.Link>
              <Nav.Link href="#deets">
                <img src="./photos/search_icon.png" alt="" width="20px" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BlackNavBar;
