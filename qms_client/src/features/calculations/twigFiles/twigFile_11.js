import * as R from 'ramda';

const twigBranchSmallCompoundParagraph =
  '子丑合土,寅亥合木,卯戌合火,辰酉合金,巳申合水,午未合火';

const mapFunctionOfTwigBranchSmallCompoundSentence =
  twigBranchSmallCompoundSentence => {

  const twigBranchSmallCompoundFirstPartChinese =
    twigBranchSmallCompoundSentence[0];

  const twigBranchSmallCompoundSecondPartChinese =
    twigBranchSmallCompoundSentence[1];

  const twigBranchSmallCompoundElementalChinese =
    twigBranchSmallCompoundSentence[3];

  const twigBranchSmallCompoundBranchChineseSet =
  [
    twigBranchSmallCompoundFirstPartChinese,
    twigBranchSmallCompoundSecondPartChinese
  ]

  return {
    _type: 'Twig branch small compound context',
    twigBranchSmallCompoundElementalChinese,
    twigBranchSmallCompoundBranchChineseSet
  }
}

export const
  twigBranchSmallCompoundContextSet =
  R.map(
    mapFunctionOfTwigBranchSmallCompoundSentence,
    twigBranchSmallCompoundParagraph);
