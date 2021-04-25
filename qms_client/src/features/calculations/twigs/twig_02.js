import * as R from 'ramda';
import * as RA from 'ramda-adjunct';


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

export function getElem(twig){

  const getBelem = branch => {

    const belemOrder = '水土木木土火火土金金土水';
    const bridx = idxOfBranch(branch);
    return belemOrder[bridx];
  }

  const getTelem = trunk => {
    const tki = idxOfTrunk(trunk);
    const elei = Math.floor(tki / 2) + 2;
    return itemOfElem(elei);
  }

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

export const getTrunkLiturgy = trunk => {
  return (idxOfTrunk(trunk) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getBranchLiturgy = (branch) => {
  return (idxOfBranch(branch) % 2) == 0 ?
    'Alpha': 'Omega';
}

export const getTwigLiturgy = (twig) => {

  if(isValidTrunk(twig)){
    const trunk = twig;
    return getTrunkLiturgy(trunk);
  }
  else if(isValidBranch(twig)){
    const branch = twig;
    return getBranchLiturgy(branch);
  }
  else {
    throw new Error(`${twig} is not a valid twig.`);
  }
}
