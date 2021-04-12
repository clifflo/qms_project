import * as R from 'ramda';
import {
  itemOfBranch,
  getElem
} from './twig_1';

// Branch Large Compound Set
// 地支三合
const getBrlcs = () => {

  const mapFn = i => {

    // Branch Index
    const bridx_2 = i * 3;
    const bridx_1 = bridx_2 - 4;
    const bridx_3 = bridx_2 + 4;
    const brixs = [bridx_1, bridx_2, bridx_3];
    const blcms = R.compose(
      R.join(''),
      R.map(itemOfBranch))
    (brixs);

    // Branch large compound element
    const blcel = getElem(branches[1]);
    return {
      blcbs,
      blcel
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

export const brlcs = getBrlcs();

export const br

// ELFTB stands for get element from triple branches
// TRBRS stands for triple branches
export const getElftb = trbrs => {

  const mapFn = brlcd => {
    const
  }
}

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

export const mtigSet = getMtigSet();
