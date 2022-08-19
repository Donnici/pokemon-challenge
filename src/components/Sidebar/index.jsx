import React from "react";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";

const MAX_POKEMONS = 6;

const Sidebar = () => (
  <S.SideBarWrapper>
    <S.SideBarList>
      {Array.from({ length: MAX_POKEMONS }).map((_, index) => (
        <S.SideBarItem key={index}>?</S.SideBarItem>
      ))}
    </S.SideBarList>

    <Button icon={iconPlus} />
  </S.SideBarWrapper>
);

export default Sidebar;
