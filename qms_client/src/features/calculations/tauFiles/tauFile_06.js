import * as R from 'ramda';
import {
  builtTauYearContextSet_1,
  mapFunctionOfBuiltTauMonthContextWithLeap_2,
  mapFunctionOfBuiltTauMonthContextWithoutLeap_2,
} from './tauMiniHub_01';

export const mapFunctionOfBuiltTauYearContext_2 =
  builtTauYearContext_1 => {

  const leapTauMonthStartDateMonthdayPattern =
     /(.+): (.+)-(.+)/;

  const { leapTauMonthStartDateMonthday } =
    builtTauYearContext_1;

  if(leapTauMonthStartDateMonthday){

    const matchedLeapTauMonthStartDateMonthday =
      leapTauMonthStartDateMonthday
      .match(leapTauMonthStartDateMonthdayPattern);

    const leapTauMonthChinese =
      matchedLeapTauMonthStartDateMonthday[1]
      + '月';

    const finalLeapSolarStartDateMonth =
      parseInt(
        matchedLeapTauMonthStartDateMonthday[2]);

    const finalLeapSolarStartDateDay =
      parseInt(
        matchedLeapTauMonthStartDateMonthday[3]);

    const { finalLeapSolarStartDateYear } =
      builtTauYearContext_1;

    const leapStartDateLuxonBus = {
      day: finalLeapSolarStartDateDay,
      month: finalLeapSolarStartDateMonth,
      year: finalLeapSolarStartDateYear
    };

    const
    payloadForMapFunctionOfBuiltTauMonthContextWithLeap_2 =
    {
      leapTauMonthChinese,
      finalLeapSolarStartDateMonth,
      finalLeapSolarStartDateDay
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
