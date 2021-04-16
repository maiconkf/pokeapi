import React, {useEffect, useState} from 'react';
import {Row, Col} from 'react-simple-flex-grid';
import {useLocation} from 'react-router-dom';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import {Title, Image, Text} from './style';
import PokemonType from '../../components/PokemonType';
import Stats from '../../components/Stats/indec';
import Error from '../../components/Error';

function PokemonDetails() {
  const location = useLocation();
  const [error, setError] = useState({
    isError: false,
    msg: '',
  });
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const {pathname} = location;
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pathname.replace('/', '')}`
      )
        .then((res) => res.json())
        .catch(() => {
          setError({isError: true, msg: 'Pokémon not found'});
        });

      setDetails(data);
    }

    getDetails();
  }, [location]);

  return (
    <>
      <Header
        color={
          details ? details.types[0].type.name : error.isError && 'primary'
        }
      />
      <Hero
        color={
          details ? details.types[0].type.name : error.isError && 'primary'
        }
      >
        {!error.isError && details && (
          <Container>
            <Title data-cy="name">{details.name}</Title>
          </Container>
        )}
      </Hero>
      {error.isError ? (
        <Container>
          <Error> {error.msg}</Error>
        </Container>
      ) : (
        details && (
          <>
            <Image align="middle">
              <img
                src={details.sprites.other['official-artwork'].front_default}
                alt={details.name}
                width="250"
                height="250"
                loading="lazy"
              />
              <Row gutter="10" align="middle" justify="center">
                {details.types.map(({slot, type}) => (
                  <Col>
                    <PokemonType key={slot} type={type.name} my="0">
                      {type.name}
                    </PokemonType>
                  </Col>
                ))}
              </Row>
              <Row gutter="20">
                <Text border="true">Weight: {details.weight / 10}kg</Text>
                <Text>Height: {details.height / 10}m</Text>
              </Row>
            </Image>
            <Container>
              <Row justify="center">
                <Col xs={12} md={10} lg={6}>
                  {details.stats.map((stat, idx) => (
                    <Row align="middle" gutter="16">
                      <Col xs={6} sm={4}>
                        <Row align="middle" justify="space-between">
                          <Text mt="0">{stat.stat.name.replace('-', ' ')}</Text>
                          <strong> {stat.base_stat}</strong>
                        </Row>
                      </Col>
                      <Col xs={6} sm={8}>
                        <Stats key={idx} percent={stat.base_stat} />
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
            </Container>
          </>
        )
      )}
    </>
  );
}

export default PokemonDetails;
