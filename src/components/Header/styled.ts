import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    padding: 10px;
    background-color: var(--color-grey-0);

    .divHeader{
        max-width: 1370px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .divHeader h1{
        color: var(--color-grey-600);
        font-size: var(--size-1);
        font-weight: var(--weight-1);
    }

    .divHeader span{
        color: var(--color-secundary);
        font-size: var(--size-3);
    }

    .divButtons{
        display: flex;
        align-items: center;
        gap: 25px;
    }

    .buttonExit{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .searchMobile button{
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        display: none;
    }

    @media (max-width: 550px){
        padding: 25px 10px;

        .searchMobile button{
            display: block;
        }

        .searchDesktop{
            display: none;
        }
    }

`