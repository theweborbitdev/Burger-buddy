import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Listen to scroll
  const lintenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(windowScroll > heightToHidden);
  };

  // Add/remove scroll listener
  useEffect(() => {
    window.addEventListener('scroll', lintenToScroll);
    return () => {
      window.removeEventListener('scroll', lintenToScroll);
    };
  }, []);

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>Kasur District</p>
                <p>Kasur Ganda Singh Road</p>
                <p>Pakistan</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - *:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Crafted with fresh ingredients</p>
                <p>
                  <Link to="tel:03004051925" className='calling'>
                    0300-4051925
                  </Link>
                </p>
              </div>
            </Col>

            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Every bite of our burger is a new adventure in taste</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-facebook'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-twitter'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-instagram'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-youtube'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='bi bi-pinterest'></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center mb-0'>
                  <li>
                    <Link to='/'>
                      © 2025 <span>ALI AHMAD ❤️ WEBDEVELOPER</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>About Us</Link>
                  </li>
                  <li>
                    <Link to='/'>Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to='/'>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll to top button */}
      {isVisible && (
        <div className='scroll_top' onClick={scrollTop}>
          <i className='bi bi-arrow-up'></i>
        </div>
      )}
    </>
  );
}

export default Footer;
