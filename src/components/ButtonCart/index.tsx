import {useContext} from "react"

import { StyledButtonCart } from "./styled";
import { CartContext } from "../../contexts/CartContext";

import imageCart from "./../../assets/img/button-cart.png"

export function ButtonCart(){

    const {setCartStatus, counterProductsCart} = useContext(CartContext)

    return (
        <StyledButtonCart onClick={()=>{setCartStatus(true)}}>
            <div>
                <h4>{counterProductsCart}</h4>
                <img src={imageCart} alt="" />
            </div>
        </StyledButtonCart>
    )
}