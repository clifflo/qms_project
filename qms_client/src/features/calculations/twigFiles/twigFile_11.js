import * as R from 'ramda';
import {
  getTwigComboSetContextChinese
} from './twigMiniHub_02';

export const getTwigFullComboChineseByIndex =
  twigFullComboIndex => {

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

  const twigFullComboChinese =
    twigComboTrunkChinese
    + twigComboBranchChinese;

  return twigFullComboChinese;
}

export const getTwigFullComboIndexByChinese =
  twigFullComboChinese => {

  const twigComboSetIndex =
    getTwigComboSetContextChinese(
      twigFullComboChinese)
      .twigComboSetIndex;

  const twigComboTrunkIndex =
    getTwigTrunkContextByChinese(
      twigFullComboChinese[0]);

  const twigFullComboIndex =
    (twigComboSetIndex * 10)
    + twigComboTrunkIndex;
    
  return twigFullComboIndex;
}
