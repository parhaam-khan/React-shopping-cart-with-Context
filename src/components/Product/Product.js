import { useContext } from "react";

import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import ProductContext from "../../context/ProductContext";

import './product.css'

const Product = ({product}) => {
  
  const productContext = useContext(ProductContext)

    return ( 
        <Card className=" my-3 p-3 rounded">
            <Link to={`product/${product._id}`}>
                <Card.Img className="image" variant="top" src={product.image}/> 
            </Link>
            <Card.Body>
    <Link className="product-name" to={`product/${product._id}`}>
    <Card.Title><h3>{product.name}</h3></Card.Title>
    </Link>
    <Card.Text>
      {product.desc}
    </Card.Text>
    <h3>{product.price}$</h3>
    <Button onClick={() => productContext.addToCartHandler(product)} variant="dark">add to cart</Button>
  </Card.Body>
        </Card>
     );
}
 
export default Product;