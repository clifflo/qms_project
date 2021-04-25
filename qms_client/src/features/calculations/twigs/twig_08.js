import * as R from 'ramda';
import {
  itemOfBranch,
  getElem,
  isValidBranch
} from './twig_01';

export const hunterSet = {
  '寅': '巳',
  '巳': '申',
  '申': '寅',
  '丑': '戌',
  '戌': '未',
  '未': '丑',
  '卯': '子',
  '子': '卯',
  '辰': '辰',
  '午': '午',
  '酉': '酉',
  '亥': '亥'
}

// BBDRS is Branch bidirectional reaction set
// BBDRO is Branch bidirectional reaction oppoent
// BBDRM is Branch bidirectional reaction myself
const getBbdro_n = (bbdrs, bbdrm) => {

  if(R.isNil(bbdrm)){
    throw new Error(
      'BBDRM should not be nil.');
  }

  if(!isValidBranch(bbdrm)){
    throw new Error(
      `${bbdrm} is not a valid branch for BBDRM.`);
  }

  const findFn = bbdre => {
    const mBbdre = R.includes(bbdrm, bbdre);
    if(R.isNil(mBbdre)){
      throw new Error(
        'The matched BBDRE should not be nil.');
    }
    return mBbdre;
  }

  const oppoFn = bbdre => {
    const opponent = R.without(
      [bbdrm], bbdre)[0];
    return opponent;
  }

  try{

    const bbdro = R.compose(
      oppoFn,
      R.find(findFn))
    (bbdrs)

    if(R.isNil(bbdro)){
      throw new Error(
        `BBDRO should not be nil for ${bbdrm}.`)
    }

    if(!isValidBranch(bbdro)){
      throw new Error(
        `${bbdro} is not a valid branch for BBDRO`);
    }

    return bbdro;
  }
  catch(err){
    console.error(err);
    throw new Error(
      `Cannot get BBDRO for ${bbdrm}.`);
  }
}

const getBbdro_c = R.curry(getBbdro_n);
