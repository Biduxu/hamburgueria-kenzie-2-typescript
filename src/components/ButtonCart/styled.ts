import styled from "styled-components";

export const StyledButtonCart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: transparent;
    background-color: var(--color-grey-0);
    position: relative;

    div{
        display: flex;
    }

    div h4{
        padding: 12px 5px;
        background-color: var(--color-primary);
        width: 18px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 7px;
        color: #ffffff;
        position: absolute;
        right: -5px;
        top: -15px;
    }
`