import * as S from "./Search.style";
import {Loader} from "../../components/Loader/Loader";
import {Error} from "../../components/Error/Error";

export const Search = () => {
  return (
    <S.SearchContainer>
      <Loader show={false} />
      <S.SearchHeader>
        <h2>Github Search</h2>
      </S.SearchHeader>

      <S.SearchBody>
        <Error show={true} />
      </S.SearchBody>
    </S.SearchContainer>
  );
};
