export const
  buildDeltaLongHookContext_8 =
  deltaLongHookContext_7 => {

  const askingDayBranchChinese =
    deltaLongHookContext_7
    .askingDayBranchChinese;

  const askingDayFlushOpponentChinese =
    getTwigFlushOpponentOfChinese(
      askingDayBranchChinese);

  const askingDayHitOpponentChinese =
    getTwigHitOpponentOfChinese(
      askingDayBranchChinese);

  const askingDayPauseOpponentChinese =
    getTwigPauseOpponentOfChinese(
      askingDayBranchChinese);

  const askingDaySmallAlloyOpponentChinese =
    getTwigSmallAlloyOpponentOfChinese(
      askingDayBranchChinese);

  const askingDayTwigOpponentEnvelop = {
    _type: 'Asking day twig opponent envelop',
    askingDayFlushOpponentChinese,
    askingDayHitOpponentChinese
    askingDayPauseOpponentChinese,
    askingDaySmallAlloyOpponentChinese
  };

  const wheatCrossInHookContextSet_2 =
    deltaLongHookContext_7
    .wheatCrossInHookContextSet_2;

  
}
