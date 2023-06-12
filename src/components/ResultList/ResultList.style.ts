import {styled} from "styled-components";
import {Grid, List} from "react-feather";

export const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 20px;

  @media (max-width: 1200px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ActionsContainer = styled.div<{view: string}>`
  display: flex;
  justify-content: space-between;

  @media (max-width: 640px) {
    height: 26px;
  }

  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  & > button {
    border-radius: 4px;
    font-weight: 600;
    background-color: #e01e1e;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    font-size: 14px;
    border: none;

    &:hover {
      background-color: #af0505;
    }
  }

  & svg {
    width: 16px;
    padding: 1px 5px;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s;

    @media (max-width: 640px) {
      display: none;
    }
  }
`;

export const GridIcon = styled(Grid)<{view: string}>`
  background-color: ${(props) =>
    props.view === "grid" ? "#2477de" : "transparent"};
  color: ${(props) => (props.view === "grid" ? "#fff" : "#02001f")};
`;

export const ListIcon = styled(List)<{view: string}>`
  background-color: ${(props) =>
    props.view === "list" ? "#2477de" : "transparent"};
  color: ${(props) => (props.view === "list" ? "#fff" : "#02001f")};
`;

export const ResultsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  word-break: break-all;
`;

export const Result = styled.div<{view: string}>`
  border: solid 1px #02001f4c;
  border-radius: 8px;
  background-color: #fff;
  padding: 8px;
  width: ${(props) => (props.view === "grid" ? "28%" : "100%")};
  transition: ease-in-out 0.3s;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: ${(props) => (props.view === "grid" ? "45%" : "100%")};
  }

  @media (max-width: 640px) {
    width: 100%;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & img {
    border-radius: 100%;
    width: 25px;
    height: 25px;
  }

  & a {
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    color: ${(props) => (props.view === "grid" ? "#0551af" : "#02001f")};

    @media (max-width: 640px) {
      color: #02001f;
    }

    &:hover {
      color: #0551af;
      text-decoration: underline;
    }
  }

  & button {
    border-radius: 4px;
    font-weight: 600;
    background-color: #2477de;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    border: none;
    display: ${(props) => (props.view === "grid" ? "none" : "block")};

    @media (max-width: 640px) {
      display: block;
    }

    &:hover {
      background-color: #0551af;
    }
  }
`;
