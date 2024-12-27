import styled from "styled-components";

export const Heading = styled.h2`
  font-weight: 500;
  font-size: 25px;
  margin: 0;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: baseline;
  width: 300px;
  fieldset {
    border: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`