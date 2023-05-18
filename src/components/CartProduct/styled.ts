import styled from "styled-components";

export const StyledCartProduct = styled.li`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-bottom: 18px;

    .imgProduct{
        background-color: var(--color-grey-100);
        max-width: 80px;
        max-height: 80px;
        border-radius: var(--radius-1);
    }

    .divContent{
        display: flex;
        gap: 10px;
    }

    .divTitleCounter{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .divTitleCounter h3{
        font-size: var(--size-3);
        font-weight: var(--weight-1);
        color: var(--color-grey-600);
    }

    .divAmount{
        background-color: var(--color-grey-100);
        width: fit-content;
        border: 2px solid var(--color-grey-100);
        display: flex;
        align-items: center;
    }

    .divAmount button{
        border: transparent;
        background-color: var(--color-grey-100);
        padding: 7px 11px;
        color: var(--color-secundary);
        font-size: var(--size-3);
    }

    .divAmount span{
        background-color: var(--color-grey-0);
        padding: 7px 17px;
    }

    .trashButton{
        border: transparent;
        background-color: var(--color-grey-0);
    }
    
`