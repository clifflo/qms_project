import * as R from 'ramda';

export const getTwigFullComboChineseByIndex =
  twigComboIndex => {

  const twigComboSetIndex = ~~(twigComboIndex / 10);
  const twigComboTrunkIndex = twigComboIndex % 10;

  const twigComboTrunkBranchDifference =
    twigComboSetIndex * 2;

  const rawTwigComboBranchIndex =
    twigComboTrunkIndex -
    twigComboTrunkBranchDifference;

  const finalTwigComboBranchIndex =
    getCyclicIndex(rawTwigComboBranchIndex, 12);

  const twigComboTrunkChinese =
    getTwigComboContextByIndex(
      twigComboTrunkIndex)
    .twigTrunkChinese;

  const twigComboBranchChinese =
    getTwigBranchContextByIndex(
      twigComboTrunkIndex)
    .twigBranchChinese;

  const twigFullComboChinese =
    twigComboTrunkChinese
    + twigComboBranchChinese;

  return twigFullComboChinese;
}
