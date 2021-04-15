import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branchOrder,
  trunkOrder
} from './twig_01';

export const monthOrder = '正二三四五六七八九十霜臘';
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

export const animalOrder =
  '鼠牛虎兔龍蛇馬羊𤠣雞狗豬';

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

    return {
      [branch]: animal
    }
  }

  try{
    const _bchanm =
      R.map(mapFn, R.range(0, 12));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get BCHANM');
  }
}

export const brhanm = getBrhanm();

export const brhami = R.invertObj(brhanm);

// BRFAN means Branch from animal
export const getBrfan = animal => {

  if(R.isNil(animal)){
    throw new Error(
      'Animal should not be nil.');
  }

  if(!RA.isString(animal)){
    throw new Error(
      'Animal must be string.');
  }

  if(isValidAnimal(animal)){
    throw new Error(
      `${animal} is not a valid animal.`);
  }

  const branch = brhanm[animal];
  return branch;
}

export const branchRegex = `[${branchOrder}]`;
export const trunkRegex = `[${trunkOrder}]`;
export const animalRegex = `[${animalOrder}]`;
export const monthRegex = `[${monthOrder}]`;

export const varbrhRegex =
  `${branchRegex}|${animalRegex}`;

export const lbrlcmRegex =
  '(正五九|二六十|三七十一|四八十二)';

export const lbrlcbRegex =
  '(寅午戌|申子辰|亥卯未|巳酉丑)';
