import {useContext} from "react"
import { iProducts } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import { StyledTotal } from "./styled";


export function Total(){

    const {total, listCart, setListCart} = useContext(CartContext)

    function removingAllProducts(){

        let dataReset: iProducts = {
            id: 0,
            name: "",
            category: "",
            price: 0,
            img: "",
            amount: 0
        }

        listCart.forEach((product)=>{
            product.amount = 1
        })
        
        setListCart([dataReset])
    }

    return(
        <StyledTotal>
            <div className="divTotalContent">
                <div>
                    <p>Total</p>
                    <span>{`R$ ${total.toFixed(2)}`}</span>
                </div>
                <button type="button" className="removeAllProducts" onClick={()=>{removingAllProducts()}}>Remover todos</button>
            </div>
        </StyledTotal>
    )
}