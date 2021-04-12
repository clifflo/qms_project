import {
  isValidBranch,
  idxOfBranch,
  itemOfElem,
  itemOfBranch,
  getElem,
  idxOfElem,
  itemOfTrunk
} from './twig_01';
import * as R from 'ramda';

// Branch Small Compound
// 地支六合
const getBscprSet = () => {

  const mapFn = i => {
    const sBranch = itemOfBranch(i);
    const tBridx =  13 - i;
    const tBranch = itemOfBranch(tBridx);

    const sBelem = getElem(sBranch);
    const sBelemIdx = idxOfElem(sBelem);

    // Small Compound Elemental
    const scelemSet = '土木火金水火';
    const scelem = scelemSet[i - 1];
    return {
      scpbrs: [sBranch, tBranch],
      scelem
    }
  }

  try {
    const _brscSet = R.map(mapFn, R.range(1, 7));
    return _brscSet;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Branch Compound Set.');
  }
}

export const bscprSet = getBscprSet();

export const getBscrt = bscom => {

  if(R.isNil(bscom)){
    throw new Error(
      'BSCOM should not be nil.');
  }

  if(!isValidBranch(bscom)){
    throw new Error(
      `${bscom} is not a valid branch.`);
  }

  const findFn = bscpr => {

    const cBscpr = R.includes(
      bscom, bscpr.scpbrs);

    if(R.isNil(cBscpr)){
      throw new Error(
        'The checked BSCPR should not be nil.');
    }

    return cBscpr;
  }

  const oppoFn = mBscpr => {

    if(R.isNil(mBscpr)){
      throw new Error(
        'Matched BSCPR should not be nil.')
    }

    const opponent = R.without(
      [bscom], mBscpr.scpbrs)[0];

    return {
      bscpo: opponent,
      scelem: mBscpr.scelem
    }
  }

  try {
    const _bscrt = R.compose(
      oppoFn,
      R.find(findFn))
    (bscprSet);

    return _bscrt;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get BSCRT.');
  }
}

// Trunk Small Compound
// 天干五合
const getTkscSet = () => {

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

export const tkscSet = getTkscSet();
