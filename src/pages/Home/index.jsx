import React from "react";

import PokemonLogo from 'assets/images/pokemonLogo.png'

import * as S from "./styled";
import Button from "components/Button";
import { useHistory } from "react-router-dom";

const HomePage = () =>{
  const history = useHistory();
  return(
  <S.HomeWrapper>
    <img src={PokemonLogo} alt='Pokemon logo' />
    <Button text='START' onClick={() => history.push('/map')} />
  </S.HomeWrapper>
)};

export default HomePage;
