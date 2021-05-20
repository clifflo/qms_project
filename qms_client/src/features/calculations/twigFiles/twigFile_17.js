import * as R from 'ramda';
import {
  getCyclicIndex
} from './utilityHubCloneOfTwig';
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
