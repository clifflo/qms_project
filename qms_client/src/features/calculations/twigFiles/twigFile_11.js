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

const twigBranchSmallCompoundParagraph =
  '子丑合土,寅亥合木,卯戌合火,辰酉合金,巳申合水,午未合火';

const mapFunctionOfTwigBranchSmallCompoundSentence =
  twigBranchSmallCompoundSentence => {

  const twigBranchSmallCompoundFirstPartChinese =
    twigBranchSmallCompoundSentence[0];

  const twigBranchSmallCompoundSecondPartChinese =
    twigBranchSmallCompoundSentence[1];

  const twigBranchSmallCompoundElementalChinese =
    '五行' + twigBranchSmallCompoundSentence[3];

  const twigBranchSmallCompoundElementalEnglish =
    getTwigElementalContextByChinese(
      twigBranchSmallCompoundElementalChinese)
    .twigElementalEnglish;

  checkNilWithString(
    twigBranchSmallCompoundElementalEnglish,
    'Twig branch small compound '
    + 'elemental english');

  const twigBranchSmallCompoundBranchChineseSet =
  [
    twigBranchSmallCompoundFirstPartChinese,
    twigBranchSmallCompoundSecondPartChinese
  ];

  const twigBranchSmallCompoundFirstPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchSmallCompoundFirstPartChinese)
    .twigBranchEnglish;

  const twigBranchSmallCompoundSecondPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchSmallCompoundSecondPartChinese)
    .twigBranchEnglish;

  const twigBranchSmallCompoundBranchEnglishSet =
  [
    twigBranchSmallCompoundFirstPartEnglish,
    twigBranchSmallCompoundSecondPartEnglish
  ];

  return {
    _type: 'Twig branch small compound context',
    twigBranchSmallCompoundElementalChinese,
    twigBranchSmallCompoundElementalEnglish,
    twigBranchSmallCompoundBranchChineseSet,
    twigBranchSmallCompoundBranchEnglishSet
  }
}

export const
  twigBranchSmallCompoundContextSet =
  R.map(
    mapFunctionOfTwigBranchSmallCompoundSentence,
    R.split(
      ',',
      twigBranchSmallCompoundParagraph));
