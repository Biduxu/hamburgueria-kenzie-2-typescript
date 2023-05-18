import {useContext} from "react"

import { StyledCartProduct } from "./styled";
import { iProducts } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import trash from "./../../assets/img/Trash.png"

interface iCardProductProps{
    product: iProducts
}

export function CartProduct({product}: iCardProductProps){

    const {removeCart, addProduct, removeProduct} = useContext(CartContext)

    return (
        <StyledCartProduct>
            <div className="divContent">
                <img className="imgProduct" src={product.img} alt="" />
                <div className="divTitleCounter"> 
                    <h3>{product.name}</h3>
                    <div className="divAmount">
                        <button onClick={()=>{removeProduct(`${product.id}`)}}>-</button>
                        <span>{product.amount}</span>
                        <button onClick={()=>{addProduct(`${product.id}`)}}>+</button>
                    </div>
                </div>
            </div>
            <button className="trashButton" onClick={()=>{removeCart(`${product.id}`)}}><img src={trash} alt="" /></button>
        </StyledCartProduct>
    )
}