import styled from "styled-components";

export const StyledListProducts = styled.ul`
    margin: 0 auto;
    max-width: 1370px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 56.6px;

    @media(max-width: 550px){
        flex-wrap: nowrap;
        overflow-x: scroll;
    }
`