import * as R from 'ramda';
import {
  getTwigElementalContextByChinese
} from './twigMiniHub_01';
import {
  getTwigBranchContextByChinese
} from './twigMiniHub_02';
import {
  checkNilWithString
} from './utilityHubCloneOfTwig';

const twigSmallCompoundParagraph =
  '子丑合土,寅亥合木,卯戌合火,辰酉合金,巳申合水,午未合火';

const mapFunctionOfTwigSmallCompoundSentence =
  twigSmallCompoundSentence => {

  const twigSmallCompoundFirstPartChinese =
    twigSmallCompoundSentence[0];

  const twigSmallCompoundSecondPartChinese =
    twigSmallCompoundSentence[1];

  const twigSmallCompoundElementalChinese =
    '五行' + twigSmallCompoundSentence[3];

  const twigSmallCompoundElementalEnglish =
    getTwigElementalContextByChinese(
      twigSmallCompoundElementalChinese)
    .twigElementalEnglish;

  checkNilWithString(
    twigSmallCompoundElementalEnglish,
    'Twig branch small compound '
    + 'elemental english');

  const twigSmallCompoundBranchChineseSet =
  [
    twigSmallCompoundFirstPartChinese,
    twigSmallCompoundSecondPartChinese
  ];

  const twigSmallCompoundFirstPartEnglish =
    getTwigBranchContextByChinese(
      twigSmallCompoundFirstPartChinese)
    .twigBranchEnglish;

  const twigSmallCompoundSecondPartEnglish =
    getTwigBranchContextByChinese(
      twigSmallCompoundSecondPartChinese)
    .twigBranchEnglish;

  const twigSmallCompoundBranchEnglishSet =
  [
    twigSmallCompoundFirstPartEnglish,
    twigSmallCompoundSecondPartEnglish
  ];

  return {
    _type: 'Twig branch small compound context',
    twigSmallCompoundElementalChinese,
    twigSmallCompoundElementalEnglish,
    twigSmallCompoundBranchChineseSet,
    twigSmallCompoundBranchEnglishSet
  }
}

export const
  twigSmallCompoundContextSet =
  R.map(
    mapFunctionOfTwigSmallCompoundSentence,
    R.split(
      ',',
      twigSmallCompoundParagraph));
