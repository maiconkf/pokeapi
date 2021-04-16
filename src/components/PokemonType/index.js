import React from 'react';
import {Type} from './style';

function PokemonType(props) {
  const {children} = props;
  return <Type {...props}>{children}</Type>;
}

export default PokemonType;
