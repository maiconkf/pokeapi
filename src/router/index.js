import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Favorites from '../views/Favorites';
import Home from '../views/Home';
import PokemonDetails from '../views/PokemonDetails';

const RouterApp = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/:slug" component={PokemonDetails} />
    </Switch>
  </BrowserRouter>
);

export default RouterApp;
