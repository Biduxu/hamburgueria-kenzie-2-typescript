import {useContext, useState} from "react"

import { CartContext } from "../../contexts/CartContext"

import { Header } from "../../components/Header"
import { ListProducts } from "../../components/ListProducts"
import { StyledDashboard } from "./styled"
import { ModalCart } from "../../components/ModalCart"
import { UserContext } from "../../contexts/UserContext"
import { AuthContext, iProducts } from "../../contexts/AuthContext"
import { InputSearch } from "../../components/InputSearch"

export function Dashboard(){

    const {setProducts, allProductsFixed} = useContext(AuthContext)
    const {cartStatus} = useContext(CartContext)
    const {inputStatus, setInputStatus, productSearch}  = useContext(UserContext)

    const [inputMobile, setInputMobile] = useState(false)

    function closeSearch(){
        setInputStatus(false)

        let newArray = allProductsFixed.map((product: iProducts)=>{
            return product
        })
        
        setProducts(newArray)
    }

    return (
        <StyledDashboard>
            <Header inputMobile={inputMobile} setInputMobile={setInputMobile}/>
            <main>
                {inputStatus === true ? (
                    <div className="divInfoSearch">
                        <h2>Resultados para: {productSearch}</h2>
                        <button onClick={()=>{closeSearch()}}>Limpar pesquisa</button>
                    </div>
                ):(     
                    null
                )}
                <ListProducts/>
            </main>
            {inputMobile === true ? (
                    <div className="inputSearchDiv">
                        <InputSearch/>
                    </div>
                ):(
                    null
                )}
            {cartStatus === true ? (
                <ModalCart/>
            ):(
                null
            )}
        </StyledDashboard>
    )
}