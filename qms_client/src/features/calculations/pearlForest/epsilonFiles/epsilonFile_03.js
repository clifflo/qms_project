export const examineDeltaFocusToRhoFace =
  (sourceDeltaFocusEnglish,
  rhoFaceType,
  expectedElementalRelation,
  deltaDualLongHooksContext_3) => {

  const {
    wheatCrossInHookContextSet_3,
    deltaWheatHookContext_8
  } = deltaDualLongHooksContext_3;

  const wheatRhoJackAtDownwardIndex =
    deltaWheatHookContext_8
    .rhoJackAtDownwardIndex;

  const wheatRhoJackCrossContext_3 =
    wheatCrossInHookContextSet_3
    [wheatRhoJackAtDownwardIndex];

  const wheatRhoJackCrossBranchElementalChinese =
    wheatRhoJackCrossContext_3
    .crossInHookBranchElementalChinese;

  const focusedWheatCrossContext_3 =
    R.find(
      R.propEq('deltaFocusEnglish'),
      sourceDeltaFocusEnglish,
      wheatCrossInHookContextSet_3);

  const focusedBranchElementalChinese =
    focusedWheatCrossContext_3
    .crossInHookBranchElementalChinese;




}
