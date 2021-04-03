import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  item,
  getIdx
} from '../utils/util_1';
import {
  isValidBranch,
  isValidTrunk,
  isValidElem,
  itemOfBranch,
  idxOfElem,
  idxOfBranch,
  idxOfTrunk,
  getElem,
  elemOrder,
  branchOrder
} from './twig_1';

const chosenSentence =
  '長生,沐浴,冠帶,臨官,帝旺,衰,病,長死,墓,絕,胎,養';

export const chosenOrder =
  R.split(',', chosenSentence);

export const isValidChosen = chosen =>
  R.includes(chosen, chosenOrder);

export const idxOfChosen = chosen => {

  if(R.isNil(chosen)){
    throw new Error(
      'Chosen should not be nil.');
  }

  if(!RA.isString(chosen)){
    throw new Error(
      'Chosen must be a string.');
  }

  if(!isValidChosen(chosen)){
    throw new Error(
      'The chosen is not valid.');
  }

  try{
    const chidx = getIdx(chosen, chosenOrder);
    return chidx;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get chosen index.');
  }

}

export const itemOfChosen = chsx => {
  if(R.isNil(chsx)){
    throw new Error(
      'Chosen index should not be nil.');
  }
  return item(chosenOrder, chsx);
}

// Movement List for Chosen for branch
const cbaml = {
  '金': 7,
  '木': 1,
  '水': 4,
  '火': 10,
  '土': 10
};

// This is the chosen between branches.
// Using 圖解六壬大全 Page 106, I would define
// the column as source, the row as the target.
// Chinese is 立生運.
// Example: 申金立墓於丑。
// The branch and elemental must be written together
// for the source.
export const getChbt = (sElem, chosen) => {

  try{
    const movement = cbaml[sElem];
    const chsx = idxOfChosen(chosen);
    const tBridx = chsx - cbaml[sElem];
    const tBranch = itemOfBranch(tBridx);
    return {
      sElem,
      chosen,
      tBranch
    }
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get target branch for chosen.');
  }

}

// This one is the query from row to column.
// Chinese is 入生運.
// Example: 丑入墓於申金。
// The branch and elemental must be written together
// for the source.
// For this function I only get the branch elemental.
export const getChbs = tBranch => {

  const tBridx = idxOfBranch(tBranch);
  const moiFn = (movement, elem) => {

    try{
      const chsx = tBridx + movement;
      const chosen = itemOfChosen(chsx);
      return chosen
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Moi function of get the source branch of '
        + 'Chosen of Branch is error.');
    }
  }

  try{
    const result = R.mapObjIndexed(moiFn, cbaml);
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get the source branch of '
      + 'Chosen of Branch.');
  }

}

// Chosen Of Branch from source element
// returning target branch as a table
const buildCbtt = () => {

  try{

    const getChbt_c = R.curry(getChbt);

    const mapFn = elem => {
      return R.map(getChbt_c(elem), chosenOrder);
    }

    const result = R.map(mapFn, elemOrder);
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot build Chosen for '
    + 'Branch as a table.');
  }
}

export const cbtt = buildCbtt();

// Chosen Of Branch from target branch returning
// source element as a table
const buildCbst = () => {

  const mapFn = tBranch => {
    const chbs = getChbs(tBranch);
    return {
      tBranch,
      chbs
    }
  }

  try{
    const result = R.map(mapFn, branchOrder);
    return result;
  }
  catch(err){
    throw new Error(
      'Cannot build Chosen Of Branch '
      + 'returning source element as a table.')
  }
}

export const cbst = buildCbst();
