import * as R from 'ramda';
import {
  builtTauYearContextSet_1,
  mapFunctionOfBuiltTauMonthContext_2
} from './tauMiniHub_01';

export const mapFunctionOfBuiltTauYearContext_2 =
  builtTauYearContext_1 => {

  const leapTauMonthStartDateInMiddleDetailPattern =
     /(.+): (.+)-(.+)/g;

  const { leapTauMonthStartDateInMiddleDetail } =
    builtTauYearContext_1;

  if(leapTauMonthStartDateInMiddleDetail){
    const matchedLeapTauMonthStartDateInMiddleDetail =
      leapTauMonthStartDateInMiddleDetail
      .match(leapTauMonthStartDateInMiddleDetailPattern);

    const leapTauMonthChinese =
      matchedLeapTauMonthStartDateInMiddleDetail[0]
      + '月';

    const finalLeapSolarStartDateMonth =
      matchedLeapTauMonthStartDateInMiddleDetail[1];

    const finalLeapSolarStartDateDayOfMonth =
      matchedLeapTauMonthStartDateInMiddleDetail[2];

    const payloadForMapFunctionOfBuiltTauMonthContext_2 =
    {
      leapTauMonthChinese,
      finalLeapSolarStartDateMonth,
      finalLeapSolarStartDateDayOfMonth
    };

    const loadedForMapFunctionOfBuiltTauMonthContext_2 =
      R.curry(mapFunctionOfBuiltTauMonthContext_2)
      (payloadForMapFunctionOfBuiltTauMonthContext_2);

    const builtTauMonthContextSet_2 =
      R.map(
        loadedForMapFunctionOfBuiltTauMonthContext_2,
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
        R.set(
          R.lensProp('_type'),
          'BuiltTauYearContext_2'),
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
