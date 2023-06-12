import {styled} from "styled-components";

export const SearchContainer = styled.div`
  text-align: center;
  position: relative;
`;

export const SearchHeader = styled.div`
  position: sticky;
  top: 0px;
  background: linear-gradient(0deg, #fefeff 50%, #a2c9ff 100%);
  padding: 25px 15px 15px 15px;
  box-shadow: 0 1px 9px #d5d5d5;

  & > h2 {
    margin-top: 0;
  }
`;

export const SearchBody = styled.div`
  padding: 0 15px 15px 15px;
`;
