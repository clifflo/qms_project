import * as R from 'ramda';

export const examineDeltaFocusToRhoJack =
  (sourceDeltaFocusEnglish,
  deltaLongHookContext_8,
  elementalRelationWithDeltaFocusEnglish) => {

  const wheatRhoJackAtDownwardIndex =
    deltaLongHookContext_8
    .deltaWheatHookContext
    .rhoJackAtDownwardIndex;

  const wheatRhoJackCrossContext_3 =
    deltaLongHookContext_8
    .wheatCrossInHookContextSet_3
    [wheatRhoJackAtDownwardIndex];

  const wheatRhoJackCrossBranchElementalChinese =
    wheatRhoJackCrossContext_3
    .crossInHookBranchElementalChinese;

  const wheatCrossWithSourceDeltaFocusEnglish =
    R.find(
      R.propEq('deltaFocusEnglish'),
      sourceDeltaFocusEnglish)

}
