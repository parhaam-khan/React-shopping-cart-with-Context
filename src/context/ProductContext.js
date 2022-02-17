import { createContext } from "react";

const ProductContext = createContext({
search : "",
cartItems : [],
data : [],
hover : null,
theme : 'light',
addToCartHandler : () => {},
trashRemovetHandler : () => {},
removeFromCartHandler : () => {},
addQuantityHandler : () => {},
searchHandler : () => {},
sortHandler : () => {},
sortAllHandler : () => {},
rateHandler : () => {},
rateHoverHandler : () => {},
toggleTheme : () => {},
})

export default ProductContext;