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
    twigBranchAnimal: '鼠',
    twigBranchEnglish: 'Psi',
    twigBranchElementalChinese: '五行水'
  },
  {
    twigBranchIndex: 1,
    twigBranchChinese: '丑',
    twigBranchAnimal: '牛',
    twigBranchEnglish: 'Chi',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 2,
    twigBranchChinese: '寅',
    twigBranchAnimal: '虎',
    twigBranchEnglish: 'Phi',
    twigBranchElementalChinese: '五行木'
  },
  {
    twigBranchIndex: 3,
    twigBranchChinese: '卯',
    twigBranchAnimal: '兔',
    twigBranchEnglish: 'Upsilon',
    twigBranchElementalChinese: '五行木'
  },
  {
    twigBranchIndex: 4,
    twigBranchChinese: '辰',
    twigBranchAnimal: '龍',
    twigBranchEnglish: 'Tau',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 5,
    twigBranchChinese: '巳',
    twigBranchAnimal: '蛇',
    twigBranchEnglish: 'Sigma',
    twigBranchElementalChinese: '五行火'
  },
  {
    twigBranchIndex: 6,
    twigBranchChinese: '午',
    twigBranchAnimal: '馬',
    twigBranchEnglish: 'Rho',
    twigBranchElementalChinese: '五行火'
  },
  {
    twigBranchIndex: 7,
    twigBranchChinese: '未',
    twigBranchAnimal: '羊',
    twigBranchEnglish: 'Pi',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 8,
    twigBranchChinese: '申',
    twigBranchAnimal: '𤠣',
    twigBranchEnglish: 'Omicron',
    twigBranchElementalChinese: '五行金'
  },
  {
    twigBranchIndex: 9,
    twigBranchChinese: '酉',
    twigBranchAnimal: '雞',
    twigBranchEnglish: 'Xi',
    twigBranchElementalChinese: '五行金'
  },
  {
    twigBranchIndex: 10,
    twigBranchChinese: '戌',
    twigBranchAnimal: '狗',
    twigBranchEnglish: 'Nu',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 11,
    twigBranchChinese: '亥',
    twigBranchAnimal: '豬',
    twigBranchEnglish: 'Mu',
    twigBranchElementalChinese: '五行水'
  }
]

export const isValidTwigBranchChinese =
  twigBranchChinese => {

  checkNilWithString(
    twigBranchChinese,
    'Twig branch chinese');

  return isItemExistByStringFromList(
    twigBranchContextSet,
    twigBranchChinese,
    'twigBranchChinese');
}

export const isValidTwigAnimal =
  twigAnimal => {

  checkNilWithString(
    twigAnimal,
    'Twig animal');

  return isItemExistByStringFromList(
    twigBranchContextSet,
    twigAnimal,
    'twigAnimal');
}
