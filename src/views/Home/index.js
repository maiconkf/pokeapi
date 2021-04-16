import List from '../../components/List';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Container from '../../components/Container';
import Filter from '../../components/Filter';
import {useCallback, useContext, useEffect, useState} from 'react';
import {AppContext} from '../../context/app-context';
import {Row, Col} from 'react-simple-flex-grid';
import Button from '../../components/Filter/Button';
import {Redirect, useLocation} from 'react-router-dom';
import {GoBack} from './style';

function Home(props) {
  const location = useLocation();
  const {dispatch, state} = useContext(AppContext);
  const {arrPokemon, search} = state;
  const [redirect, setRedirect] = useState(false);
  const [list, setList] = useState(null);
  const [pagination, setPagination] = useState(null);

  const getAllPokemon = useCallback(
    async (search) => {
      const api = 'https://pokeapi.co/api/v2/pokemon';
      const url = `${
        pagination
          ? pagination
          : search
          ? `${api}/${search}`
          : `${api}?limit=24&offset=0`
      }`;

      const data = await fetch(url).then((res) => res.json());
      setList(data);

      if (!search) {
        setRedirect(false);
        const {results} = data;

        const arrPokemon = results.map(
          async (response) =>
            await fetch(response.url).then((res) => res.json())
        );

        await Promise.all(arrPokemon).then((results) =>
          dispatch({type: 'setPokemon', arrPokemon: results})
        );
      } else {
        dispatch({type: 'setPokemon', arrPokemon: [data], search: true});
      }
    },
    [dispatch, pagination]
  );

  useEffect(() => {
    // console;
    const search = location.search.split('=')[1];

    if (search) {
      getAllPokemon(search);
    } else {
      getAllPokemon();
    }
  }, [getAllPokemon, location.search]);

  function handleLoader() {
    setPagination(list.next);
  }

  function handleGoBack() {
    dispatch({type: 'setClearPokemonArray'});

    setRedirect(true);
  }

  if (redirect) return <Redirect to={{pathname: '/'}} />;

  return (
    <>
      <Header color="primary" />
      <Hero color="primary">
        <Container>
          <Filter />
        </Container>
      </Hero>

      {arrPokemon.length > 0 && (
        <Container>
          {arrPokemon.map((item) => (
            <List data={item} />
          ))}
          {!search ? (
            <Row justify="center">
              <Col sm={3} lg={2}>
                <Button color="primary" onClick={handleLoader} mt={40}>
                  Load more Pokémon
                </Button>
              </Col>
            </Row>
          ) : (
            <GoBack onClick={handleGoBack}>← Go back</GoBack>
          )}
        </Container>
      )}
    </>
  );
}

export default Home;
