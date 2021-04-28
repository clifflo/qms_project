import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidTrunk,
  isValidBranch,
  idxOfTrunk,
  idxOfBranch,
  branchOrder,
  trkod
} from './twig_01';
import {
  utGetIdx
} from '../utils/util_01';

export const monthOrder =
  '正二三四五六七八九十霜臘';

export const mthaltOrder = '正二三四五六七八九十子丑';

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

export const idxOfMonth = month => {

  if(R.isNil(month)){
    throw new Error(
      'Month should not be nil.');
  }

  if(!RA.isString(month)){
    throw new Error(
      'Month must be a string.');
  }

  if(!isValidMonth(month)){
    throw new Error(
      `${month} is not a valid month.`);
  }

  return utGetIdx(month, monthOrder);
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

export const idxOfAnimal = animal => {

  if(R.isNil(animal)){
    throw new Error(
      'Animal should not be nil.');
  }

  if(!isValidAnimal(animal)){
    throw new Error(
      `${animal} is not a valid animal.`);
  }

  return utGetIdx(animal, animalOrder);
}

export const seasonOrder = '春夏秋冬';

export const isValidSeason = season => {
  return R.includes(season, seasonOrder);
}

export const idxOfSeason = season => {

  if(R.isNil(season)){
    throw new Error(
      'Season should not be nil.');
  }

  if(!RA.isString(season)){
    throw new Error(
      'Season must be a string.');
  }

  if(!isValidSeason(season)){
    throw new Error(
      `${season} is not a valid season.`);
  }

  return utGetIdx(season, seasonOrder);

}
