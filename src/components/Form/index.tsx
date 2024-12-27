import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    width: 350px;
    max-width: 100%;
    figure {
        margin: 0;
        display: flex;
        justify-content: center;
    }
    img {
        margin: 0 auto;
        max-width: 330px;
    }
    h2 {
        margin: 32px 0;
        font-size: 20px;
        font-weight: 700;
    }
`

export const FormActions = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    margin: 0 auto;
    max-width: 330px;
`

export const Figure = styled.figure`
    margin: 0;
    display: flex;
    justify-content: center;
`

export const Heading = styled.h2`
    margin: 32px 0;
    font-size: 20px;
    font-weight: 700;
`

