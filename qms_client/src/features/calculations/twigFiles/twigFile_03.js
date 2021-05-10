import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  checkNilWithNumber,
  isItemExistByStringFromList,
  getCyclicItemFromList,
  getItemByStringFromList
} from '../utilityFiles/utilityHub';

export const twigBranchContextSet = [
  {
    twigBranchIndex: 0,
    twigBranchChinese: '子',
    twigBranchEnglish: 'Psi',
    twigBranchElementalChinese: '水'
  },
  {
    twigBranchIndex: 1,
    twigBranchChinese: '丑',
    twigBranchEnglish: 'Chi',
    twigBranchElementalChinese: '土'
  },
  {
    twigBranchIndex: 2,
    twigBranchChinese: '寅',
    twigBranchEnglish: 'Phi',
    twigBranchElementalChinese: '木'
  },
  {
    twigBranchIndex: 3,
    twigBranchChinese: '卯',
    twigBranchEnglish: 'Upsilon',
    twigBranchElementalChinese: '木'
  },
  {
    twigBranchIndex: 4,
    twigBranchChinese: '辰',
    twigBranchEnglish: 'Tau',
    twigBranchElementalChinese: '土'
  },
  {
    twigBranchIndex: 5,
    twigBranchChinese: '巳',
    twigBranchEnglish: 'Sigma',
    twigBranchElementalChinese: '火'
  },
  {
    twigBranchIndex: 6,
    twigBranchChinese: '午',
    twigBranchEnglish: 'Rho',
    twigBranchElementalChinese: '火'
  },
  {
    twigBranchIndex: 7,
    twigBranchChinese: '未',
    twigBranchEnglish: 'Pi',
    twigBranchElementalChinese: '土'
  },
  {
    twigBranchIndex: 8,
    twigBranchChinese: '申',
    twigBranchEnglish: 'Omicron',
    twigBranchElementalChinese: '金'
  },
  {
    twigBranchIndex: 9,
    twigBranchChinese: '酉',
    twigBranchEnglish: 'Xi',
    twigBranchElementalChinese: '金'
  },
  {
    twigBranchIndex: 10,
    twigBranchChinese: '戌',
    twigBranchEnglish: 'Nu',
    twigBranchElementalChinese: '土' 
  },
  {
    twigBranchIndex: 11,
    twigBranchChinese: '亥',
    twigBranchEnglish: 'Mu',
    twigBranchElementalChinese: '水'
  }
]

export const isValidTwigBranchChinese =
  twigBranchChinese => {

  checkNilWithString(
    twigBranchChinese, 'Twig branch chinese');

  return isItemExistByStringFromList(
    twigBranchContextSet,
    twigBranchChinese,
    'twigBranchChinese');
}

export const getTwigBranchContextByIndex =
  twigBranchIndex => {

  try{
    checkNilWithNumber(
      twigBranchIndex, 'Twig branch index');

    return getCyclicItemFromList(
      twigBranchContextSet,
      twigBranchIndex,
      'twigBranchIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by index.');
  }
}

export const getTwigBranchContextByChinese =
  twigBranchChinese => {

  try{

    checkNilWithString(
      twigBranchChinese,
      'Twig branch chinese');

    const twigBranchContext = getItemByStringFromList(
      twigBranchContextSet,
      twigBranchChinese,
      'twigBranchChinese');

    if(R.isNil(twigBranchContext)){
      throw new Error(
        twigBranchChinese + ' '
        + 'is not a valid twig branch chinese.');
    }

    return twigBranchContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by chinese.');
  }
}
