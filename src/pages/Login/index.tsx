import { useContext } from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import { StyledLogin } from "./styled"
import { Form } from "../../styles/form"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"
import { BurguerKenzie } from "../../components/BurguerKenzie"
import { formSchemaLogin } from "../../schemas/schemas"
import { UserContext } from '../../contexts/UserContext'

interface iLoginFormData{
    email: string,
    password: string
}

export function Login(){

    const {submitForm, messageError} = useContext(UserContext)

    const {register, handleSubmit, formState: {errors}} = useForm<iLoginFormData>({
        mode: "onBlur",
        resolver: yupResolver(formSchemaLogin),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    return(
        <StyledLogin>
            <section className="sectionForm">
                <Form onSubmit={handleSubmit(submitForm)}>
                    <h3>Login</h3>
                    <div className="divInputError">
                        <Input type="text" placeholder="Email" label="Email" register={register} toRegister="email"/>
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="divInputError">
                        <Input type="password" placeholder="Senha" label="Senha" register={register} toRegister="password"/>
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    {messageError === true ? (
                        <p className="error">Email ou senha inválidos</p>
                    ):(
                        null
                    )}
                    <div>
                        <Button text="Logar" type="submit" className="buttonLogin"/>
                    </div>
                </Form>
                <div className="divLoginToRegister">
                    <span>
                        Crie sua conta para saborear muitas delícias e matar sua fome!
                    </span>
                    <Link to={"/register"} className="linkToRegister">
                        Cadastrar
                    </Link>
                </div>
            </section>
            <BurguerKenzie/>
        </StyledLogin>
    )
}