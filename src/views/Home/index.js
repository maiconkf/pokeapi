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
import Error from '../../components/Error';

function Home(props) {
  const location = useLocation();
  const {dispatch, state} = useContext(AppContext);
  const {arrPokemon, search} = state;
  const [redirect, setRedirect] = useState(false);
  const [list, setList] = useState(null);
  const [error, setError] = useState({
    isError: false,
    msg: '',
  });
  const [pagination, setPagination] = useState(null);

  const getAllPokemon = useCallback(
    async (search) => {
      const api = 'https://pokeapi.co/api/v2/pokemon';
      const url = `${
        pagination
          ? pagination
          : search
          ? `${api}/${search.toLowerCase()}`
          : `${api}?limit=24&offset=0`
      }`;

      const data = await fetch(url)
        .then((res) => res.json())
        .catch(() => setError({isError: true, msg: 'Pokémon not found'}));
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
    dispatch({type: 'setClearPokemonArray'});
  }, [dispatch]);

  useEffect(() => {
    const search = location.search.split('=')[1];
    getAllPokemon(search);
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
      <Container>
        {error.isError ? (
          <Error>{error.msg}</Error>
        ) : (
          arrPokemon.length > 0 && (
            <>
              {arrPokemon.map((item, idx) => (
                <List key={idx} data={item} />
              ))}
              {!search ? (
                <Row justify="center">
                  <Col sm={3} lg={2}>
                    <Button
                      color="primary"
                      onClick={handleLoader}
                      mt={40}
                      data-cy="load-more"
                    >
                      Load more Pokémon
                    </Button>
                  </Col>
                </Row>
              ) : (
                <GoBack onClick={handleGoBack} data-cy="go-back">
                  ← Go back
                </GoBack>
              )}
            </>
          )
        )}
      </Container>
    </>
  );
}

export default Home;
