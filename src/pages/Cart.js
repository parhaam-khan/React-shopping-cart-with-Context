import { useContext } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import ProductContext from "../context/ProductContext";

const Cart = () => {

    const productContext = useContext(ProductContext)

    return ( 
        
             <div style={{minHeight:'100vh'}}>
            {productContext.cartItems.length === 0 ? <h4 className="text-center mt-5" style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>there is no item in cart</h4> :
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush" style={{borderRadius:'5px'}}>
                    {productContext.cartItems.map((item) => {
                        return(
                            <ListGroup.Item key={item._id}>
                            <Row>
                                <Col md={3}>

                                    <Image fluid rounded src={item.image}/>
                                    
                                </Col>
                                <Col md={3}>
                                   <h4 className="mt-5">{item.name}</h4> 
                                </Col>
                                <Col md={2}>
                                   <h5  className="mt-5">{item.price}$</h5>
                                </Col>
                                <Col className="mt-5" md={4}>
                        <Button onClick={() => productContext.addQuantityHandler(item)} className="ms-2" variant="dark"><span>+</span></Button>
                        <span className="ms-2">{item.quantity}</span>
                        <Button onClick={() =>productContext.removeFromCartHandler(item)} className="ms-2" variant="dark"><span>-</span></Button>
                        <Button onClick={() =>productContext.trashRemovetHandler(item)} className="ms-2" variant="dark"><i className="fa fa-trash"></i></Button>
                                </Col>
                            </Row>
                           </ListGroup.Item>
                        )
                    }
                        
                    )}
                    </ListGroup>
                    </Col>
                    <Col md={4}>
                       <ListGroup variant="flush"  style={{borderRadius:'5px'}}>
                           <ListGroup.Item>
                            <h5> total price :</h5>
                           </ListGroup.Item>
                           <ListGroup.Item>
                           <h3>{productContext.cartItems.reduce((acc, item) => acc + item.quantity * item.price , 0)}$</h3>
                           </ListGroup.Item>
                       </ListGroup>
                    </Col>
               </Row>
            }
        </div>
       
     );
}
 
export default Cart;