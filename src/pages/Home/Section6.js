import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function Section6() {
  return (
    <section className='blog_section'>
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <div className='user_img'>
                <img src={User1} alt='user-1' className='img-fluid' />
              </div>
              <p>
                " Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "
              </p>
              <ul className='item_rating mb2'>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
              </ul>
              <h5>BY AMELIE NEWLOVE</h5>
            </Carousel.Item>

            <Carousel.Item>
              <div className='user_img'>
                <img src={User2} alt='user-2' className='img-fluid' />
              </div>
              <p>
                " Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "
              </p>
              <ul className='item_rating mb2'>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
              </ul>
              <h5>BY AMELIE NEWLOVE</h5>
            </Carousel.Item>

            <Carousel.Item>
              <div className='user_img'>
                <img src={User3} alt='user-3' className='img-fluid' />
              </div>
              <p>
                " Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "
              </p>
              <ul className='item_rating mb2'>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
              </ul>
              <h5>BY AMELIE NEWLOVE</h5>
            </Carousel.Item>

            <Carousel.Item>
              <div className='user_img'>
                <img src={User4} alt='user-4' className='img-fluid' />
              </div>
              <p>
                " Etiam sapien sem at sagittis congue augue massa varius
                sodales sapien undo tempus dolor egestas magna suscipit magna
                tempus aliquet porta sodales augue suscipit luctus neque "
              </p>
              <ul className='item_rating mb2'>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
                <li className='bi bi-star-fill'></li>
              </ul>
              <h5>BY AMELIE NEWLOVE</h5>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
