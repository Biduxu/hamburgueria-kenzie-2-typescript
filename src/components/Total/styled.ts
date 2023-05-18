import styled from "styled-components";

export const StyledTotal = styled.div`
    padding: 0px 22px;
    
    .divTotalContent{
        width: 100%;
        padding: 15px 0;
        border-top: 3px solid var(--color-grey-100);
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .divTotalContent div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    p{
        font-size: var(--size-5);
        font-weight: var(--weight-2);
        color: var(--color-grey-600);
    }

    span{
        font-size: var(--size-5);
        font-weight: var(--weight-2);
        color: var(--color-grey-300);
    }

    .removeAllProducts{
        border: 1px solid var(--color-grey-100);
        background-color: var(--color-grey-100);
        color: var(--color-grey-300);
        padding: 20.5px;
        border-radius: var(--radius-1);
        font-size: var(--size-4);
        font-weight: var(--weight-2);
    }

    .removeAllProducts:hover{
        border: 1px solid var(--color-grey-300);
        background-color: var(--color-grey-300);
        color: var(--color-grey-600);
    }
`