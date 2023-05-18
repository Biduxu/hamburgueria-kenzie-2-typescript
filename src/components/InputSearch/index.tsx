import {useContext, useState} from "react"

import { StyledInputSearch } from "./styled";

import buttonSearch from "./../../assets/img/button-lup.png"
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

export function InputSearch(){

    const {setProducts, allProductsFixed} = useContext(AuthContext)

    const {setProductSearch, setInputStatus} = useContext(UserContext)

    const [inputValue, setInputValue] = useState("")

    function getValue(e: any){
        e.preventDefault()
        setInputStatus(true)
        let auxArray = allProductsFixed.filter((product)=>{
            return product.name.toLowerCase().includes(inputValue.toLowerCase()) || product.category.toLowerCase().includes(inputValue.toLowerCase())
        })
        setProductSearch(inputValue)
        setProducts(auxArray)

    }

    return (
        <StyledInputSearch>
            <form onSubmit={(e)=>{getValue(e)}}>
                <input type="text" placeholder="Digitar Pesquisa" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button type="submit"><img src={buttonSearch} alt="" /></button>
            </form>
        </StyledInputSearch>
    )
}