import styled from "styled-components";

export const StylesHeader = styled.header`
    background-color:${({theme}) => theme.colors.header};
    padding: 40px 0;
    h1 {
        color:white;
    }

`

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:40px;
`

export const Logo = styled.img`

`
