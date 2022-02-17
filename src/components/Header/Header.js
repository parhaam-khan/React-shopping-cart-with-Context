
import { useContext } from "react";
import { Badge, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ProductContext from "../../context/ProductContext";


import './header.css'

const Header = () => {
     const productContext = useContext(ProductContext)
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                OG market
            </Navbar.Brand>
                </LinkContainer>
           
            <Nav className="me-auto">
                <LinkContainer to='/'>
                <Nav.Link>
                    Home
                </Nav.Link>
                </LinkContainer>

               
            </Nav>
            
            <Nav>
               <LinkContainer to='/cart'>
               <Nav.Link className="me-4">
                     <Badge pill bg="danger">{productContext.cartItems.length}</Badge><i className="fa fa-shopping-cart fa-lg"></i>
                </Nav.Link>
               </LinkContainer>
            </Nav>
           <Form  className="d-flex">
               <FormControl
               className="form-control"
               value={productContext.search}
               onChange={productContext.searchHandler}
                type="search"
                 placeholder="search" 
                  className="me-2"
                    aria-label="Search"/>                      
           </Form>
            </Container>
        </Navbar>
    );
}
 
export default Header;