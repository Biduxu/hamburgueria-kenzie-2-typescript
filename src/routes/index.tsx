
import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { CartProvider } from "../contexts/CartContext";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";


export function RoutesMain(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<ProtectRoutes/>}>
                <Route path="/dashboard" element={<CartProvider><Dashboard/></CartProvider>}/>
            </Route>
        </Routes>
    )
}