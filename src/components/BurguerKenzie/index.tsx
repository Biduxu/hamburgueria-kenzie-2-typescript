import imgLogin from "./../../assets/img/image-login-1.svg"
import bagShopping from "./../../assets/img/shopping-bag.svg"
import { StyledBurguerKenzie } from "./styled"

export function BurguerKenzie(){
    return (
        <StyledBurguerKenzie>
            <h1>Burguer <span>Kenzie</span></h1>
            <div className="divImgParagraph">
                <div>
                    <img src={bagShopping} alt="" />
                </div>
                <p>A vida é um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </div>
            <img src={imgLogin} alt="" className="imgLogin"/>
        </StyledBurguerKenzie>
    )
}