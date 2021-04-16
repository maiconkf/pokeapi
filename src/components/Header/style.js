import styled from '@emotion/styled';

export const Content = styled.header`
  padding: 10px 0;
  background-color: ${({theme, color}) => theme.colors[color]};
  width: 100%;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.white};
`;
