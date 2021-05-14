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

const mapFunctionOfTwigHitContext =
  twigBranchIndex => {

  const twigHitFirstBranchContext =
    getTwigBranchContextByIndex(
      twigBranchIndex);

  const twigHitSecondBranchContext =
    getTwigBranchContextByIndex(
      7 - twigBranchIndex);

  const twigHitFirstBranchChinese =
    twigHitFirstBranchContext
    .twigBranchChinese;

  const twigHitSecondBranchChinese =
    twigHitSecondBranchContext
    .twigBranchChinese;

  const twigHitFirstBranchEnglish =
    twigHitFirstBranchContext
    .twigBranchEnglish;

  const twigHitSecondBranchEnglish =
    twigHitSecondBranchContext
    .twigBranchEnglish;

  const twigHitChineseSet =
  [
    twigHitFirstBranchChinese,
    twigHitSecondBranchChinese
  ];

  const twigHitEnglishSet =
  [
    twigHitFirstBranchEnglish,
    twigHitSecondBranchEnglish
  ];

  return {
    _type: 'Twig hit context',
    twigHitChineseSet,
    twigHitEnglishSet
  };
}

export const twigHitContextSet =
  R.map(
    mapFunctionOfTwigHitContext,
    R.range(0, 6));
