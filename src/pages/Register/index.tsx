import { useContext } from 'react'
import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import { StyledRegister } from "./styled"
import { Form } from "../../styles/form"
import { Link } from "react-router-dom"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { BurguerKenzie } from "../../components/BurguerKenzie"
import { formSchemaRegister } from "../../schemas/schemas"
import { UserContext } from '../../contexts/UserContext'
import { Toastfy } from '../../components/Toastfy'

interface iRegisterFormData{
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

export function Register(){

    const {submitForm, statusToastfy} = useContext(UserContext)

    const {register, handleSubmit, formState: {errors}} = useForm<iRegisterFormData>({
        mode: "onBlur",
        resolver: yupResolver(formSchemaRegister),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    return (
        <StyledRegister>
            <BurguerKenzie/>
            <section className="sectionForm">
                <Form onSubmit={handleSubmit(submitForm)}>
                    <div className="divTitleLink">
                        <h3>Cadastro</h3>
                        <Link to={"/"} className="LinkToLogin">Retornar para o login</Link>
                    </div>
                    <div className="divInputError">
                        <Input type="text" placeholder="Nome" label="Nome" register={register} toRegister="name"/>
                        <p className="error">{errors.name?.message}</p>
                    </div>
                    <div className="divInputError">
                        <Input type="text" placeholder="Email" label="Email" register={register} toRegister="email"/>
                        <p className="error">{errors.email?.message}</p>
                    </div>
                    <div className="divInputError">
                        <Input type="password" placeholder="Senha" label="Senha" register={register} toRegister="password"/>
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    <div className="divInputError">
                        <Input type="password" placeholder="Confirmar Senha" label="Confirmar Senha" register={register} toRegister="confirmPassword"/>
                        <p className="error">{errors.confirmPassword?.message}</p>
                    </div>
                    <div>
                        <Button text="Cadastrar" type="submit" className="buttonRegister"/>
                    </div>
                </Form>
            </section>
            {statusToastfy === true ? (
                <Toastfy/>
            ):(
                null
            )}
        </StyledRegister>
    )
}