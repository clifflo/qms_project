import * as R from 'ramda';
import {
  getTwigElementalContextByChinese
} from './twigMiniHub_01';
import {
  getTwigBranchContextByChinese
} from './twigMiniHub_02';
import {
  checkNilWithString,
  checkNilWithTypedObject
} from './_utilityHubByTwig';

const twigSmallAlloyParagraph =
  '子丑合土,寅亥合木,卯戌合火,辰酉合金,巳申合水,午未合火';

const mapFunctionOfTwigSmallAlloySentence =
  twigSmallAlloySentence => {

  const twigSmallAlloyFirstPartChinese =
    twigSmallAlloySentence[0];

  const twigSmallAlloySecondPartChinese =
    twigSmallAlloySentence[1];

  const twigSmallAlloyElementalChinese =
    '五行' + twigSmallAlloySentence[3];

  const twigSmallAlloyElementalEnglish =
    getTwigElementalContextByChinese(
      twigSmallAlloyElementalChinese)
    .twigElementalEnglish;

  checkNilWithString(
    twigSmallAlloyElementalEnglish,
    'Twig branch small alloy '
    + 'elemental English');

  const twigSmallAlloyBranchChineseSet =
  [
    twigSmallAlloyFirstPartChinese,
    twigSmallAlloySecondPartChinese
  ];

  const twigSmallAlloyFirstPartEnglish =
    getTwigBranchContextByChinese(
      twigSmallAlloyFirstPartChinese)
    .twigBranchEnglish;

  const twigSmallAlloySecondPartEnglish =
    getTwigBranchContextByChinese(
      twigSmallAlloySecondPartChinese)
    .twigBranchEnglish;

  const twigSmallAlloyBranchEnglishSet =
  [
    twigSmallAlloyFirstPartEnglish,
    twigSmallAlloySecondPartEnglish
  ];

  return {
    _type: 'Twig small alloy context',
    twigSmallAlloyElementalChinese,
    twigSmallAlloyElementalEnglish,
    twigSmallAlloyBranchChineseSet,
    twigSmallAlloyBranchEnglishSet
  }
}

export const
  twigSmallAlloyContextSet =
  R.map(
    mapFunctionOfTwigSmallAlloySentence,
    R.split(
      ',',
      twigSmallAlloyParagraph));

export const getTwigSmallAlloyOpponentOfChinese =
  twigSmallAlloySelfChinese => {

  checkNilWithString(
    twigSmallAlloySelfChinese,
    'Twig small alloy self Chinese');

  const twigSmallAlloyContextFindFunction =
    twigSmallAlloyContext => {
    return R.includes(
      twigSmallAlloySelfChinese,
      twigSmallAlloyContext
      .twigSmallAlloyBranchChineseSet);
  }

  const matchedTwigSmallAlloyContext =
    R.find(
      twigSmallAlloyContextFindFunction,
      twigSmallAlloyContextSet);

  checkNilWithTypedObject(
    matchedTwigSmallAlloyContext,
    'Matched twig small alloy context',
    'Twig small alloy context');

  const matchTwigSmallAlloyOpponentChinese =
    R.reject(
      R.equals(twigSmallAlloySelfChinese),
      matchedTwigSmallAlloyContext
      .twigSmallAlloyBranchChineseSet)[0];

  checkNilWithString(
    matchTwigSmallAlloyOpponentChinese,
    'Match twig small alloy opponent Chinese');

  return matchTwigSmallAlloyOpponentChinese;
}
