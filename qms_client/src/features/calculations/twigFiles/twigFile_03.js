import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  checkNilWithNumber,
  isItemExistByStringFromList,
  getCyclicItemFromList,
  findItemByStringFromList
} from '../utilityFiles/utilityHub';

export const twigBranchContextSet = [
  {
    twigBranchIndex: 0,
    twigBranchChinese: '子',
    twigAnimalFullChinese: '生肖鼠',
    twigBranchEnglish: 'Psi',
    twigBranchElementalChinese: '五行水'
  },
  {
    twigBranchIndex: 1,
    twigBranchChinese: '丑',
    twigAnimalFullChinese: '生肖牛',
    twigBranchEnglish: 'Chi',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 2,
    twigBranchChinese: '寅',
    twigAnimalFullChinese: '生肖虎',
    twigBranchEnglish: 'Phi',
    twigBranchElementalChinese: '五行木'
  },
  {
    twigBranchIndex: 3,
    twigBranchChinese: '卯',
    twigAnimalFullChinese: '生肖兔',
    twigBranchEnglish: 'Upsilon',
    twigBranchElementalChinese: '五行木'
  },
  {
    twigBranchIndex: 4,
    twigBranchChinese: '辰',
    twigAnimalFullChinese: '生肖龍',
    twigBranchEnglish: 'Tau',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 5,
    twigBranchChinese: '巳',
    twigAnimalFullChinese: '生肖蛇',
    twigBranchEnglish: 'Sigma',
    twigBranchElementalChinese: '五行火'
  },
  {
    twigBranchIndex: 6,
    twigBranchChinese: '午',
    twigAnimalFullChinese: '生肖馬',
    twigBranchEnglish: 'Rho',
    twigBranchElementalChinese: '五行火'
  },
  {
    twigBranchIndex: 7,
    twigBranchChinese: '未',
    twigAnimalFullChinese: '生肖羊',
    twigBranchEnglish: 'Pi',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 8,
    twigBranchChinese: '申',
    twigAnimalFullChinese: '生肖𤠣',
    twigBranchEnglish: 'Omicron',
    twigBranchElementalChinese: '五行金'
  },
  {
    twigBranchIndex: 9,
    twigBranchChinese: '酉',
    twigAnimalFullChinese: '生肖雞',
    twigBranchEnglish: 'Xi',
    twigBranchElementalChinese: '五行金'
  },
  {
    twigBranchIndex: 10,
    twigBranchChinese: '戌',
    twigAnimalFullChinese: '生肖狗',
    twigBranchEnglish: 'Nu',
    twigBranchElementalChinese: '五行土'
  },
  {
    twigBranchIndex: 11,
    twigBranchChinese: '亥',
    twigAnimalFullChinese: '生肖豬',
    twigBranchEnglish: 'Mu',
    twigBranchElementalChinese: '五行水'
  }
]

export const isValidTwigBranchChinese =
  twigBranchChinese => {

  checkNilWithString(
    twigBranchChinese,
    'twigBranchChinese');

  return isItemExistByStringFromList(
    twigBranchContextSet,
    twigBranchChinese,
    'twigBranchChinese');
}

export const twigBranchChineseSet =
  R.map(
    R.prop('twigBranchChinese'),
    twigBranchContextSet);

export const isValidTwigAnimalSimpleChinese =
  twigAnimalSimpleChinese => {

  checkNilWithString(
    twigAnimalSimpleChinese,
    'twigAnimalSimpleChinese');

  return isItemExistByStringFromList(
    twigBranchContextSet,
    '生肖' + twigAnimalSimpleChinese,
    'twigAnimalFullChinese');
}

export const isValidBoardTwigBranchChinese =
  boardTwigBranchChinese => {

  checkNilWithString(
    boardTwigBranchChinese,
    'boardTwigBranchChinese');

  const characterIsValidTwigBranchChinese =
    isValidTwigBranchChinese(
      boardTwigBranchChinese);

  const characterIsValidTwigSimpleAnimalChinese =
    isValidTwigAnimalSimpleChinese(
      boardTwigBranchChinese);

  const characterIsValidBoardTwigBranchChinese =
    characterIsValidTwigBranchChinese
    || characterIsValidTwigSimpleAnimalChinese;

  return characterIsValidBoardTwigBranchChinese;
}
