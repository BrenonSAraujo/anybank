import styled from "styled-components";

export const Card = styled.section`
    background: linear-gradient(180deg, #FFFFFF 0%, #6BD1FF 100%);
    border-radius: 8px;
    width: 100%;
    padding: 40px 48px;
    display: flex;
    justify-content: space-between;
`

export const Heading = styled.h2`
    margin: 0;
    font-weight: 600;
`

export const DateWrapper = styled.p`
    text-transform: capitalize;
    margin: 0;
    font-size: 13px;
`

export const GreetingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`