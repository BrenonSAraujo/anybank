import styled from "styled-components";

export const Aside = styled.aside`
    background-color: #F5F5F5;
    border-radius: 8px;
    padding: 32px;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

interface ListItemProps {
    $active?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
    text-align: center;
    border-bottom: 1px solid;
    font-weight: ${props => props.$active ? '600' : '400'};
    padding-bottom: 16px;
`

export const Link = styled.a`
    color: inherit;
    font-weight: inherit;
    text-decoration: none;
`