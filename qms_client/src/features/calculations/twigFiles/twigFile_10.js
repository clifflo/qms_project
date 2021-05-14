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
  twigComboFullChinese => {

  checkNilWithString(
    twigComboFullChinese,
    'Twig combo full chinese');

  const twigBranchChinesePart =
    twigComboFullChinese[0];

  const twigTrunkChinesePart =
    twigComboFullChinese[1];

  const twigTrunkIndex =
    getTwigTrunkContextByChinese(
      twigTrunkChinesePart)
    .twigTrunkIndex;

  const twigBranchIndex =
    getTwigBranchContextByChinese(
    twigBranchChinesePart)
    .twigBranchIndex;

  const twigComboSetHeadBranchIndex =
    getCyclicIndex(
      twigBranchIndex - twigTrunkIndex,
      12);

  const isValidTwigComboSetHeadBranchIndex =
    twigComboSetHeadBranchIndex % 2 == 0;

  if(isValidTwigComboSetHeadBranchIndex){
    throw new Error(
      'Invalid twig combo set '
      + 'head branch index.');
  }

  const twigComboSetHeadBranchChinese =
    getTwigBranchContextByIndex(
      finalTwigComboSetHeadBranchIndex)
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

  const twigComboSetVoidBranchList = [
    twigComboSetFirstVoidBranchChinese,
    twigComboSetSecondVoidBranchChinese
  ];

  const twigComboSetIndex =
    ((12 - twigComboSetHeadBranchIndex) % 12)
    / 2;

  const twigComboSetContext = {
    twigComboSetChinese,
    twigComboSetVoidBranchList,
    twigComboSetHeadBranchIndex,
    twigComboSetIndex
  };

  return twigComboSetContext;
}
