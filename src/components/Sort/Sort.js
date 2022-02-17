import { useContext } from "react";
import { Button } from "react-bootstrap";
import ProductContext from "../../context/ProductContext";

const Sort = () => {
    const productContext = useContext(ProductContext)
    return (
        <>
        <Button  variant="dark" onClick={() => productContext.sortHandler("mobiles")}>
          <span style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>mobile</span></Button>
          <Button className="ms-2" variant="dark" onClick={() => productContext.sortHandler("books")}> <span style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>book</span></Button>
          <Button className="ms-2" variant="dark" onClick={() => productContext.sortHandler("clothes")}> <span style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>clothes</span></Button>
          <Button className="ms-2" variant="dark" onClick={() => productContext.sortHandler("fruits")}> <span style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>fruit</span></Button>
          <Button className="ms-2" variant="dark" onClick={productContext.sortAllHandler}> <span style={{color: productContext.theme === 'dark' && 'yellow',
        transition: '.2s all' }}>all</span></Button>

        </> 
          
        
     );
}
 
export default Sort;