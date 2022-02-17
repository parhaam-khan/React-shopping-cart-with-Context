import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';
import './rate.css'

const Rate = ({productId,rate}) => {
    
    const productContext = useContext(ProductContext)

    return ( 
        <div>
<div>
            {[...Array(5)].map((item,i) => {
                const ratingValue = i + 1
            return(
                <label key={i} className="d-inline-block">
             <input type="radio"
              name="rating"
               value={ratingValue}
                onClick={() => productContext.rateHandler(ratingValue,productId)}
               />
            <i style={{color : ratingValue <= (productContext.hover || rate)  ? "#ffc107" : "#e4e5e9" }}
             className="fa fa-star fa-2x star"
             onMouseEnter={() => productContext.rateHoverHandler(ratingValue)}
             onMouseLeave={() => productContext.rateHoverHandler(null)}></i>
                </label>
            )
            })}
        </div>
        <span style={{color: productContext.theme === 'dark' && '#ffffff',
        transition: '.2s all' }}>your rate: {rate}</span>
        </div>
        
     );
}
 
export default Rate;