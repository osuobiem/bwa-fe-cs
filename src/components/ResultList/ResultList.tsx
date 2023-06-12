import {useState} from "react";
import * as S from "./ResultList.style";
import {EmptyState} from "../EmptyState/EmptyState";
import {User} from "../../models/User";

type Props = {
  results: User[];
  clearResults: () => void;
};

export const ResultCard = ({results, clearResults}: Props) => {
  const [view, setView] = useState("grid");
  const viewProfile = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <S.Container>
      {results.length > 0 ? (
        <>
          <S.ActionsContainer view={view}>
            <div>
              <S.GridIcon view={view} onClick={() => setView("grid")} />
              <S.ListIcon view={view} onClick={() => setView("list")} />
            </div>
            <button onClick={clearResults}>Clear</button>
          </S.ActionsContainer>

          <S.ResultsContainer>
            {results.map((result, i) => (
              <S.Result key={i} view={view}>
                <div>
                  <img src={result.avatarUrl} alt={result.username} />
                  <a href={result.profileUrl} target="_blank">
                    {result.username}
                  </a>
                </div>
                <button onClick={() => viewProfile(result.profileUrl)}>
                  View profile
                </button>
              </S.Result>
            ))}
          </S.ResultsContainer>
        </>
      ) : (
        <EmptyState />
      )}
    </S.Container>
  );
};
