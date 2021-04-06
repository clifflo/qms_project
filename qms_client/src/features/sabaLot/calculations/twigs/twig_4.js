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
const getBrscSet = () => {

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

export const brscSet = getBrscSet();

// BSCOM is Branch small compound myself
// BSCPT is Branch small compound reaction truncated
export const getBscrt = bscom => {

  // BSCOD is Branch small compound reaction
  const findFn = bscom => {
    const mBscor = R.includes(
      bscom, bscor.scpbrs);
    if(R.isNil(mBscor)){
      throw new Error(
        'The matched BSCOR should not be nil.');
    }
    return mBscor;
  }

  const oppoFn = bscor => {
    const opponent = R.without(
      [bscom], bscor.scpbrs)[0];
    return {
      bscoo: opponent,
      scelem: bscor.scelem
    }
  }

  try {
    const _bscrt = R.compose(
      oppoFn,
      R.find(findFn))
    (brscSet);

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

// Branch Large Compound
// 地支三合
const getBrlcSet = () => {

  const mapFn = i => {

    // Branch Index
    const bridx_2 = i * 3;
    const bridx_1 = bridx_2 - 4;
    const bridx_3 = bridx_2 + 4;
    const brixs = [bridx_1, bridx_2, bridx_3];
    const branches = R.map(itemOfBranch, brixs);
    const blce = getElem(branches[1]);
    return {
      branches,
      blce
    }
  }

  try{
    return R.map(mapFn, R.range(0, 4));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get branch big compound.'
    )
  }
}

export const brlcSet = getBrlcSet();

// Meeting Set
// 地支三會
const getMtigSet = () => {

  const mapFn = i => {

    // 'j' is the starting position with a step
    // of three.

    const j = i * 3;
    const bridx_1 = j + 2;
    const bridx_2 = j + 3;
    const bridx_3 = j + 4;
    const brixs = [bridx_1, bridx_2, bridx_3];
    const branches = R.map(itemOfBranch, brixs);
    const melem = getElem(branches[1]);

    return {
      branches,
      melem
    }
  }

  try {
    return R.map(mapFn, R.range(0, 4));
  }
  catch(err){
    throw new Error(
      'Cannot get Meeting Set.'
    )
  }
}

export const mtigSet = getMtgSet();
