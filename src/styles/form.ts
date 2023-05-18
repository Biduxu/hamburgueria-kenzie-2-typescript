import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 19px;

    h3{
        color: var(--color-grey-600);
        font-size: var(--size-3);
        font-weight: var(--weight-1);
    }

    .buttonLogin{
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        color: #ffffff;
    }

    .buttonLogin:hover{
        background-color: var(--color-primary-50);
        border: 1px solid var(--color-primary-50);
    }

    .divTitleLink{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .LinkToLogin{
        color: var(--color-grey-300);
        font-size: var(--size-5);
        font-weight: var(--weight-3);
        text-decoration: underline;
    }

    .LinkToLogin:hover{
        color: var(--color-grey-600);
    }

    .buttonRegister{
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        color: var(--color-grey-300);
    }

    .buttonRegister:hover{
        background-color: var(--color-grey-300);
        border: 1px solid var(--color-grey-300);
        color: var(--color-grey-100);
    }

    .divInputError{
        display: flex;
        flex-direction: column;
        gap: 9px;
    }

    .error{
        color: var(--color-negative);
        font-size: var(--size-6);
        font-weight: var(--weight-4);
    }

`