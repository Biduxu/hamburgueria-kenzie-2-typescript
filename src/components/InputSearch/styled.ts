import styled from "styled-components";

export const StyledInputSearch = styled.div`
    width: 365px;

    form{
        padding: 10px;
        border: 2px solid var(--color-grey-100);
        border-radius: var(--radius-1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
    }

    input{
        border: transparent;
        font-size: var(--size-4);
        padding: 10px 0;
        outline: none;
    }

    input::placeholder{
        color: var(--color-grey-100);
    }   

    form:hover{
        border: 2px solid var(--color-grey-600);
    }   

    button{
        padding: 12px 20px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: var(--radius-1);
    }

`