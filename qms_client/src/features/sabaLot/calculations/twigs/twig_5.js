import * as R from 'ramda';
import {
  itemOfBranch,
  getElem
} from './twig_1';

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
const getMtgSet = () => {

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

export const mtgSet = getMtgSet();

// Arrestment Set
// 地支相刑
export const arrmtSet = {
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
