import {styled} from "styled-components";
import loader from "../../assets/loader.svg";

const Container = styled.div`
  background-color: #fff;
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;

  & > img {
    width: 100px;
  }
`;

export const Loader = ({show}: {show: boolean}) => {
  return show ? (
    <Container>
      <img src={loader} alt="Loader" />
    </Container>
  ) : (
    <></>
  );
};
