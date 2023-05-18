import { InputHTMLAttributes } from "react";

import { StyledInput } from "./styled";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string,
    type: string,
    label?: string,
    register: any,
    toRegister: string
}

export function Input ({placeholder, label, type, register, toRegister, ...rest}: iInputProps){
    return (
        <StyledInput>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} {...register(toRegister)}/>
        </StyledInput>
    )
}