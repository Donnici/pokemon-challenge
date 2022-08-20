import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import { CatchedPokemonsProvider } from "contexts/CatchedPokemons";

import MapPage from "pages/Map";
import HomePage from "pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <CatchedPokemonsProvider>
          <Route component={MapPage} path="/map" />
        </CatchedPokemonsProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
