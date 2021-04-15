import styled from '@emotion/styled';

export const InputComponent = styled.input`
  font-size: 0.9rem;
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid ${({theme}) => theme.colors.steel};
  border-radius: 8px;
  color: ${({theme}) => theme.colors.black};
  outline: none;
  transition: border-color 0.4s;

  &:focus {
    border-color: ${({theme}) => theme.colors.dark};
  }
`;
