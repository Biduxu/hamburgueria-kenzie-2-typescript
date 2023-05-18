import styled from "styled-components";

export const StyledToastfy = styled.div`
    position: fixed;
    width: 286px;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-100);
    border-radius: var(--radius-1);
    animation: toastIt 10000ms ease-in forwards;

    @keyframes toastIt {
    0%     {right: 30px; top: -200px}
    12%    {right: 30px; top: 28px}
    50%    {right: 30px; top: 28px}
    75%    {right: 30px; top: 28px}
    100%   {right: 30px; top: 28px}
    }

    .divPositive{
        padding: 10px;
        background-color: var(--color-primary);
        border-radius: 50%;
    }

    .divNegative{
        padding: 10px 15px;
        background-color: var(--color-negative);
        border-radius: 50%;
        display: flex;
        align-items: center;
    }

    h4{
        color: var(--color-grey-600);
        font-size: var(--size-4);
        font-weight: var(--weight-2);
    }

    .divLink{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 3px;
    }

    .linkLogin{
        font-size: var(--size-6);
        font-weight: var(--weight-4);
        color: var(--color-secundary);
        cursor: pointer;
    }
`