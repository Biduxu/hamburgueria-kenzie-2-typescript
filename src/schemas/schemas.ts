import * as yup from "yup"

export const formSchemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória").matches(/^.{6,}$/, "Senha precisa ter no mínimo 6 caracteres"),
    confirmPassword: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('password'), null], "Senha deve ser igual")
})

export const formSchemaLogin = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória")
})