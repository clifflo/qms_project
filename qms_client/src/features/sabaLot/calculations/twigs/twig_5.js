import * as R from 'ramda';
import {
  itemOfBranch,
  getElem,
  isValidBranch
} from './twig_1';

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

const getFlushSet = () => {

  const mapFn = (i) => {
    const sBranch = itemOfBranch(i);
    const tBranch = itemOfBranch(i + 6);
    return [sBranch, tBranch];
  }

  return R.map(mapFn, R.range(0, 6));
}

export const flushSet = getFlushSet();

export const getFlhop =
  getBbdro_c(flushSet);

const getHitSet = () => {

  const mapFn = (i) => {
    const sBranch = itemOfBranch(i);
    const tBranch = itemOfBranch(7 - i);
    return [sBranch, tBranch];
  }

  return R.map(mapFn, R.range(0, 6));
}

export const hitSet = getHitSet();

export const getHitop =
  getBbdro_c(hitSet);

const getPauseSet = () => {

  const mapFn = i => {

    const sBridx = i * 2;
    const tBridx = sBridx - 3;

    const sBranch = itemOfBranch(sBridx);
    const tBranch = itemOfBranch(tBridx);
    return [sBranch, tBranch];
  }

  try{
    return R.map(mapFn, R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get bow hunter set.'
    )
  }

}

export const pauseSet = getPauseSet();

export const getPseop =
  getBbdro_c(pauseSet);
