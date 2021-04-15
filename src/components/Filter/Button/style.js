import styled from '@emotion/styled';

export const Btn = styled.button`
  background-color: ${({theme, color}) => theme.colors[color]};
  border: 1px solid transparent;
  padding: 0.9rem 1rem;
  color: ${({theme}) => theme.colors.white};
  font-weight: 700;
  border-radius: 8px;
  width: 100%;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  margin-top: ${({mt}) => mt || 0}px;
`;
