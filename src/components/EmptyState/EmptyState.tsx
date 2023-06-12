import {styled} from "styled-components";

const EmptyContainer = styled.div`
  text-align: center;
`;

export const EmptyState = () => {
  return (
    <EmptyContainer>
      <h4>No Result Found!</h4>
    </EmptyContainer>
  );
};
