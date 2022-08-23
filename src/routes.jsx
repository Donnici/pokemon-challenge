import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';

import { CatchedPokemonsProvider } from 'contexts/CatchedPokemons';

import MapPage from 'pages/Map';
import HomePage from 'pages/Home';

const RootRoutes = () => {
  return (
    <CatchedPokemonsProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MapPage />} path='/map' />
          <Route element={<HomePage />} exact path='/' />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </CatchedPokemonsProvider>
  );
};

export default RootRoutes;
