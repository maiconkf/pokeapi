import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import {useContext, useEffect, useState} from 'react';
import {AppContext} from '../../context/app-context';
import {Redirect} from 'react-router-dom';
import {getLocal} from '../../utils';
import Card from '../../components/Card';
import {Row, Col} from 'react-simple-flex-grid';

function Favorites() {
  const {dispatch, state} = useContext(AppContext);
  const {favs} = state;
  const [redirect, setRedirect] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    async function getAllPokemon() {
      const arrFavs = getLocal();
      setList([]);

      arrFavs.map(async (fav) => {
        const data = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${fav}`
        ).then((res) => res.json());

        setList((prevState) => [...prevState, data]);
      });

      setRedirect(arrFavs.length <= 0);
    }

    getAllPokemon();
  }, [dispatch, favs]);

  if (redirect) return <Redirect to={{pathname: '/'}} />;

  return (
    <>
      <Header color="primary" />
      <Hero color="primary">
        <Container>
          <Filter />
        </Container>
      </Hero>
      <Container>
        {list.length > 0 && (
          <Row gutter="14" align="middle">
            {list.map((item, idx) => (
              <Col key={idx} xs={12} sm={6} lg={4}>
                <Card key={idx} data={item} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default Favorites;
