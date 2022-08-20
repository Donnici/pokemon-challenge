import { applySpec, pipe, prop, map, path, filter, pathEq, join } from 'rambda';


export const detailhSpec = applySpec({
  name: prop('name'),
  height: prop('height'),
  weight: prop('weight'),
  image: path(['sprites', 'other', 'home', 'front_default']),
  hp: pipe(prop('stats'), filter(pathEq(['stat', 'name'], 'hp')), path([0, 'base_stat'])), //   prop('stats', 0, 'base_stat'),
  skills: pipe(prop('abilities'), map(path(['ability', 'name'])), join(', ')),
  types: pipe(prop('types'), map(path(['type', 'name']))),
});
