import { ButtonHTMLAttributes } from "react";

import { StyledButton } from "./styled";

interface iButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string
}


export function Button({text, className}: iButton){
    return (
        <StyledButton className={className}>
            {text}
        </StyledButton>
    )
}