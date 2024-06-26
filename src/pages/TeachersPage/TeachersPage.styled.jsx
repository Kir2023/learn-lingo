import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 12px;
  background-color: var(--button-background-color);
  text-align: center;
  display: block;
  margin: 64px auto 0;
  padding: 16px;
  width: 183px;
  border: none;
  color: #121417;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;

  &:hover,
  :focus {
    background-color: var(--active-button-background-color);
  }
`;
