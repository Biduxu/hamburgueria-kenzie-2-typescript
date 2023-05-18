import styled from "styled-components";

export const StyledCardProduct = styled.li`
    display: flex;
    flex-direction: column;
    border: 2px solid var(--color-grey-0);
    border-radius: var(--radius-1);

    img{
        background-color: var(--color-grey-0);
        height: 150px;
        width: 296px;
        object-fit: contain;
    }

    div{
        padding: 23px 21px;
        display: flex;
        flex-direction: column;
        gap: 13px;
    }

    h3{
        color: var(--color-grey-600);
        font-size: var(--size-3);
        font-weight: var(--weight-1);
    }

    span{
        color: var(--color-grey-300);
        font-size: var(--size-6);
        font-weight: var(--weight-4);
    }

    p{
        color: var(--color-primary);
        font-size: var(--size-5);
        font-weight: var(--weight-2);
    }

    button{
        background-color: var(--color-primary);
        padding: 11.5px 20px;
        max-width: 106px;
        border: 2px solid var(--color-primary);
        border-radius: var(--radius-1);
        color: white;
        font-size: var(--size-5);
        font-weight: var(--weight-2);
    }

    button:hover{
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
    }
`