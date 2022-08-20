import { applySpec, pipe, prop, split } from 'rambda';

const getIdFromUrl = (splitUrl) => {
  const lastItem = splitUrl.pop();
  if (lastItem !== '') {
    return lastItem;
  }
  return splitUrl.pop();
}

export const catchSpec = applySpec({
  id: pipe(prop('url'), split('/'), getIdFromUrl),
  name: prop('name'),
});
