import {FormEvent, useEffect, useState} from "react";
import * as S from "./SearchForm.style";

type Props = {
  clearInput: boolean;
  searchAction: (keyword: string) => void;
};

export const SearchForm = ({clearInput, searchAction}: Props) => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("user");

  useEffect(() => {
    clearInput && setKeyword("");
  }, [clearInput]);

  const submitAction = (e: FormEvent) => {
    e.preventDefault();

    if (keyword.length > 0) {
      const searchKeyword =
        category === "org" ? `${keyword}+type:org` : keyword;
      searchAction(searchKeyword);
    }
  };

  const isChecked = (value: string) => value === category || undefined;

  return (
    <S.FormContainer onSubmit={(e) => submitAction(e)}>
      <div>
        <S.SearchInput
          type="text"
          aria-label="keyword"
          id="search-keyword"
          placeholder="Search for users and organizations"
          required
          onChange={(e) => setKeyword(e.currentTarget.value)}
          value={keyword}
        />
        <S.Button type="submit">Search</S.Button>
      </div>

      <S.SearchCategory>
        <S.InputWrapper>
          <input
            type="radio"
            value="user"
            name="search-category"
            id="search-user"
            onChange={() => setCategory("user")}
            checked={isChecked("user")}
          />
          <label htmlFor="search-user">User</label>
        </S.InputWrapper>
        <S.InputWrapper>
          <input
            type="radio"
            value="org"
            id="search-org"
            name="search-category"
            onChange={() => setCategory("org")}
            checked={isChecked("org")}
          />
          <label htmlFor="search-org">Organization</label>
        </S.InputWrapper>
      </S.SearchCategory>
    </S.FormContainer>
  );
};
