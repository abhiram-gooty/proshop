import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async () => {
      try{
        const {data} = await axios.get('http://localhost:8000/api/products');
        setProducts(data)
    } catch(error){
        console.error('error fetching products',error)
    }
  }
    fetchProducts()
  },[])

  return (
    <>
    <Row>
    {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen
