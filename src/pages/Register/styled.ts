import styled from "styled-components";

export const StyledRegister = styled.div`
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

    @media (max-width: 550px){
        flex-direction: column;
        padding: 35px 10px;
        max-width: 530px;
        gap: 14px;

        .sectionForm{
            width: 100%;
        }
    }
`