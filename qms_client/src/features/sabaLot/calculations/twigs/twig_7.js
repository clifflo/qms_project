import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branchOrder,
  trunkOrder,
  isValidBranch,
  isValidTrunk
} from './twig_1';

export const monthOrder =
  R.split(',',
  '正,二,三,四,五,六,七,八,'
  + '九,十,十一,十二');

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

// BRKSPA is brake sentence part array
// BKFSTC_1 is brake full sentence version 1
export const getBkfstc_1 = brkspa => {

  console.log('aaa');

  const mapFn = character => {

    // Is responsible character function
    const isRescrf = R.anyPass([
      isValidTrunk,
      isValidBranch,
      isValidAnimal,
      isValidMonth
    ]);

    const isReschr = isRescrf(character);

    if(isReschr){
      return character;
    }
    else {
      return '_'
    }
  }

  try {
    const bkfstc_1 = R.compose(
      R.join(''),
      R.reject(R.equals('_')),
      R.map(mapFn),
      R.join(''))
    (brkspa);

    return bkfstc_1;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot parse brake sentence.');
  }
}

export const getBkfstc_2 = bkfstc_1 => {

  const regexString =
    `(${trunkRegex}+)(${animalRegex}+)`;

  console.log(regexString);

  const regexObj = new RegExp(
    regexString,
    'g');
  const mbkfst = Array.from(bkfstc_1.matchAll(regexObj));
  console.log(mbkfst);
  return mbkfst;
}

const hello = R.compose(
  getBkfstc_2, getBkfstc_1)


const deltaBrake_03 =
  ['甲戊兼牛羊，乙己鼠猴鄉，丙丁豬雞位，',
   '壬癸兔蛇藏，庚辛逢馬虎，此是貴人方。'];

export const test = hello(deltaBrake_03);
