export const mapFunctionOfBothCrossInHook =
  (rawDeltaWheatHookContext,
  rawDeltaCheeseHookContext,
  crossInHookDownwardIndex) => {

  const wheatCrossInHookContext_0 =
    rawDeltaWheatHookContext
    .crossInHookContextSet_4[
      crossInHookDownwardIndex];

  const cheeseCrossInHookContext_0 =
    rawDeltaCheeseHookContext
    .crossInHookContextSet_3[
      crossInHookDownwardIndex];

  const isStrikeCross =
    wheatCrossInHookContext_0.crossInHookSign !=
    cheeseCrossInHookContext_0.crossInHookSign;

  const cheeseCrossInHookContext_1 = {
    ...cheeseCrossInHookContext_0,
    isStrikeCross,
    _type:
      'Cheese cross in hook context 1'
  };

  const getWheatCrossInHookContext_1 = () => {
    if(isStrikeCross){
      return {
        ...wheatCrossInHookContext_0,
        isStrikeCross,
        referredCheeseCrossInHook_1:
          cheeseCrossInHookContext_1,
        _type:
          'Wheat cross in hook context 1'
      }
    }
    else {
      return {
        ...wheatCrossInHookContext_0,
        isStrikeCross,
        _type: 'Wheat cross in hook context 1'
      }
    }
  }

  const wheatCrossInHookContext_1 =
    getWheatCrossInHookContext_1();

  return {
    wheatCrossInHookContext_1,
    cheeseCrossInHookContext_1
  }
}
