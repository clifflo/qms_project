import * as R from 'ramda';
import {
  builtTauYearContextSet_1,
  mapFunctionOfTauLocalMonthContextWithLeap_2,
  mapFunctionOfTauLocalMonthContextWithoutLeap_2,
} from './tauMiniHub_01';

export const
  mapFunctionOfTauLocalYearContext_2 =
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

    const leapMonthStartDateMonth =
      parseInt(
        matchedLeapTauMonthStartDateMonthday[2]);

    const leapMonthStartDateDay =
      parseInt(
        matchedLeapTauMonthStartDateMonthday[3]);

    const { finalLeapMooncakeStartDateYear } =
      builtTauYearContext_1;

    const leapStartDateLuxonBus = {
      day: leapMonthStartDateDay,
      month: leapMonthStartDateMonth,
      year: finalLeapMooncakeStartDateYear
    };

    const
    payloadForMapFunctionOfTauLocalMonthContextWithLeap_2 =
    {
      leapTauMonthChinese,
      leapMonthStartDateMonth,
      leapMonthStartDateDay
    };

    const
    loadedForMapFunctionOfTauLocalMonthContextWithLeap_2 =
      R.curry
      (mapFunctionOfTauLocalMonthContextWithLeap_2)
      (payloadForMapFunctionOfTauLocalMonthContextWithLeap_2);

    const tauLocalMonthContextSet_2 =
      R.map(
        loadedForMapFunctionOfTauLocalMonthContextWithLeap_2,
        builtTauYearContext_1
        .tauLocalMonthContextSet_1);

    const rawTauLocalYearContext_2 = {
      ...builtTauYearContext_1,
      tauLocalMonthContextSet_2,
      _type: 'TauLocalYearContext_2'
    };

    const finalTauLocalYearContext_2 =
      R.dissoc(
        'tauLocalMonthContextSet_1',
        rawTauLocalYearContext_2);

    return finalTauLocalYearContext_2;
  }
  else{

    const tauLocalMonthContextSet_2 =
      R.map(
        mapFunctionOfTauLocalMonthContextWithoutLeap_2,
        builtTauYearContext_1
        .tauLocalMonthContextSet_1);

    const rawTauLocalYearContext_2 = {
      ...builtTauYearContext_1,
      tauLocalMonthContextSet_2,
      _type: 'TauLocalYearContext_2'
    };

    const finalTauLocalYearContext_2 =
      R.dissoc(
        'tauLocalMonthContextSet_1',
        rawTauLocalYearContext_2);

    return finalTauLocalYearContext_2;
  }
}

export const builtTauYearContextSet_2 =
  R.map(
    mapFunctionOfTauLocalYearContext_2,
    builtTauYearContextSet_1);
