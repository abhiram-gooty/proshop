import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`product/${product._id}`}>
            <Card.Img src={product.image} variant='top'/>
        </Link>
        <CardBody >
          <Link to={`product/${product._id}`}>
            <CardTitle as="div" className='product-title'>
              <strong>{product.name}</strong>
            </CardTitle>
          </Link>

          <CardText as='div'>
            <Rating 
            value={product.rating}
            text={product.numReviews}
            />
          </CardText>

          <CardText as="h3">
            ${product.price}
          </CardText>
        </CardBody>
    </Card>
  )
}

export default Product
