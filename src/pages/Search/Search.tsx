import {useEffect, useState} from "react";
import {ResultCard} from "../../components/ResultList/ResultList";
import {SearchForm} from "../../components/SearchForm/SearchForm";
import {useGetUsersQuery} from "../../queries/user.query";
import {User} from "../../models/User";
import * as S from "./Search.style";
import {Loader} from "../../components/Loader/Loader";
import {Error} from "../../components/Error/Error";
import {useParams} from "react-router-dom";

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [clearInput, setClearInput] = useState(false);
  const [results, setResults] = useState<User[]>([]);

  const params = useParams();
  const query = useGetUsersQuery(keyword);

  useEffect(() => {
    params.keyword && setKeyword(params.keyword);
  }, [params]);

  useEffect(() => {
    query.data && setResults(query.data as User[]);
    setClearInput(false);
  }, [query.data]);

  const clearResults = () => {
    setResults([]);
    setKeyword("");
    setClearInput(true);
  };

  return (
    <S.SearchContainer>
      <Loader show={query.isLoading} />
      <S.SearchHeader>
        <h2>Github Search</h2>
        <SearchForm searchAction={setKeyword} clearInput={clearInput} />
      </S.SearchHeader>

      <S.SearchBody>
        {query.isError ? (
          <Error show={query.isError} />
        ) : (
          <ResultCard results={results} clearResults={clearResults} />
        )}
      </S.SearchBody>
    </S.SearchContainer>
  );
};
