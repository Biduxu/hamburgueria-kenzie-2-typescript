import React, {createContext, useContext, useEffect, useState} from "react";

import { AuthContext, iProducts } from "./AuthContext";

interface iCartContextProps{
    children: React.ReactNode
}

interface iCart{
    cartStatus: boolean,
    setCartStatus: React.Dispatch<React.SetStateAction<boolean>>,
    listCart: iProducts[],
    setListCart: React.Dispatch<React.SetStateAction<Array<iProducts>>>,
    addCart: (id: string) => void,
    removeCart: (id: string) => void,
    counterProductsCart: number,
    addProduct: (id: string) => void,
    removeProduct: (id: string) => void,
    total: number
}

export const CartContext = createContext({} as iCart)

export function CartProvider({children}: iCartContextProps){

    const {products} = useContext(AuthContext)

    const [cartStatus, setCartStatus] = useState(false)

    const [counterProductsCart, setCounterProductsCart] = useState(0)

    const [total, setTotal] = useState(0)

    const [listCart, setListCart] = useState([{
        id: 0,
        name: "",
        category: "",
        price: 0,
        img: "",
        amount: 0
    }])

    useEffect(()=>{
        function cartProductsAmount(){
            let counter = 0
            listCart.forEach((product)=>{
                counter += product.amount
            })
    
            setCounterProductsCart(counter)
        }

        cartProductsAmount()

        function getTotal(){
            let totalPrice = 0
            listCart.forEach((product)=>{
                totalPrice += product.amount*product.price
            })

            setTotal(totalPrice)
        }

        getTotal()

    }, [listCart])

    function addCart(id: string){
        if(products !== null && listCart[0].id === 0){
            let productFound = products.filter((product)=>{
                return product.id === parseInt(id)
            })

            setListCart(productFound)
        }else if(products !== null && listCart[0].id !== 0){
            let productFound = products.filter((product)=>{
                return product.id === parseInt(id)
            })

            let duplicateProduct = listCart.find((product)=>{
                return product.id === parseInt(id)
            })

            if(duplicateProduct){
                let newArray = listCart.map((product)=>{
                    if(duplicateProduct?.id === product.id){
                        duplicateProduct.amount ++
                    }
                    return product
                })

                setListCart(newArray)
            } else{
                setListCart([...listCart, ...productFound])
            }
        }
    }

    function removeCart(id: string){
        if(listCart.length === 1 && listCart[0].id !== 0){
            listCart.forEach((product)=>{
                product.amount = 1
            })

            setListCart([{
                id: 0,
                name: "",
                category: "",
                price: 0,
                img: "",
                amount: 0
            }])
        } else{
            let newArray = listCart.filter((product)=>{
                if(product.id === parseInt(id)){
                    product.amount = 1
                }
                return product.id !== parseInt(id)
            })

            setListCart(newArray)
        }
    }

    function addProduct(id: string){
        let newArray = listCart.map((product)=>{
            if(product.id === parseInt(id)){
                product.amount ++
            }

            return product
        })

        setListCart(newArray)
    }

    function removeProduct(id: string){

        let productFound = listCart.find((product)=>{
            return product.id === parseInt(id)
        })

        if(productFound?.amount === 1){
            let newArray = listCart.filter((product)=>{
                return product.id !== productFound?.id
            })
            if(listCart.length === 1){
                setListCart([{
                    id: 0,
                    name: "",
                    category: "",
                    price: 0,
                    img: "",
                    amount: 0
                }])
            } else{
                setListCart(newArray)
            }
        } else{
            let newArray = listCart.map((product)=>{
                if(product.id === parseInt(id)){
                    product.amount --
                }
                return product
            })
    
            setListCart(newArray)
        }

    }
 
    return (
        <CartContext.Provider value={{cartStatus, setCartStatus, listCart, setListCart, addCart, removeCart, counterProductsCart, addProduct, removeProduct, total}}>
            {children}
        </CartContext.Provider>
    )
}