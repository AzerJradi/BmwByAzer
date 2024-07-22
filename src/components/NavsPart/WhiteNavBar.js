import React from 'react';
import '../../style.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

function WhiteNavBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-red">
        <Container id="whitenav">
          <Navbar.Brand>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7BMegM7JQEUhwHuBh_3i4-c7dmCIA4jHIbw&s" width="60px" alt="" id="navPhoto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav id='navThings' className="me-auto">
              <Nav.Link >Models</Nav.Link>
              <Nav.Link>Electric Range</Nav.Link>
              <Nav.Link>Configure</Nav.Link>
              <Nav.Link>Buy</Nav.Link>
              <Nav.Link>Brand and Services</Nav.Link>
            </Nav>
            <Nav id='navImgs'>
              <Nav.Link>
                <img src="./photos/user_icon.png" alt="" width="20px" />
              </Nav.Link>
              <Nav.Link>
                <img src="./photos/shopping_cart_icon.png" alt="" width="20px" />
              </Nav.Link>
              <Nav.Link>
                <img src="./photos/maps_icon.png" alt="" width="20px" />
              </Nav.Link>
              <Nav.Link>
                <img src="./photos/search_icon.png" alt="" width="20px" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default WhiteNavBar;
