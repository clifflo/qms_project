import {
  isValidBranch,
  idxOfBranch,
  itemOfElem,
  itemOfBranch,
  getElem,
  idxOfElem,
  itemOfTrunk
} from './twig_1';
import * as R from 'ramda';

// Branch Small Compound
// 地支六合
const getBscSet = () => {

  const mapFn = i => {
    const sBranch = itemOfBranch(i);
    const tBri =  13 - i;
    const tBranch = itemOfBranch(tBri);

    const sBelem = getElem(sBranch);
    const sBelemIdx = idxOfElem(sBelem);

    // Compound Elemental
    const celemSet = '土木火金水火';
    const celem = celemSet[i - 1];
    return {
      branches: [sBranch, tBranch],
      celem
    }
  }

  try{
    const result = R.map(mapFn, R.range(1, 7));
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Branch Compound Set.');
  }
}

export const bscSet = getBscSet();

export const matchBsc = (sBranch, tBranch) => {

  const findFn = bsc => {
    const intersect = R.intersection(
      bsc.branches, [sBranch, tBranch]);
    const valid = intersect.length == 2;
    return valid;
  }

  const result = !R.isNil(R.find(findFn, bscSet));
  return result;
}

// Trunk Small Compound
// 天干五合
const getTscSet = () => {

  const mapFn = i => {
    const celemIdx = i - 1;
    const celem = itemOfElem(celemIdx);
    const sTrunk = itemOfTrunk(i);
    const tTrunk = itemOfTrunk(i + 5);

    return {
      trunks: [sTrunk, tTrunk],
      celem
    }
  }

  return R.map(mapFn, R.range(0, 5));
}

export const tscSet = getTscSet();

// 地支沖
const getFlushSet = () => {

  const mapFn = (i) => {
    const sBranch = itemOfBranch(i);
    const tBranch = itemOfBranch(i + 6);
    return [
      sBranch, tBranch
    ]
  }

  return R.map(mapFn, R.range(0, 6));
}

// For testing purpose
export const flushSet = getFlushSet();

export const checkFlushing = (sBranch, tBranch) => {

  try{
    const sBridx = idxOfBranch(sBranch);
    const tBridx = idxOfBranch(tBranch);

    const isFlush = Math.abs(sBridx - tBridx) == 6;
    return isFlush;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot check flushing.');
  }

}

const getPauseSet = () => {

  const mapFn = (i) => {
    const sBranch = itemOfBranch(i);
    const tBranch = itemOfBranch(7 - i);
    return [
      sBranch, tBranch
    ]
  }

  return R.map(mapFn, R.range(0, 6));
}

export const pauseSet = getPauseSet();

const getHitSet = () => {

  const mapFn = i => {

    // Source Branch Index
    const sBri = i * 2;

    // Target Branch Index
    const tBri = sBri - 3;

    const sBranch = itemOfBranch(sBri);
    const tBranch = itemOfBranch(tBri);
    return [
      sBranch, tBranch
    ]
  }

  try{
    return R.map(mapFn, R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get hit set.'
    )
  }

}

export const hitSet = getHitSet();
