import {useContext} from "react"
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import { StyledToastfy } from "./styled";
import imgNegative from "./../../assets/img/exclamation.svg"
import imgPositive from "./../../assets/img/positive.svg"

export function Toastfy(){

    const {infoToastfy, setStatusToastfy} = useContext(UserContext)

    function resetStatusToastfy(){
        setStatusToastfy(false)
    }

    return (
        <StyledToastfy>
            {infoToastfy === "Conta criada com sucesso!" ?(
                <>   
                    <div className="divPositive">
                        <img src={imgPositive} alt=""/>
                    </div>
                    <div className="divLink">
                        <h4>{infoToastfy}</h4>
                        <Link to={"/"} className="linkLogin" onClick={()=>{resetStatusToastfy()}}>Acessar login</Link>
                    </div>
                </> 
            ):(
                <>
                    <div className="divNegative">
                        <img src={imgNegative} alt=""/>
                    </div>
                    <div className="divLink">
                        <h4>{infoToastfy}</h4>
                        <span className="linkLogin" onClick={()=>{resetStatusToastfy()}}>Refazer cadastro</span>
                    </div>
                </>
            )}
        </StyledToastfy>
    )
}