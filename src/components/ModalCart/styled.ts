import styled from "styled-components";

export const StyledModalCart = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;

    .divModal{
        background-color: var(--color-grey-0);
        width: 38%;
        border-radius: var(--radius-1);
        position: absolute;
        top: 100px;
    }

    .divHeader{
        width: 100%;
        padding: 13px 22px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 5px 5px 0 0;
    }

    .divHeader h2{
        font-size: var(--size-3);
        font-weight: var(--weight-1);
        color: #ffffff;
    }

    .divHeader button{
        background-color: var(--color-primary);
        border: transparent;
        font-size: var(--size-4);
        color: var(--color-grey-0);
        font-weight: var(--weight-2);
    }

    .divHeader button:hover{
        color: var(--color-grey-100);
    }

    .divEmptyCart{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    .divEmptyCart h3{
        font-size: var(--size-3);
        font-weight: var(--weight-1);
        color: var(--color-grey-600);
    }

    .divEmptyCart p{
        font-size: var(--size-5);
        font-weight: var(--weight-4);
        color: var(--color-grey-300);
    }

    .listCartProducts{
        padding: 20px 22px;
        max-height: 400px;
        overflow-y: scroll;
    }


    @media(max-width: 800px){
        .divModal{
            width: 90%;
        }
    }

`