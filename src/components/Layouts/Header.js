import React,{useState} from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

function Header() {
    const[nav, setNav] = useState(false);

    //scroll navbar


    const changeValueOnScroll=() =>{
      const scrollValue = document?.documentElement?.scrollTop;
      scrollValue > 100 ? setNav(true):setNav(false);

    };


    window.addEventListener("scroll",changeValueOnScroll);




  return (
    <header>
      <Navbar collapseOnSelect expand="lg" 
      
      className={`${nav === true ? "sticky" : ""}`}
      
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand as={Link} to="/" className="logo">
  <img src={Logo} alt="Logo" className="img-fluid" />
</Navbar.Brand>

          {/* Toggle button for mobile */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Navigation Links */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              {/* Cart Section */}
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
