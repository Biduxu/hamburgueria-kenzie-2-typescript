import {useContext} from "react"
import { CartContext } from "../../contexts/CartContext";

import { StyledCardProduct } from "./styled";

interface iProduct{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string
}

interface iCardProductProps{
    product: iProduct       
}

export function CardProduct({product}: iCardProductProps){

    const {addCart} = useContext(CartContext)

    return(
        <StyledCardProduct>
            <img src={product.img} alt="" />
            <div>
                <h3>{product.name}</h3>
                <span>{product.category}</span>
                <p>R$ {product.price.toFixed(2)}</p>
                <button onClick={()=>{addCart(`${product.id}`)}}>Adicionar</button>
            </div>
        </StyledCardProduct>
    )
}