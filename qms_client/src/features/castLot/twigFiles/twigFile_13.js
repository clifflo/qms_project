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
} from './_utilityHubByTwig';

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

  const twigHitBranchChineseSet =
  [
    twigHitFirstBranchChinese,
    twigHitSecondBranchChinese
  ];

  const twigHitBranchEnglishSet =
  [
    twigHitFirstBranchEnglish,
    twigHitSecondBranchEnglish
  ];

  return {
    _type: 'Twig hit context',
    twigHitBranchChineseSet,
    twigHitBranchEnglishSet
  };
}

export const twigHitContextSet =
  R.map(
    mapFunctionOfTwigHitContext,
    R.range(0, 6));

export const getTwigHitOpponentOfChinese =
  twigHitSelfChinese => {

  checkNilWithString(
    twigHitSelfChinese,
    'Twig hit self Chinese');

  const twigHitContextFindFunction =
    twigHitContext => {
    return R.includes(
      twigHitSelfChinese,
      twigHitContext
      .twigHitBranchChineseSet);
  }

  const matchedTwigHitContext =
    R.find(
      twigHitContextFindFunction,
      twigHitContextSet);

  checkNilWithTypedObject(
    matchedTwigHitContext,
    'Matched twig hit context',
    'Twig hit context');

  const matchTwigHitOpponentChinese =
    R.reject(
      R.equals(twigHitSelfChinese),
      matchedTwigHitContext
      .twigHitBranchChineseSet)[0];

  checkNilWithString(
    matchTwigHitOpponentChinese,
    'Match twig hit opponent Chinese');

  return matchTwigHitOpponentChinese;
}
