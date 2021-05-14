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

const mapFunctionOfTwigFlushContext =
  twigBranchIndex => {

  const twigFlushFirstBranchContext =
    getTwigBranchContextByIndex(
      twigBranchIndex);

  const twigFlushSecondBranchContext =
    getTwigBranchContextByIndex(
      twigBranchIndex + 6);

  const twigFlushFirstBranchChinese =
    twigFlushFirstBranchContext
    .twigBranchChinese;

  const twigFlushSecondBranchChinese =
    twigFlushSecondBranchContext
    .twigBranchChinese;

  const twigFlushFirstBranchEnglish =
    twigFlushFirstBranchContext
    .twigBranchEnglish;

  const twigFlushSecondBranchEnglish =
    twigFlushSecondBranchContext
    .twigBranchEnglish;

  const twigFlushBranchChineseSet =
  [
    twigFlushFirstBranchChinese,
    twigFlushSecondBranchChinese
  ];

  const twigFlushBranchEnglishSet =
  [
    twigFlushFirstBranchEnglish,
    twigFlushSecondBranchEnglish
  ];

  return {
    _type: 'Twig flush context',
    twigFlushBranchChineseSet,
    twigFlushBranchEnglishSet
  };
}

export const twigFlushContextSet =
  R.map(
    mapFunctionOfTwigFlushContext,
    R.range(0, 6));
