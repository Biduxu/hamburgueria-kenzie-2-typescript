import {useContext} from "react"

import { ButtonCart } from "../ButtonCart";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styled";

import imageExit from "./../../assets/img/exit.png"
import buttonSearch from "./../../assets/img/lupDark.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

interface iHeaderProps{
    inputMobile: boolean,
    setInputMobile: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({inputMobile, setInputMobile}: iHeaderProps){

    const {setLogin} = useContext(AuthContext)

    function logout(){
        localStorage.removeItem("@burguerKenzie:token")
        setLogin(false)
    }

    function openInputSearchMobile(){
        if(inputMobile === false){
            setInputMobile(true)
        }else{
            setInputMobile(false)
        }
    }

    return (
        <StyledHeader>
            <div className="divHeader">
                <h1>Burguer <span>Kenzie</span></h1>
                <div className="divButtons">
                    <div className="searchMobile">
                        <button type="button" onClick={()=>{openInputSearchMobile()}}><img src={buttonSearch} alt="" /></button>
                    </div>
                    <div className="searchDesktop">
                        <InputSearch/>
                    </div>
                    <ButtonCart/>
                    <Link to={"/"} onClick={logout} className="buttonExit"><img src={imageExit} alt="" /></Link>
                </div>
            </div>
        </StyledHeader>
    )
}