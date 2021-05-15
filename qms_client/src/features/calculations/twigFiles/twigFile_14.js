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
  twigPauseHint => {

  const twigPauseFirstPartIndex =
    twigPauseHint * 2;

  const twigPauseSecondPartIndex =
    twigPauseFirstPartIndex - 3;

  const twigPauseFirstPartContext =
    getTwigBranchContextByIndex(
      twigPauseFirstPartIndex);

  const twigPauseSecondPartContext =
    getTwigBranchContextByIndex(
      twigPauseSecondPartIndex);

  const twigPauseFirstPartChinese =
    twigPauseFirstPartContext
    .twigBranchChinese;

  const twigPauseSecondPartChinese =
    twigPauseSecondPartContext
    .twigBranchChinese;

  const twigPauseFirstPartEnglish =
    twigPauseFirstPartContext
    .twigBranchEnglish;

  const twigPauseSecondPartEnglish =
    twigPauseSecondPartContext
    .twigBranchEnglish;

  const twigPauseChineseSet =
  [
    twigPauseFirstPartChinese,
    twigPauseSecondPartChinese
  ];

  const twigPauseEnglishSet =
  [
    twigPauseFirstPartEnglish,
    twigPauseSecondPartEnglish
  ];

  return {
    _type: 'Twig pause context',
    twigPauseChineseSet,
    twigPauseEnglishSet
  };
}

export const twigPauseContextSet =
  R.map(
    mapFunctionOfTwigBranchPauseContext,
    R.range(0, 6));

export const getTwigPauseOpponentOfChinese =
  twigPauseSelfChinese => {

  checkNilWithString(
    twigPauseSelfChinese,
    'Twig pause self chinese');

  const twigPauseContextFindFunction =
    twigPauseContext => {
    return R.includes(
      twigPauseSelfChinese,
      twigPauseContext
      .twigPauseBranchChineseSet);
  }

  const matchedTwigPauseContext =
    R.find(
      twigPauseContextFindFunction,
      twigPauseContextSet);

  checkNilWithTypedObject(
    matchedTwigPauseContext,
    'Matched twig pause context',
    'Twig pause context');

  const matchTwigPauseOpponentChinese =
    R.reject(
      R.equal(twigPauseSelfChinese),
      matchedTwigPauseContext
      .twigPauseBranchChineseSet)[0];

  checkNilWithString(
    matchTwigPauseOpponentChinese,
    'Match twig pause opponent chinese');

  return matchTwigPauseOpponentChinese;
}
