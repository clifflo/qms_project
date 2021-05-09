import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getCyclicItemFromList,
  getIndexFromString
} from '../utils/util_01';

export const elementalContextSet = [
  {
    elementalIndex: 0,
    elementalChinese: '金',
    elementalEnglish: 'Twig Metal'
  },
  {
    elementalIndex: 1,
    elementalChinese: '水',
    elementalEnglish: 'Twig Water'
  },
  {
    elementalIndex: 2,
    elementalChinese: '木',
    elementalEnglish: 'Twig Wood'
  },
  {
    elementalIndex: 3,
    elementalChinese: '火',
    elementalEnglish: 'Twig Fire'
  },
  {
    elementalIndex: 4,
    elementalChinese: '土',
    elementalEnglish: 'Twig Earth'
  }
];

export const getTwigElementalContextByIndex =
  elementalIndex => {

  checkNilWithNumber(
    elementalIndex,
    'Elemental Index');

  const elementalContext =
    R.find(
      R.propEq('elementalIndex', elementalIndex),
      elementalContextSet));

  return elementalContext;
}

export const getTwigElementalContextByChinese =
  elementalChinese => {

  checkNilWithString(
    elementalChinese,
    'Elemental Chinese');

  const elementalContext =
    R.find(
      R.propEq('elementalChinese', elementalChinese),
      elementalContextSet));

  return elementalContext;
}



export const branchContext = {
  '子': 'Psi',
  '丑': 'Chi',
  '寅': 'Phi',
  '卯': 'Upsilon',
  '辰': 'Tau',
  '巳': 'Sigma',
  '午': 'Rho',
  '未': 'Pi',
  '申': 'Omicron',
  '酉': 'Xi',
  '戌': 'Nu',
  '亥': 'Mu',
}

// Branch order
export const branchOrder =
  '子丑寅卯辰巳午未申酉戌亥';
