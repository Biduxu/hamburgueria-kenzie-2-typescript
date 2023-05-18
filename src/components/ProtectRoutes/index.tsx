import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export function ProtectRoutes(){
    const {products, loading} = useContext(AuthContext)

    if(loading){
        return null
    }

    return products[0].id !== 0 ? <Outlet/> : <Navigate to="/"/>
}