import {styled} from "styled-components";
import {ERRORS} from "../../globals";

const Container = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  font-weight: 500;
  padding: 1px;
  border-radius: 8px;
  margin: auto;
  margin-top: 20px;
`;

export const Error = ({show}: {show: boolean}) => {
  return show ? (
    <Container>
      <p>{ERRORS.GENERIC}</p>
    </Container>
  ) : (
    <></>
  );
};
