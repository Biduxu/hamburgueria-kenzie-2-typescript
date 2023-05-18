import React, {createContext, useContext, useState} from "react";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

interface iUserContextProps{
    children: React.ReactNode
}

interface iFormData{
    name?: string,
    email: string,
    password: string,
    confirmPassword?: string
}

interface iUserContext{
    submitForm: (data: iFormData) => void,
    messageError: boolean,
    inputStatus: boolean,
    setInputStatus: React.Dispatch<React.SetStateAction<boolean>>,
    productSearch: string,
    setProductSearch: React.Dispatch<React.SetStateAction<string>>,
    statusToastfy: boolean,
    setStatusToastfy: React.Dispatch<React.SetStateAction<boolean>>,
    infoToastfy: string
}

export const UserContext = createContext({} as iUserContext)

export function UserProvider({children}: iUserContextProps){

    const {setLogin} = useContext(AuthContext)

    const [messageError, setMessageError] = useState(false)

    const [inputStatus, setInputStatus] = useState(false)

    const [statusToastfy, setStatusToastfy] = useState(false)

    const [infoToastfy, setInfoToastfy] = useState("")

    const [productSearch, setProductSearch] = useState("")

    async function submitForm(data: iFormData){
        if(data.name){
            const {name, email, password} = data

            let obj = {
                name: name,
                email: email,
                password: password
            }

            try{
                const request = await api.post("/users", obj)
                if(request.data){
                    setStatusToastfy(true)
                    setInfoToastfy("Conta criada com sucesso!")
                }
            }catch(err){
                setStatusToastfy(true)
                setInfoToastfy("Ops! Algo deu errado!")
            }
        } else{
            try{
                const request = await api.post("/login", data)
                if(request.data.accessToken){
                    localStorage.setItem("@burguerKenzie:token", request.data.accessToken)
                    setLogin(true)
                    setMessageError(false)
                }
            }catch(err){
                setMessageError(true)
            }
        }
    }

    return (
        <UserContext.Provider value={{submitForm, messageError, inputStatus, setInputStatus, productSearch, setProductSearch, statusToastfy, infoToastfy, setStatusToastfy}}>
            {children}
        </UserContext.Provider>
    )

}