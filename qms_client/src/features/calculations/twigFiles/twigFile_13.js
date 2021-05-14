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

const mapFunctionOfTwigBranchHitContext =
  twigBranchIndex => {

  const twigBranchHitFirstPartContext =
    getTwigBranchContextByIndex(
      twigBranchIndex);

  const twigBranchHitSecondPartContext =
    getTwigBranchContextByIndex(
      7 - twigBranchIndex);

  const twigBranchHitFirstPartChinese =
    twigBranchHitFirstPartContext
    .twigBranchChinese;

  const twigBranchHitSecondPartChinese =
    twigBranchHitSecondPartContext
    .twigBranchChinese;

  const twigBranchHitFirstPartEnglish =
    twigBranchHitFirstPartContext
    .twigBranchEnglish;

  const twigBranchHitSecondPartEnglish =
    twigBranchHitSecondPartContext
    .twigBranchEnglish;

  const twigBranchHitChineseSet =
  [
    twigBranchHitFirstPartChinese,
    twigBranchHitSecondPartChinese
  ];

  const twigBranchHitEnglishSet =
  [
    twigBranchHitFirstPartEnglish,
    twigBranchHitSecondPartEnglish
  ];

  return {
    twigBranchHitChineseSet,
    twigBranchHitEnglishSet
  };
}

export const twigBranchHitContextSet =
  R.map(
    mapFunctionOfTwigBranchHitContext,
    R.range(0, 6));
