import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  item,
  utGetIdx
} from '../utils/util_01';
import {
  isValidBranch,
  isValidTrunk,
  isValidElem,
  itemOfBranch,
  idxOfBranch,
  idxOfTrunk,
  getElem,
  elemOrder,
  branchOrder
} from './twig_01';

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
    const chidx = utGetIdx(chosen, chosenOrder);
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
