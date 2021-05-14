import * as R from 'ramda';

const mapFunctionOfTwigBranchPauseContext =
  twigBranchPauseHint => {

  const twigBranchPauseFirstPartIndex =
    twigBranchPauseHint * 2;

  const twigBranchPauseSecondPartIndex =
    twigBranchPauseFirstPartIndex - 3;

  const twigBranchPauseFirstPartChinese =
    getTwigBranchContextByIndex(
      twigBranchPauseFirstPartIndex);

  const twigBranchPauseSecondPartChinese =
    getTwigBranchContextByIndex(
      twigBranchPauseSecondPartIndex);

  const twigBranchPauseBranchChineseSet =
  [
    twigBranchPauseFirstPartChinese,
    twigBranchPauseSecondPartChinese
  ];

  const twigBranchPauseFirstPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchPauseFirstPartChinese)
    .twigBranchEnglish;

  const twigBranchPauseSecondPartEnglish =
    getTwigBranchContextByChinese(
      twigBranchPauseSecondPartChinese)
    .twigBranchEnglish;;

  const twigBranchPauseBranchEnglishSet =
  [
    twigBranchPauseEnglishPartChinese,
    twigBranchPauseEnglishPartChinese
  ];

  return {
    twigBranchPauseBranchChineseSet,
    twigBranchPauseBranchEnglishSet
  };
}

export const twigBranchPauseContextSet =
  R.map(
    mapFunctionOfTwigBranchPauseContext,
    R.range(0, 6));
