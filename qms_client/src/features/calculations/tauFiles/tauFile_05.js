import * as R from 'ramda';

const mapFunctionOfBuiltTauMonthContext_2 =
  (payloadForMapFunctionOfBuiltTauMonthContext_2,
  builtTauMonthContext_1) => {

  // As there will not be any sort of month 13
  // in leap month so no adjustments.
  const {
    leapTauMonthChinese,
    finalLeapSolarStartDateMonth,
    finalLeapSolarStartDateDayOfMonth
  } = payloadForMapFunctionOfBuiltTauMonthContext_2;

  const sameLeapTauMonth =
    builtTauMonthContext_1.tauMonthChinese
    == leapTauMonthChinese;

  let builtTauMonthContext_2;

  if(sameLeapTauMonth){
    builtTauMonthContext_2 = {
      ...builtTauMonthContext_1,
      finalLeapSolarStartDateMonth,
      finalLeapSolarStartDateDayOfMonth,
      tauMonthHasLeap: true,
      _type: 'BuiltTauMonthContext_2'
    }
  }
  else {
    builtTauMonthContext_2 = {
      ...builtTauMonthContext_1,
      tauMonthHasLeap: false,
      _type: 'BuiltTauMonthContext_2'
    }
  }

  return buildTauMonthContext_2;
}
