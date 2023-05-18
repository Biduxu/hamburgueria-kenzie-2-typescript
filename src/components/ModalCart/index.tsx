import {useContext} from "react"
import { CartContext } from "../../contexts/CartContext";
import { CartProduct } from "../CartProduct";
import { Total } from "../Total";

import { StyledModalCart } from "./styled";

export function ModalCart(){

    const {setCartStatus, listCart} = useContext(CartContext)

    return (
        <StyledModalCart>
            <div className="divModal">
                <div className="divHeader">
                    <h2>Carrinho de compras</h2>
                    <button onClick={()=>{setCartStatus(false)}}>X</button>
                </div>
                {listCart[0].id === 0 ? (
                    <div className="divEmptyCart">
                        <h3>Sua sacola está vazia</h3>
                        <p>Adicione itens</p>
                    </div>    
                ):(
                    <>
                        <ul className="listCartProducts">
                            {listCart.map((product)=>{
                                return (
                                    <CartProduct key={product.id} product={product}/>
                                )
                            })}
                        </ul>
                        <Total/>
                    </>
                )}
                
            </div>
        </StyledModalCart>
    )
}