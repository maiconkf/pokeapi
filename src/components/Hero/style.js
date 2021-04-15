import styled from '@emotion/styled';

export const Content = styled.div`
  background-color: ${({theme, color}) => theme.colors[color]};
  width: 100%;
  padding: 3rem 0 5rem;
  margin-bottom: -2.5rem;
`;
