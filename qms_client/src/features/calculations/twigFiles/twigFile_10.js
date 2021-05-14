import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidTwigTrunkChinese,
  isValidTwigBranchChinese
} from './twigMiniHub_01';
import {
  getTwigTrunkContextByChinese
} from './twigFile_06';
import {
  getTwigBranchContextByChinese
} from './twigFile_07';
import {
  checkNilWithString
} from './utilityHubCloneOfTwig';

export const getTwigComboSetContextChinese =
  twigComboChinese => {

  checkNilWithString(
    twigComboChinese,
    'Twig combo chinese');

  const twigBranchChinesePart =
    twigComboChinese[0];

  const twigTrunkChinesePart =
    twigComboChinese[1];

  const twigTrunkIndex =
    getTwigTrunkContextByChinese(
      twigTrunkChinesePart)
    .twigTrunkIndex;

  const twigBranchIndex =
    getTwigBranchContextByChinese(
    twigBranchChinesePart)
    .twigBranchIndex;

  const rawTwigComboSetHeadBranchIndex =
    twigBranchIndex - twigTrunkIndex;

  const isValidRawTwigComboSetHeadBranchIndex =
    rawTwigComboSetHeadBranchIndex % 2 == 0;

  if(isValidRawTwigComboSetHeadBranchIndex){
    throw new Error(
      'Invalid raw twig combo set '
      + 'head branch index.');
  }

  const twigComboSetHeadBranchChinese =
    getTwigBranchContextByIndex(
      rawTwigComboHeadBranchIndex)
    .twigBranchChinese;

  const twigComboSetChinese =
    `甲${twigComboSetHeadBranchChinese}旬`;

  const twigComboSetFirstVoidBranchChinese =
    getTwigBranchContextByIndex(
      rawTwigComboHeadBranchIndex - 2)
    .twigBranchChinese;

  const twigComboSetSecondVoidBranchChinese =
    getTwigBranchContextByIndex(
      rawTwigComboHeadBranchIndex - 1)
    .twigBranchChinese;

  const twigComboSetVoidBranchList = [
    twigComboSetFirstVoidBranchChinese,
    twigComboSetSecondVoidBranchChinese
  ];

  const twigComboSetContext = {
    twigComboSetChinese,
    twigComboSetVoidBranchList
  };

  return twigComboSetContext;
}
