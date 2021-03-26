import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  adjust,
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
  idxOfTrunk
} from './twig_1';

const chosenSentence =
  '長生,沐浴,冠帶,臨官,帝旺,衰,病,長死,墓,絕,胎,養';

export const chosenOrder =
  R.split(',', chosenSentence);

export const isValidChosen = R.includes(chosen, chosenOrder);

export const getChosenIndex = chosen => {

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
    return getIdx(chosen, chosenOrder);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get chosen index.');
  }

}


// Use 圖解六壬大全 Page 106, define the column
// as source, the row as the target.
export const getChobt = (sBranch, chosen) => {

  try{

    const sElem = getElem(sBranch);

    // Chosen Index
    const chsx = getChosenIndex(chosen);

    const adjustment = {
      '金': 7,
      '水': 11,
      '木': 9,
      '火': 2,
      '土': 2
    };

    const bridx = adjustment[sElem] + chsx;
    const tBranch = itemOfBranch(bridx);
    return tBranch;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get target branch for chosen.');
  }

}
