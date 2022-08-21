import { applySpec, pipe, prop, map, path, filter, pathEq, join } from 'rambda';

const defaultImage = path(['sprites', 'front_shiny']);

export const detailSpec = applySpec({
  id: prop('id'),
  name: prop('name'),
  height: prop('height'),
  weight: prop('weight'),
  thumbnail: path(['sprites', 'front_default']) || defaultImage,
  image: path(['sprites', 'other', 'home', 'front_default']) || defaultImage,
  hp: pipe(
    prop('stats'),
    filter(pathEq(['stat', 'name'], 'hp')),
    path([0, 'base_stat'])
  ),
  attack: pipe(
    prop('stats'),
    filter(pathEq(['stat', 'name'], 'attack')),
    path([0, 'base_stat'])
  ),
  defense: pipe(
    prop('stats'),
    filter(pathEq(['stat', 'name'], 'defense')),
    path([0, 'base_stat'])
  ),
  specialAttack: pipe(
    prop('stats'),
    filter(pathEq(['stat', 'name'], 'special-attack')),
    path([0, 'base_stat'])
  ),
  specialDefense: pipe(
    prop('stats'),
    filter(pathEq(['stat', 'name'], 'special-defense')),
    path([0, 'base_stat'])
  ),
  speed: pipe(
    prop('stats'),
    filter(pathEq(['stat', 'name'], 'speed')),
    path([0, 'base_stat'])
  ),
  skills: pipe(prop('abilities'), map(path(['ability', 'name'])), join(', ')),
  types: pipe(prop('types'), map(path(['type', 'name']))),
});
