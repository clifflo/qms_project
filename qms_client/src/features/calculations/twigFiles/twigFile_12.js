import * as R from 'ramda';

const mapFunctionOfTwigBranchFlushContext =
  twigBranchIndex => {

  const twigBranchFlushFirstPartChinese =
    getTwigBranchContextByIndex(
      twigBranchIndex);

  const twigBranchFlushSecondPartChinese =
    getTwigBranchContextByIndex(
      twigBranchIndex + 6);

  const twigBranchFlushBranchChineseSet =
  [
    twigBranchFlushFirstPartChinese,
    twigBranchFlushSecondPartChinese
  ];

  const twigBranchFlushFirstPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchFlushFirstPartChinese)
    .twigBranchEnglish;

  const twigBranchFlushSecondPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchFlushSecondPartChinese)
    .twigBranchEnglish;;

  const twigBranchFlushBranchEnglishSet =
  [
    twigBranchFlushEnglishPartChinese,
    twigBranchFlushEnglishPartChinese
  ];

  return {
    twigBranchFlushBranchChineseSet,
    twigBranchFlushBranchEnglishSet
  };
}

export const twigBranchFlushContextSet =
  R.map(
    mapFunctionOfTwigBranchFlushContext,
    R.range(0, 6));
