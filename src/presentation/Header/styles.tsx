import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #000;
    width: 100%;
    padding: 30px 0;
`

export const Container = styled.section`
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    ul:last-child {
        justify-content: flex-end;
    }
`

export const List = styled.ul`
    width: 100%;
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 40px;
`

export const ListItem = styled.li`
    font-size: 18px;
    color: #CBCBCB;
    display: flex;
    align-items: center;
    white-space: nowrap;
`

