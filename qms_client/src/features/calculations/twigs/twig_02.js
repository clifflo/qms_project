import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const elrs = [
  'Draw',
  'Fruit',
  'Bank',
  'Hacker',
  'Seed'
];

export const getElre = (selem, telem) => {

  if(R.isNil(selem)){
    throw new Error(
      'SELEM cannot be nil.');
  }

  if(R.isNil(telem)){
    throw new Error(
      'TELEM cannot be nil.');
  }

  if(!RA.isString(selem)){
    throw new Error(
      'SELEM must be string.');
  }

  if(!RA.isString(telem)){
    throw new Error(
      'TELEM must be string.');
  }

  if(!isValidElem(selem)){
    throw new Error(
      `${selem} is not a valid SELEM.`);
  }

  if(!isValidElem(telem)){
    throw new Error(
      `${telem} is not a valid TELEM.`);
  }

  const sourceIndex = utGetIdx(
    selem, elemOrder);

  const targetIndex = utGetIdx(
    telem, elemOrder);

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

export const getElem = twig => {

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
