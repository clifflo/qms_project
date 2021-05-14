import * as R from 'ramda';
import {

} from './twigMiniHub_02';

export const getTwigComboByIndex =
  twigComboIndex => {

  const twigComboBranchHint_1 =
    Math.floor(twigComboIndex / 10);

  const twigComboBranchHint_2 =
    12 - (twigComboBranchHint * 2);

  const twigComboTrunkIndex =
    twigComboIndex % 10;

  const twigComboBranchIndex =
    twigComboTrunkIndex
    + twigComboBranchHint_2;

  const twigComboTrunkChinese =
    getTwigTrunkContextByIndex(
      twigComboTrunkIndex)
      .twigTrunkChinese;

  const twigComboBranchChinese =
    getTwigBranchContextByIndex(
      twigComboBranchIndex)
    .twigBranchChinese;
}
