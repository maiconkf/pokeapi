import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'react-simple-flex-grid';
import {AppContext} from '../../context/app-context';
import {getLocal} from '../../utils';
import Container from '../Container';
import {Content, Logo} from './style';

function Header({color}) {
  const {state} = useContext(AppContext);
  const {favs} = state;
  const [hasFavorites, setHasFavorites] = useState(false);

  useEffect(() => {
    const item = getLocal();

    if (!item) return;

    if (item.length) {
      setHasFavorites(true);
    } else {
      setHasFavorites(false);
    }
  }, [favs]);

  return (
    <Content color={color}>
      <Container>
        <Row justify="space-between">
          <Link to="/">
            <Logo>Pokédex</Logo>
          </Link>
          {hasFavorites && (
            <Link to="/favorites">
              <Logo>Favorites</Logo>
            </Link>
          )}
        </Row>
      </Container>
    </Content>
  );
}

export default Header;
