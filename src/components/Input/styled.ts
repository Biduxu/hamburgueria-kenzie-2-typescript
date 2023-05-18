import styled from "styled-components";

export const StyledInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;

    label{
        color: var(--color-grey-50);
        font-size: var(--size-6);
        font-weight: var(--weight-4);
        background-color: #ffffff;
        position: absolute;
        top: -7px;
        left: 9px;
        z-index: 2;
    }

    input{
        padding: 20.5px 15px;
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        font-size: var(--size-4);
        color: var(--color-grey-600);
    }

    input::placeholder{
        color: var(--color-grey-50);
    }
`