import * as R from 'ramda';
import {
  getTwigElementalContextByChinese
} from './twigMiniHub_01';
import {
  getTwigBranchContextByChinese,
  getTwigBranchContextByIndex
} from './twigMiniHub_02';
import {
  checkNilWithString
} from './utilityHubCloneOfTwig';

const mapFunctionOfTwigBranchPauseContext =
  twigBranchPauseHint => {

  const twigBranchPauseFirstPartIndex =
    twigBranchPauseHint * 2;

  const twigBranchPauseSecondPartIndex =
    twigBranchPauseFirstPartIndex - 3;

  const twigBranchPauseFirstPartContext =
    getTwigBranchContextByIndex(
      twigBranchPauseFirstPartIndex);

  const twigBranchPauseSecondPartContext =
    getTwigBranchContextByIndex(
      twigBranchPauseSecondPartIndex);

  const twigBranchPauseFirstPartChinese =
    twigBranchPauseFirstPartContext
    .twigBranchChinese;

  const twigBranchPauseSecondPartChinese =
    twigBranchPauseSecondPartContext
    .twigBranchChinese;

  const twigBranchPauseFirstPartEnglish =
    twigBranchPauseFirstPartContext
    .twigBranchEnglish;

  const twigBranchPauseSecondPartEnglish =
    twigBranchPauseSecondPartContext
    .twigBranchEnglish;

  const twigBranchPauseChineseSet =
  [
    twigBranchPauseFirstPartChinese,
    twigBranchPauseSecondPartChinese
  ];

  const twigBranchPauseEnglishSet =
  [
    twigBranchPauseFirstPartEnglish,
    twigBranchPauseSecondPartEnglish
  ];

  return {
    _type: 'Twig branch pause '
    twigBranchPauseChineseSet,
    twigBranchPauseEnglishSet
  };
}

export const twigBranchPauseContextSet =
  R.map(
    mapFunctionOfTwigBranchPauseContext,
    R.range(0, 6));
