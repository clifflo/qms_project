export const mapFunctionForBothCrossInHook =
  (rawDeltaWheatHookContext,
  rawDeltaCheeseHookContext,
  crossInHookDownwardIndex) => {

  const wheatCrossInHook_0 =
    rawDeltaWheatHookContext
    .crossInHookContextSet_4[
      crossInHookDownwardIndex];

  const cheeseCrossInHook_0 =
    rawDeltaCheeseHookContext
    .crossInHookContextSet_3[
      crossInHookDownwardIndex];

  const isStrikeCross =
    wheatCrossInHook_0.crossInHookSign !=
    cheeseCrossInHook_0.crossInHookSign;

  const cheeseCrossInHook_1 = {
    ...cheeseCrossInHook_0,
    isStrikeCross,
    _type: 'Delta cheese cross in hook 1'
  };

  const getWheatCrossInHook_1 = () => {
    if(isStrikeCross){
      return {
        ...wheatCrossInHook_0,
        isStrikeCross,
        referredCheeseCrossInHook_1:
          cheeseCrossInHook_1,
        _type: 'Delta wheat cross in hook 1'
      }
    }
    else {
      return {
        ...wheatCrossInHook_0,
        isStrikeCross,
        _type: 'Delta wheat cross in hook 1'
      }
    }
  }

  const wheatCrossInHook_1 =
    getWheatCrossInHook_1();

  return {
    wheatCrossInHook_1,
    cheeseCrossInHook_1
  }
}
