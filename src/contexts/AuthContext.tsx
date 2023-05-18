import React, {createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface iAuthContextProps{
    children: React.ReactNode
}

export interface iProducts{
    id: number,
    name: string,
    category: string,
    price: number,
    img: string,
    amount: number
}

interface iAuthContext{
    products: iProducts[],
    setProducts: React.Dispatch<React.SetStateAction<Array<iProducts>>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setLogin: React.Dispatch<React.SetStateAction<boolean>>,
    allProductsFixed: iProducts[]
}


export const AuthContext = createContext({} as iAuthContext)

export function AuthProvider({children}: iAuthContextProps){

    const navigate = useNavigate()

    const [products, setProducts] = useState([{
        id: 0,
        name: "",
        category: "",
        price: 0,
        img: "",
        amount: 0
    }])

    const [allProductsFixed, setAllProductsFixed] = useState([{
        id: 0,
        name: "",
        category: "",
        price: 0,
        img: "",
        amount: 0
    }])
    const [loading, setLoading] = useState(true)
    const [login, setLogin] = useState(false)

    useEffect(()=>{
        async function loadUser(){
            const token = localStorage.getItem("@burguerKenzie:token")
            if(!token){
                setLoading(false)
                return 
            }

            try{
                const {data} = await api.get("/products", {headers: {authorization: `Bearer ${token}`}})
                let arrayDataWithAmount = data.map((product: iProducts)=>{
                    product.amount = 1
                    return product
                })
                setProducts(arrayDataWithAmount)
                setAllProductsFixed(arrayDataWithAmount)
                navigate("/dashboard")
                if(login === true){
                    navigate("/dashboard")
                }
            }catch(err){
                return null
            }finally{
                setLoading(false)
            }

        
        }
        loadUser()
    },[login])

    return (
        <AuthContext.Provider value={{products, setProducts, loading, setLoading, setLogin, allProductsFixed}}>
            {children}
        </AuthContext.Provider>
    )
}