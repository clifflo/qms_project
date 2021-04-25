
export function getElem(twig){
  if(R.isNil(twig)){
    throw new Error(
      'The input is nil for twig.');
  }
  if(isValidTrunk(twig)){
    const trunk = twig;
    return getTelem(trunk);
  }
  else if(isValidBranch(twig)){
    const branch = twig;
    return getBelem(branch);
  }
  else {
    throw new Error(
      `'${twig}' is not a valid twig.`);
  }
}

export function itemOfTrunk(index){
  return utItem(trunkOrder, index);
}

export function itemOfBranch(index){
  return utItem(branchOrder, index);
}

export function itemOfElem(index){
  return utItem(elemOrder, index);
}

export function isValidBranch(branch){
  return R.includes(branch, branchOrder);
}

export function isValidTrunk(trunk){
  return R.includes(trunk, trunkOrder);
}

export function isValidElem(elemental){
  return R.includes(elemental, elemOrder);
}

export function idxOfElem(elemental){
  return utGetIdx(elemental, elemOrder)
}

export const elrs = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Seed'
];

export const getElre = (source, target) => {

  if(R.isNil(source)){
    throw new Error(
      'Source elemental cannot be nil.');
  }

  if(R.isNil(target)){
    throw new Error(
      'Target elemental cannot be nil.');
  }

  if(!RA.isString(source)){
    throw new Error('Source elemental must be string.');
  }

  if(!RA.isString(target)){
    throw new Error('Target elemental must be string.');
  }

  if(!isValidElem(source)){
    throw new Error(
      `${source} is not a valid source elemental.`);
  }

  if(!isValidElem(target)){
    throw new Error(
      `${target} is not a valid target elemental.`);
  }

  const sourceIndex = utGetIdx(
    source, elemOrder);

  const targetIndex = utGetIdx(
    target, elemOrder);

  if(sourceIndex == -1){
    throw new Error(
      `'${source}' is not a valid source elemental.`);
  }

  if(targetIndex == -1){
    throw new Error(
      `'${target}' is not a valid target elemental.`);
  }

  const difference = targetIndex - sourceIndex;
  const relation = utItem(elrs, difference);
  return relation;
}

export const isValidElrl = elrl => {
  return R.includes(elrl, elrs);
}
