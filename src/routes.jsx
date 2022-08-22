import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { CatchedPokemonsProvider } from 'contexts/CatchedPokemons';

import MapPage from 'pages/Map';
import HomePage from 'pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path='/' />
        <CatchedPokemonsProvider>
          <Route component={MapPage} exact path='/map' />
        </CatchedPokemonsProvider>
        <Redirect path='*' to='/' />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
