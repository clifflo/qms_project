import * as R from 'ramda';
import {
  builtTauYearContextSet_1,
  mapFunctionOfBuiltTauMonthContextWithLeap_2,
  mapFunctionOfBuiltTauMonthContextWithoutLeap_2,
} from './tauMiniHub_01';

export const mapFunctionOfBuiltTauYearContext_2 =
  builtTauYearContext_1 => {

  const leapTauMonthStartDateInMiddleDetailPattern =
     /(.+): (.+)-(.+)/;

  const { leapTauMonthStartDateInMiddleDetail } =
    builtTauYearContext_1;

  if(leapTauMonthStartDateInMiddleDetail){

    const matchedLeapTauMonthStartDateInMiddleDetail =
      leapTauMonthStartDateInMiddleDetail
      .match(leapTauMonthStartDateInMiddleDetailPattern);

    const leapTauMonthChinese =
      matchedLeapTauMonthStartDateInMiddleDetail[1]
      + '月';

    const finalLeapSolarStartDateMonth =
      parseInt(
        matchedLeapTauMonthStartDateInMiddleDetail[2]);

    const finalLeapSolarStartDateDayOfMonth =
      parseInt(
        matchedLeapTauMonthStartDateInMiddleDetail[3]);

    const
    payloadForMapFunctionOfBuiltTauMonthContextWithLeap_2 =
    {
      leapTauMonthChinese,
      finalLeapSolarStartDateMonth,
      finalLeapSolarStartDateDayOfMonth
    };

    const
    loadedForMapFunctionOfBuiltTauMonthContextWithLeap_2 =
      R.curry
      (mapFunctionOfBuiltTauMonthContextWithLeap_2)
      (payloadForMapFunctionOfBuiltTauMonthContextWithLeap_2);

    const builtTauMonthContextSet_2 =
      R.map(
        loadedForMapFunctionOfBuiltTauMonthContextWithLeap_2,
        builtTauYearContext_1
        .builtTauMonthContextSet_1);

    const rawBuiltTauYearContext_2 = {
      ...builtTauYearContext_1,
      builtTauMonthContextSet_2,
      _type: 'BuiltTauYearContext_2'
    };

    const finalBuiltTauYearContext_2 =
      R.dissoc(
        'builtTauMonthContextSet_1',
        rawBuiltTauYearContext_2);

    return finalBuiltTauYearContext_2;
  }
  else{

    const builtTauMonthContextSet_2 =
      R.map(
        mapFunctionOfBuiltTauMonthContextWithoutLeap_2,
        builtTauYearContext_1
        .builtTauMonthContextSet_1);

    const rawBuiltTauYearContext_2 = {
      ...builtTauYearContext_1,
      builtTauMonthContextSet_2,
      _type: 'BuiltTauYearContext_2'
    };

    const finalBuiltTauYearContext_2 =
      R.dissoc(
        'builtTauMonthContextSet_1',
        rawBuiltTauYearContext_2);

    return finalBuiltTauYearContext_2;
  }
}

export const builtTauYearContextSet_2 =
  R.map(
    mapFunctionOfBuiltTauYearContext_2,
    builtTauYearContextSet_1);
