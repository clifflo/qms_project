import * as R from 'ramda';
import {
  itemOfBranch,
  getElem
} from './plastic_1';

// Branch Large Compound
const getBlcSet = () => {

  const mapFn = i => {

    const brix_2 = i * 3;
    const brix_1 = brix_2 - 4;
    const brix_3 = brix_2 + 4;
    const brixs = [brix_1, brix_2, brix_3];
    const branches = R.map(itemOfBranch, brixs);
    const celem = getElem(branches[1]);
    return {
      branches,
      celem
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

export const blcSet = getBlcSet();

// Meeting Set
const getMtgSet = () => {

  const mapFn = i => {

    // 'j' is the starting position with a step
    // of three.

    const j = i * 3;
    const brix_1 = j + 2;
    const brix_2 = j + 3;
    const brix_3 = j + 4;
    const brixs = [brix_1, brix_2, brix_3];
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

export const mtgSet = getMtgSet();

// Arrestment Set
export const arrtSet = {
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
