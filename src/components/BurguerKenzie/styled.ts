import styled from "styled-components";

export const StyledBurguerKenzie = styled.section`
    width: 36.8%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;

    h1{
        color: var(--color-grey-600);
        font-size: var(--size-0);
        font-weight: var(--weight-1);
    }

    h1 span{
        color: var(--color-secundary);
        font-size: var(--size-2);
    }

    .divImgParagraph{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px solid var(--color-grey-100);
        border-radius: var(--radius-1);
        padding: 16px 14px;
    }

    .divImgParagraph div{
        background-color: rgba(39, 174, 96, 0.1);
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-1);
    }

    .divImgParagraph p{
        width: 74%;
        font-size: var(--size-5);
        font-weight: var(--weight-4);
        line-height: 22px;
        color: var(--color-grey-300);
    }

    .divImgParagraph span{
        color: var(--color-grey-600);
        font-weight: var(--weight-3);
    }

    .imgLogin{
        height: 79px;
    }

    @media (max-width: 550px){
        width: 100%;

        .imgLogin{
            display: none;
        }
    }
`