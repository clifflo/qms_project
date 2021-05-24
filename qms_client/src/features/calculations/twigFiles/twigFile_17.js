import * as R from 'ramda';
import {
  getCyclicIndex,
  checkNilWithString,
  isItemExistByStringFromList
} from './_utilityHubByTwig';
import {
  getTwigBranchContextByIndex,
  getTwigTrunkContextByIndex
} from './twigMiniHub_02';

export const getTwigFullComboChineseByIndex =
  twigComboIndex => {

  const twigComboSetIndex =
    ~~(twigComboIndex / 10);

  const twigComboTrunkIndex =
    twigComboIndex % 10;

  const twigComboTrunkBranchDifference =
    twigComboSetIndex * 2;

  const rawTwigComboBranchIndex =
    twigComboTrunkIndex -
    twigComboTrunkBranchDifference;

  const twigComboTrunkChinese =
    getTwigTrunkContextByIndex(
      twigComboTrunkIndex)
    .twigTrunkChinese;

  const twigComboBranchChinese =
    getTwigBranchContextByIndex(
      rawTwigComboBranchIndex)
    .twigBranchChinese;

  const twigFullComboChinese =
    twigComboTrunkChinese
    + twigComboBranchChinese;

  return twigFullComboChinese;
}

export const twigSeasonContextSet = [
  {
    twigSeasonChinese: '春',
    twigSeasonEnglish: 'Twig season spring',
    twigSeasonIndex: 0
  },
  {
    twigSeasonChinese: '夏',
    twigSeasonEnglish: 'Twig season summer',
    twigSeasonIndex: 1
  },
  {
    twigSeasonChinese: '秋',
    twigSeasonEnglish: 'Twig season autumn',
    twigSeasonIndex: 2
  },
  {
    twigSeasonChinese: '冬',
    twigSeasonEnglish: 'Twig season winter',
    twigSeasonIndex: 3
  },
]

export const isValidTwigSeasonChinese =
  twigSeasonChinese => {

  checkNilWithString(
    twigSeasonChinese,
    'twigSeasonChinese');

  return isItemExistByStringFromList(
    twigSeasonContextSet,
    twigSeasonChinese,
    'twigSeasonChinese');
}
