import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/delivery-bike.png';

// Mock Data Card
const mockData = [
  {
    image: Pizza,
    title: 'Original',
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: Salad,
    title: 'Quality Foods',
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    image: Delivery,
    title: 'Fastest Delivery',
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export const Section2 = () => {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Burgers taste better when eaten with family</h2>
              <p>
                Every bite of our burger is a new adventure in taste. Crafted with fresh ingredients and
                signature spices that hit the spot. Juicy, crunchy, and bursting with unforgettable flavor.
                We don't compromise on taste. That's our promise.
              </p>
              <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col key={index} md={6} lg={4} className="mb-4 mb-md-0">
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img src={cardData.image} className="img-fluid" alt="icon" />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Section2;
