import React from "react";

import PokemonLogo from 'assets/images/pokemonLogo.png'

import * as S from "./styled";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";

const HomePage = () =>{
  const navigate = useNavigate();
  return(
  <S.HomeWrapper>
    <img src={PokemonLogo} alt='Pokemon logo' />
    <Button text='START' onClick={() => navigate('/map')} />
  </S.HomeWrapper>
)};

export default HomePage;
