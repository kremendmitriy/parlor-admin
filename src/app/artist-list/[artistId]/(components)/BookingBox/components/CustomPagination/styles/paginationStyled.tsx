import styled from '@emotion/styled';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  &:disabled {
    cursor: not-allowed;
  }
`;

export const PaginationText = styled.span`
  margin: 0 10px;
`;