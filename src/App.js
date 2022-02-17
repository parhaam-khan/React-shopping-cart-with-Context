import { useState } from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductContext from './context/ProductContext';

import useDarkMode from './hooks/darkMode';

import { Container } from "react-bootstrap";

import products from './products/products';


import Home from "./pages/Home/Home";
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart';

import Darkmode from './components/Darkmode/Darkmode';
import Header from "./components/Header/Header";


const App = () => {
     
    const [cartItems,setCartItems] = useState([])
    const [search,setSearch] = useState("")
    const[data,setData] = useState(products)
    const[hover,setHover] = useState(null)

    const[theme,toggleTheme] = useDarkMode()

    //cart Handlers
    const addToCartHandler = (product) => {
    const existProduct = cartItems.find((item) => item._id === product._id)
    if(existProduct){
        setCartItems(cartItems.map((item) => item._id === product._id ?
        {...existProduct, quantity: existProduct.quantity = 1} : item ))

    }else{
      setCartItems([...cartItems , {...product, quantity:1 }])
    }
    toast.success(`${product.name} added`)
    }

    const addQuantityHandler = (product) => {
        const existProduct = cartItems.find((item) => item._id === product._id)
        if(existProduct){
            setCartItems(cartItems.map((item) => item._id === product._id ?
            {...existProduct, quantity: existProduct.quantity + 1} : item ))
    
        }else{
          setCartItems([...cartItems , {...product, quantity:1 }])
        }
        }

    const removeFromCartHandler = (product) => {
        const existProduct = cartItems.find((item) => item._id === product._id)
     if(existProduct.quantity === 1){
         setCartItems(cartItems.filter((item) => item._id !== product._id ))
     }else{
     setCartItems(cartItems.map((item) => item._id === product._id ?
      {...existProduct , quantity : existProduct.quantity - 1 } : item))
     } 
    }
    
    const trashRemovetHandler = (product) => {
        const existProduct = cartItems.find((item) => item._id === product._id)
       if(existProduct){
           setCartItems(cartItems.filter((item) => item._id !== product._id))
       }
    }
     
    //searchHandler
    const searchHandler = (event) => {
        setSearch(event.target.value)
       }

   //sortHandlers
   const sortHandler = (cat) => {
    const sortResult = products.filter((item) => {
    return item.category === cat
    })
    setData(sortResult)
    }

    const sortAllHandler = () => {
        setData(products)
    }

    //rate Handlers
    const rateHandler = (rateValue,id) => {
        const productList = [...data];
    const productIndex = productList.findIndex((item) => item._id === id);
    const product = productList[productIndex];
    product.rate = rateValue;
    productList[productIndex] = product;
    setData(productList)
    }

    const rateHoverHandler = (hoverValue) => {
       setHover(hoverValue)
    }

    return( 
    <div style={{background: theme === 'dark' ? '#212121': '#ffffff',
    transition: '.2s all'}}>
    <Router>
        <ProductContext.Provider
         value={{search,cartItems,data,hover,theme,toggleTheme,addToCartHandler,sortHandler,sortAllHandler,
         trashRemovetHandler,removeFromCartHandler,addQuantityHandler,searchHandler,
         rateHandler,rateHoverHandler}}>
        <Header/>
          <Container>
          <Darkmode/>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/> 
            <Route path='/cart' element={<Cart/>}/> 
            </Routes>
        </Container>
        <ToastContainer/>
        </ProductContext.Provider>
        
        </Router>
        </div> );
}
 
export default App;