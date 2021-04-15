import React, {useReducer} from 'react';

const initialState = {
  arrPokemon: [],
  search: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setPokemon':
      return {
        ...state,
        arrPokemon: action.search
          ? [action.arrPokemon]
          : [...state.arrPokemon, action.arrPokemon],
        search: action.search,
      };
    case 'setClearPokemonArray':
      return {
        ...state,
        arrPokemon: [],
      };
    default:
      return {...state};
  }
};

const AppContext = React.createContext(initialState);

function AppProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export {AppContext, AppProvider};
