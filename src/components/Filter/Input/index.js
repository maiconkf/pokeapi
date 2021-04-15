import React from 'react';
import {InputComponent} from './style';

function Input() {
  return (
    <InputComponent
      placeholder="Search a Pokémon"
      type="search"
      name="pokemon"
      pattern="[^\s]+"
      title="1 character minimum"
      required
    />
  );
}

export default Input;
