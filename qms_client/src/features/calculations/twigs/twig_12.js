import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidAnimal,
  isValidMonth,
  animalOrder,
  monthOrder,
  idxOfAnimal,
  idxOfMonth,
  isValidSeason,
  idxOfSeason,
  seasonOrder
} from './twig_11';
import {
  isValidBranch,
  isValidTrunk,
  indexOfBranch,
  indexOfTrunk,
  branchOrder,
  trunkOrder
} from './twig_01';


// Branch animal map, 地支和生肖之對應
const getBrhanm = () => {

  const mapFn = idx => {

    const branch = branchOrder[idx];
    const animal = animalOrder[idx];

    return [branch, animal];
  }

  try{
    return R.compose(
      R.fromPairs,
      R.map(mapFn))
    (R.range(0, 12));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get BCHANM');
  }
}

export const brhanm = getBrhanm();

export const branmi = R.invertObj(brhanm);

// Branch month map
const getBrmthm = () => {

  const mapFn = idx => {

    const branch = branchOrder[idx];
    const month = monthOrder[idx];

    return [branch, month];
  }

  try{
    return R.compose(
      R.fromPairs,
      R.map(mapFn))
    (R.range(0, 12));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get BRMTHM');
  }
}

export const brmthm = getBrmthm();

export const brmhmi = R.invertObj(brmthm);

export const idxOfGtwig = gtwig => {

  if(R.isNil(gtwig)){
    throw new Error(
      'Generalized twig should not be nil.');
  }

  if(!RA.isString(gtwig)){
    throw new Error(
      'Generalized twig must be a string.');
  }

  if(isValidBranch(gtwig)){
    return indexOfBranch(gtwig);
  }
  else if(isValidAnimal(gtwig)){
    return idxOfAnimal(gtwig);
  }
  else if(isValidTrunk(gtwig)){
    return indexOfTrunk(gtwig);
  }
  else if(isValidMonth(gtwig)){
    return idxOfMonth(gtwig);
  }
  else if(isValidSeason(gtwig)){
    return idxOfSeason(gtwig);
  }
  else {
    throw new Error(
      `${gtwig} is not a valid `
      + 'generalized twig.');
  }
}
