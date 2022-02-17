import { useContext } from "react"

import { IconContext } from "react-icons"
import {IoMoon} from 'react-icons/io5'
import {IoSunny} from 'react-icons/io5'

import ProductContext from "../../context/ProductContext"

import './darkmode.css'

const Darkmode = () => {

const productContext = useContext(ProductContext)

    return ( 
        <div className="d-flex justify-content-end my-3">
               <input onClick={productContext.toggleTheme} type="checkbox" className="darkmode" id="darkmode"/>
            <label htmlFor="darkmode" className="label">
                <IconContext.Provider value={{ color: "yellow" }}>
                <IoSunny/>
                <IoMoon/>
                </IconContext.Provider>
                  
                  <div className="ball"></div>
                    </label>
           </div>
     );
}
 
export default Darkmode;