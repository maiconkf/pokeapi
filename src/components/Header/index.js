import React from 'react';
import {Link} from 'react-router-dom';
import Container from '../Container';
import {Content, Logo} from './style';

function Header({color}) {
  return (
    <Content color={color}>
      <Container>
        <Link to="/">
          <Logo>Pokedex</Logo>
        </Link>
      </Container>
    </Content>
  );
}

export default Header;
