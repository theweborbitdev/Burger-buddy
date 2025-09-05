import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cards({ image, rating, title, paragraph, price, renderRatinIcons }) {
  return (
    <Card className='overflow-hidden'>
      <div className='overflow-hidden'>
        <Card.Img variant='top' src={image} />
      </div>
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between mb-2'>
          <div className='item_rating'>{renderRatinIcons(rating)}</div>
          <div className='wishlist'>
            <i className='bi bi-heart'></i>
          </div>
        </div>

        <Card.Title style={{ fontWeight: '700' }}>{title}</Card.Title>

        <Card.Text>{paragraph}</Card.Text>

        <div className='d-flex align-items-center justify-content-between mt-3'>
          <div className='menu_price'>
            <h5 style={{fontWeight:'400'}} className='mb-0'>${price.toFixed(2)}</h5>
          </div>
          <div className='add_to_card'>
            <Link to='/'>
              <i className='bi bi-bag me-2'></i>
              Add To Cart
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
