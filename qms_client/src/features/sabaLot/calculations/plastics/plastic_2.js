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
} from './plastic_1';

const chosenSentence =
  '長生,沐浴,冠帶,臨官,帝旺,衰,病,長死,墓,絕,胎,養';

export const chosenOrder =
  R.split(',', chosenSentence);

export function getChosenIndex(chosen) {
  return getIdx(chosen, chosenOrder)
}

const elemStatusOne =
  '旺,相,休,囚,死';


// Get Chosen for Element with Element and Branch
export const getChe = (elem, branch) => {

  if(!isValidBranch(branch)){
    throw new Error(`${branch} is not a valid branch.`);
  }

  if(!isValidElem(elem)){
    throw new Error(`${elem} is not a valid elemental.`);
  }


  // Elemental index 1
  const eli_1 = idxOfElem(elem);
  const eli_2 =  eli_1 == 4 ? 3 : eli_1;
  const bri = idxOfBranch(branch);
  const chosenIndex = -(eli_2 * 3) - 5 + bri;
  const chosen = item(chosenOrder, chosenIndex);
  return chosen;
}

// Chosen for branch
export const chbOrder =　
  '亥午寅酉寅酉巳子申卯';

// Get Betapsi Series
export const getBpse = (betapsi) => {

  const trunk = betapsi[0];
  const branch = betapsi[1];

  if(!isValidTrunk(trunk)){
    throw new Error(
      `${trunk} is not a valid trunk for betapsi.`);
  }

  if(!isValidBranch(branch)){
    throw new Error(
      `${branch} is not a valid branch for betapsi.`
    )
  }

  const difference = idxOfBranch(branch) - idxOfTrunk(trunk);
  const isValidMatch = (difference % 2) == 0
  if(!isValidMatch){
    throw new Error(
      'Betapsi not valid due to wrong match of trunk and branch.'
    )
  }

  // Betapsi Series Lead Branch
  const bslb = itemOfBranch(difference);

  // Betapsi Series Full Name
  const bsfn = `甲${bslb}旬`;

  // Betapsi Series Void A
  const bsva = itemOfBranch(difference - 2);

  // Betapsi Series Void B
  const bsvb = itemOfBranch(difference - 1);

  // Betapsi Series Void List
  const bsvl = [bsva, bsvb];

  return {
    bsfn,
    bsvl
  }
}
