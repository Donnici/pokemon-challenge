import { applySpec, pipe, prop, map, path, filter, pathEq, join, isNil} from 'rambda';

const defaultImage = path(['sprites', 'front_shiny']);

export const detailSpec = applySpec({
  id: prop('id'),
  name: prop('name'),
  height: prop('height'),
  weight: prop('weight'),
  thumbnail: isNil(path(['sprites', 'front_default'])) ? defaultImage : path(['sprites', 'front_default']),
  // thumbnail: pathOr(defaultImage, path(['sprites', 'front_default'])),
  image: isNil(path(['sprites', 'other', 'home', 'front_default'])) ? defaultImage : path(['sprites', 'other', 'home', 'front_default']),
  hp: pipe(prop('stats'), filter(pathEq(['stat', 'name'], 'hp')), path([0, 'base_stat'])), //   prop('stats', 0, 'base_stat'),
  skills: pipe(prop('abilities'), map(path(['ability', 'name'])), join(', ')),
  types: pipe(prop('types'), map(path(['type', 'name']))),
});
