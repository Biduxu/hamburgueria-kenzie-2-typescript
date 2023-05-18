import {useContext} from "react"

import { AuthContext } from "../../contexts/AuthContext";
import { CardProduct } from "../CardProduct";
import { StyledListProducts } from "./styled";


export function ListProducts(){

    const {products} = useContext(AuthContext)
    
    return (
        <StyledListProducts>
            {products?.map((product)=>{
                return (<CardProduct key={product.id} product={product}/>)
            })}
        </StyledListProducts>
    )
}