import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
import {Row} from 'react-simple-flex-grid';

export const Item = styled(Link)`
  background-color: ${({theme}) => theme.colors.white};
  padding: 30px;
  border-radius: 8px;
  flex: 1;
  height: 280px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 3%);
  margin: 7px 0;
  text-transform: capitalize;
  display: block;
  color: ${({theme}) => theme.colors.black};
`;

export const Number = styled.p`
  font-size: 1.35rem;
  opacity: 0.5;
  width: 100%;
  text-align: right;
  margin-bottom: 2rem;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
`;

export const Left = styled(Row)`
  flex-direction: column;
`;

export const Right = styled(Left)`
  flex: 1;
`;

export const Image = styled.img`
  align-self: flex-end;
`;
