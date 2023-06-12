import * as S from "./Search.style";
import {Loader} from "../../components/Loader/Loader";
import {Error} from "../../components/Error/Error";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {SearchForm} from "../../components/SearchForm/SearchForm";

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [clearInput, setClearInput] = useState(false);

  const params = useParams();

  useEffect(() => {
    params.keyword && setKeyword(params.keyword);
  }, [params]);

  return (
    <S.SearchContainer>
      <Loader show={false} />
      <S.SearchHeader>
        <h2>Github Search</h2>
        <SearchForm searchAction={setKeyword} clearInput={clearInput} />
      </S.SearchHeader>

      <S.SearchBody>
        <Error show={false} />
      </S.SearchBody>
    </S.SearchContainer>
  );
};
