import React, {useContext, useEffect, useState} from 'react';
import {Row} from 'react-simple-flex-grid';
import {AppContext} from '../../context/app-context';
import {getFavorites, getLocal} from '../../utils';
import PokemonType from '../PokemonType';
import {Item, Number, Name, Left, Right, Image, Fav} from './style';

function Card({data}) {
  const {dispatch, state} = useContext(AppContext);
  const [favorites, setFavorites] = useState(false);

  function handleFavorite(e, id) {
    e.stopPropagation();
    e.preventDefault();

    const {favs, arrLocal} = getFavorites(id);

    setFavorites(favs);
    dispatch({type: 'setFavs', favs: arrLocal});
  }

  useEffect(() => {
    const getFavs = getLocal();

    if (getFavs && getFavs.includes(data.id)) {
      setFavorites(true);
    }
  }, [data, state.favs]);

  return (
    <Item to={data.name} data-cy="card">
      <Row justify="space-between">
        <Left>
          <Name>{data.name}</Name>
          {data.types.map(({type, slot}) => (
            <PokemonType key={slot} type={type.name}>
              {type.name}
            </PokemonType>
          ))}
          {favorites ? (
            <Fav
              onClick={(e) => handleFavorite(e, data.id)}
              className="fav--remove"
            >
              - Remove from favorites
            </Fav>
          ) : (
            <Fav onClick={(e) => handleFavorite(e, data.id)}>
              + Add to favorites
            </Fav>
          )}
        </Left>
        <Right justify="end">
          <Number>#{data.id.toString().padStart(3, '0')}</Number>
          <Image
            src={data.sprites.other['official-artwork'].front_default}
            alt={data.name}
            width="150"
            height="150"
            loading="lazy"
          />
        </Right>
      </Row>
    </Item>
  );
}

export default Card;
