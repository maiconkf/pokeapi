import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

function PokemonDetails() {
  const location = useLocation();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function getDetails() {
      const {pathname} = location;
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pathname.replace('/', '')}`
      ).then((res) => res.json());

      setDetails(data);
    }

    getDetails();
  }, [location]);

  console.log(details);

  return <div />;
}

export default PokemonDetails;
