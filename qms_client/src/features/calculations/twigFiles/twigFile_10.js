import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidTwigTrunkChinese,
  isValidTwigBranchChinese,
} from './twigMiniHub_01';
import {
  getTwigTrunkContextByChinese
} from './twigFile_06';
import {
  getTwigBranchContextByChinese,
  getTwigBranchContextByIndex
} from './twigFile_07';
import {
  checkNilWithString,
  getCyclicIndex
} from './_utilityHubByTwig';

export const
  getTwigComboSetContextByTwigFullComboChinese =
  twigFullComboChinese => {

  checkNilWithString(
    twigFullComboChinese,
    'twigFullComboChinese');

  const twigComboTrunkChinese =
    twigFullComboChinese[0];

  const twigComboBranchChinese =
    twigFullComboChinese[1];

  const twigTrunkIndex =
    getTwigTrunkContextByChinese(
      twigComboTrunkChinese)
    .twigTrunkIndex;

  const twigBranchIndex =
    getTwigBranchContextByChinese(
    twigComboBranchChinese)
    .twigBranchIndex;

  const twigComboSetHeadBranchIndex =
    getCyclicIndex(
      twigBranchIndex - twigTrunkIndex,
      12);

  const isValidTwigComboSetHeadBranchIndex =
    twigComboSetHeadBranchIndex % 2 == 0;

  if(!isValidTwigComboSetHeadBranchIndex){
    throw new Error(
      'Invalid twig combo set '
      + 'head branch index.');
  }

  const twigComboSetHeadBranchChinese =
    getTwigBranchContextByIndex(
      twigComboSetHeadBranchIndex)
    .twigBranchChinese;

  const twigComboSetChinese =
    `甲${twigComboSetHeadBranchChinese}旬`;

  const twigComboSetFirstVoidBranchChinese =
    getTwigBranchContextByIndex(
      twigComboSetHeadBranchIndex - 2)
    .twigBranchChinese;

  const twigComboSetSecondVoidBranchChinese =
    getTwigBranchContextByIndex(
      twigComboSetHeadBranchIndex - 1)
    .twigBranchChinese;

  const twigComboSetVoidBranchChineseList = [
    twigComboSetFirstVoidBranchChinese,
    twigComboSetSecondVoidBranchChinese
  ];

  const twigComboSetIndex =
    ((12 - twigComboSetHeadBranchIndex) % 12)
    / 2;

  const twigComboSetContext = {
    _type: 'Twig combo set context',
    twigComboSetChinese,
    twigComboSetVoidBranchChineseList,
    twigComboSetHeadBranchIndex,
    twigComboSetIndex
  };

  return twigComboSetContext;
}
