import {styled} from "styled-components";

export const SearchAreaContainer = styled.div``;

export const FormContainer = styled.form`
  display: table;
  margin: auto;
  width: 40%;

  @media (max-width: 1200px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  & > div:first-child {
    height: 35px;
    display: flex;
    align-items: center;
  }

  & > div:last-child {
    display: flex;
    margin-top: 10px;
  }
`;

export const InputWrapper = styled.div`
  margin-right: 10px;
  & > label {
    font-weight: 500;
    cursor: pointer;
  }
`;

export const SearchCategory = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  border-radius: 8px 0 0 8px;
  border: solid 1px #02001f4c;
  border-right: none;
  width: 100%;
  font-size: 16px;
  padding: 2px 12px;
  height: 100%;

  &:focus,
  &:focus-visible {
    outline: none;
    border-color: #2477de;
  }
`;

export const Button = styled.button`
  border: solid 1px #2477de;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  font-weight: 600;
  padding: 11.5px 15px;
  background-color: #2477de;
  color: #fff;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #0551af;
  }
`;
