import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branchOrder,
  trunkOrder
} from './twig_01';

export const monthOrder =
  '霜臘正二三四五六七八九十';

export const mthaltOrder = '子丑正二三四五六七八九十';

export const isValidMonth = month => {

  if(R.isNil(month)){
    throw new Error(
      'Month should not be nil.');
  }

  if(!RA.isString(month)){
    throw new Error(
      'Month must be a string.');
  }

  return R.includes(month, monthOrder);
}

const getMthbrm = () => {

  const mapFn = idx => {

    const month = monthOrder[idx];
    const branch = branchOrder[idx];

    return {
      [month]: branch
    }
  }

  try {
    const _mthbrm = R.map(mapFn, R.range(0, 12));
    return _mthbrm;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get MTHBRM.');
  }
}

export const animalOrder =
  '鼠牛虎兔龍蛇馬羊猴雞狗豬';

export const isValidAnimal = animal => {

  if(R.isNil(animal)){
    throw new Error(
      'Animal should not be nil.');
  }

  if(!RA.isString(animal)){
    throw new Error(
      'Animal must be a string.');
  }

  return R.includes(animal, animalOrder);
}

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
