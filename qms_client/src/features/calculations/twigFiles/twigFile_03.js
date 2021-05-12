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
    twigBranchElementalChinese: '五行水'
  },
  {
    twigBranchIndex: 1,
    twigBranchChinese: '丑',
    twigBranchEnglish: 'Chi',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 2,
    twigBranchChinese: '寅',
    twigBranchEnglish: 'Phi',
    twigBranchElementalChinese: '五行木'
  },
  {
    twigBranchIndex: 3,
    twigBranchChinese: '卯',
    twigBranchEnglish: 'Upsilon',
    twigBranchElementalChinese: '五行木'
  },
  {
    twigBranchIndex: 4,
    twigBranchChinese: '辰',
    twigBranchEnglish: 'Tau',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 5,
    twigBranchChinese: '巳',
    twigBranchEnglish: 'Sigma',
    twigBranchElementalChinese: '五行火'
  },
  {
    twigBranchIndex: 6,
    twigBranchChinese: '午',
    twigBranchEnglish: 'Rho',
    twigBranchElementalChinese: '五行火'
  },
  {
    twigBranchIndex: 7,
    twigBranchChinese: '未',
    twigBranchEnglish: 'Pi',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 8,
    twigBranchChinese: '申',
    twigBranchEnglish: 'Omicron',
    twigBranchElementalChinese: '五行金'
  },
  {
    twigBranchIndex: 9,
    twigBranchChinese: '酉',
    twigBranchEnglish: 'Xi',
    twigBranchElementalChinese: '五行金'
  },
  {
    twigBranchIndex: 10,
    twigBranchChinese: '戌',
    twigBranchEnglish: 'Nu',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 11,
    twigBranchChinese: '亥',
    twigBranchEnglish: 'Mu',
    twigBranchElementalChinese: '五行水'
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
