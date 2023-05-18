import styled from "styled-components";

export const StyledLogin = styled.div`
    margin: 0 auto;
    max-width: 1023px;
    padding: 98px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .sectionForm{
        width: 48.8%;
        padding: 26px 24px;
        display: flex;
        flex-direction: column;
        gap: 19px;
        border: 2px solid var(--color-grey-0);
        border-radius: var(--radius-1);
    }

    .divLoginToRegister{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 19px;
    }

    .divLoginToRegister span{
        max-width: 327px;
        font-size: var(--size-5);
        color: var(--color-grey-50);
        font-weight: var(--weight-4);
        line-height: 18px;
        text-align: center;
    }

    .linkToRegister{
        width: 100%;
        padding: 20.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-grey-0);
        border: 1px solid var(--color-grey-0);
        border-radius: var(--radius-1);
        color: var(--color-grey-50);
        font-size: var(--size-4);
        font-weight: var(--weight-2);
    }

    .linkToRegister:hover{
        background-color: var(--color-grey-300);
        border: 1px solid var(--color-grey-300);
        color: var(--color-grey-100);
    }

    @media (max-width: 550px){
        flex-direction: column-reverse;
        padding: 35px 10px;
        max-width: 530px;
        gap: 14px;

        .sectionForm{
            width: 100%;
        }
    }
`