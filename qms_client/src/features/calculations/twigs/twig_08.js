import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidAnimal,
  isValidMonth
} from './twig_07';
import {
  isValidBranch
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
