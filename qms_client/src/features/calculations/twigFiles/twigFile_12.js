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

  const twigFlushChineseSet =
  [
    twigFlushFirstBranchChinese,
    twigFlushSecondBranchChinese
  ];

  const twigFlushEnglishSet =
  [
    twigFlushFirstBranchEnglish,
    twigFlushSecondBranchEnglish
  ];

  return {
    twigFlushBranchChineseSet,
    twigFlushBranchEnglishSet
  };
}

export const twigFlushContextSet =
  R.map(
    mapFunctionOfTwigFlushContext,
    R.range(0, 6));
