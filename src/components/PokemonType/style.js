import styled from '@emotion/styled';

export const Type = styled.p`
  background-color: ${({type, theme}) => theme.colors[type]};
  padding: 3px 10px;
  border-radius: 50px;
  margin: ${({my}) => my || 5}px 0;
  color: #fff;
  font-weight: 500;
  display: inline-block;
  text-transform: capitalize;

  &:first-of-type {
    margin: ${({my}) => my || 15}px 0 0;
  }
`;
