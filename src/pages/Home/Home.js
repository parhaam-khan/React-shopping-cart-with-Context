import { useContext, useState } from "react"

import ProductContext from "../../context/ProductContext"

import { Col, Row } from "react-bootstrap"

import Product from "../../components/Product/Product"

import Sort from "../../components/Sort/Sort"


const Home = () => {


    const productContext = useContext(ProductContext)

    return(
       <div className="mt-5" style={{minHeight:'100vh'}}>
           <h2 className="text-center mb-3" style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>Products</h2>
           <Sort/>
           <Row>
           {productContext.data.filter((item) => {
           if(productContext.search ===("" || " ")){
               return item
           }
           else if(item.name.toLowerCase().includes(productContext.search.toLowerCase())){
               return item 
           }
           }).map((item) => {
           return (
               <Col key={item._id} sm={12} md={4} lg={3}>
               <Product product={item}/>
               </Col>
           )
           })}
           </Row>
       </div>
    )
}
export default Home;