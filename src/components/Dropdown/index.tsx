import styled from "styled-components";

export const Dropdown = styled.select`
width: 100%;
  padding: 10px 16px;
  font-size: 16px;
  border-radius: 16px;
  border: 2px solid #000;
  option[value=""] {
    color: #888;
  }

  &:invalid {
    color: #888;
  }
  option:not(:first-child) {
    color: #000;
  }
`