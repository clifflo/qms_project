import * as R from 'ramda';
import {
  getTwigElementalContextByChinese
} from './twigMiniHub_01';
import {
  getTwigBranchContextByChinese,
  getTwigBranchContextByIndex
} from './twigMiniHub_02';
import {
  checkNilWithString,
  checkNilWithTypedObject
} from './utilityHubCloneOfTwig';

const mapFunctionOfTwigBranchPauseContext =
  twigPauseHint => {

  const twigPauseFirstBranchIndex =
    twigPauseHint * 2;

  const twigPauseSecondBranchIndex =
    twigPauseFirstBranchIndex - 3;

  const twigPauseFirstBranchContext =
    getTwigBranchContextByIndex(
      twigPauseFirstBranchIndex);

  const twigPauseSecondBranchContext =
    getTwigBranchContextByIndex(
      twigPauseSecondBranchIndex);

  const twigPauseFirstBranchChinese =
    twigPauseFirstBranchContext
    .twigBranchChinese;

  const twigPauseSecondBranchChinese =
    twigPauseSecondBranchContext
    .twigBranchChinese;

  const twigPauseFirstBranchEnglish =
    twigPauseFirstBranchContext
    .twigBranchEnglish;

  const twigPauseSecondBranchEnglish =
    twigPauseSecondBranchContext
    .twigBranchEnglish;

  const twigPauseBranchChineseSet =
  [
    twigPauseFirstBranchChinese,
    twigPauseSecondBranchChinese
  ];

  const twigPauseBranchEnglishSet =
  [
    twigPauseFirstBranchEnglish,
    twigPauseSecondBranchEnglish
  ];

  return {
    _type: 'Twig pause context',
    twigPauseBranchChineseSet,
    twigPauseBranchEnglishSet
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
    'Twig pause self Chinese');

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
      R.equals(twigPauseSelfChinese),
      matchedTwigPauseContext
      .twigPauseBranchChineseSet)[0];

  checkNilWithString(
    matchTwigPauseOpponentChinese,
    'Match twig pause opponent Chinese');

  return matchTwigPauseOpponentChinese;
}
