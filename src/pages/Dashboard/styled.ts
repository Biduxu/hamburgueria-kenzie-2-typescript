import styled from "styled-components";

export const StyledDashboard = styled.div`
    width: 100%;
    height: 100vh;

    main{
        width: 100%;
        padding: 32px 10px;
    }

    .divInfoSearch{
        margin: 0 auto;
        max-width: 1370px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;
    }

    .divInfoSearch h2{
        font-size: var(--size-2);
        font-weight: var(--weight-1);
        color: var(--color-grey-600);
    }

    .divInfoSearch button{
        padding: 15px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-1);
        color: var(--color-grey-0);
        font-size: var(--size-4);
        font-weight: var(--weight-3);
    }

    .divInfoSearch button:hover{
        background-color: var(--color-primary-50);
        border: 1px solid var(--color-primary-50);
    }

    @media(max-width: 550px){
        max-width: 530px;

        .inputSearchDiv{
            width: 100%;
            background-color: var(--color-grey-0);
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            bottom: 0;
        }
    }    
`