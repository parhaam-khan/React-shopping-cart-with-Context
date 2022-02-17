import { useContext } from 'react'

import ProductContext from '../../context/ProductContext'

import { Link, useParams } from 'react-router-dom'

import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'

import products from '../../products/products'

import Rate from '../../components/Rate/Rate'

import './productDetail.css'

const ProductDetail = () => {

 const productContext = useContext(ProductContext)

  const params = useParams()
  const product = products.find((item) => {
    return item._id === params.id
  })

  return (
    <div className='mainDetail' >
      <main className='mt-3'>
      <Link to='/'>
      <Button variant='dark' style={{background: productContext.theme === 'dark' && '#144ea2',
        transition: '.2s all' }}>
       <i className='fa fa-arrow-left'></i>
      </Button>
      </Link>
     <Row>
       <Col sm={12} md={6}>
         <Image className="image-detail" src={product.image} fluid/>
       </Col>
       <Col sm={12} md={6}>
         <ListGroup variant='flush' className='mt-5 listGroup'>
           <ListGroup.Item>
             <h3>{product.name}</h3>
           </ListGroup.Item>
           <ListGroup.Item>
             {product.desc}
           </ListGroup.Item>
           <ListGroup.Item>
             <h4>{product.price}$</h4>
           </ListGroup.Item>
         </ListGroup>
         <div className='rate'>
           <h5 style={{color: productContext.theme === 'dark' && '#ffffff',
        transition: '.2s all' }}>rate the product</h5>  

            <Rate productId={product._id} rate={product.rate} />
         
         </div>
         <div className='add'>
         <Button onClick={() => productContext.addToCartHandler(product)} variant="dark" style={{background: productContext.theme === 'dark' && '#144ea2',
        transition: '.2s all' }}>add to cart</Button>
         </div>
       </Col>
     </Row>
     </main>
    </div>
  )
}

export default ProductDetail