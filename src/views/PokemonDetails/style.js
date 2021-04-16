import styled from '@emotion/styled';
import {Row} from 'react-simple-flex-grid';

export const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: ${({theme}) => theme.colors.white};
  text-transform: capitalize;
`;

export const Image = styled(Row)`
  position: relative;
  top: -4rem;
  flex-direction: column;

  img {
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  margin-top: ${({mt}) => mt || 10}px;
  text-transform: capitalize;

  border-right: ${({border, theme}) =>
    border ? `1px solid ${theme.colors.steel}` : 0} }
`;
