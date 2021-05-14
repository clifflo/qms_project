import * as R from 'ramda';

const mapFunctionOfTwigBranchHitContext =
  twigBranchIndex => {

  const twigBranchHitFirstPartChinese =
    getTwigBranchContextByIndex(
      twigBranchIndex);

  const twigBranchHitSecondPartChinese =
    getTwigBranchContextByIndex(
      7 - twigBranchIndex);

  const twigBranchHitBranchChineseSet =
  [
    twigBranchHitFirstPartChinese,
    twigBranchHitSecondPartChinese
  ];

  const twigBranchHitFirstPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchHitFirstPartChinese)
    .twigBranchEnglish;

  const twigBranchHitSecondPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchHitSecondPartChinese)
    .twigBranchEnglish;;

  const twigBranchHitBranchEnglishSet =
  [
    twigBranchHitEnglishPartChinese,
    twigBranchHitEnglishPartChinese
  ];

  return {
    twigBranchHitBranchChineseSet,
    twigBranchHitBranchEnglishSet
  };
}

export const twigBranchHitContextSet =
  R.map(
    mapFunctionOfTwigBranchHitContext,
    R.range(0, 6));
