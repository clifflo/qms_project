import * as R from 'ramda';
import {
  originalTauMonthContextSet
} from './tauFile_02';
import {
  findItemByStringFromList
} from './utilityHubCloneOfTau';

export const mapFunctionOfBuiltTauMonthContextWithLeap_2 =
  (payloadForMapFunctionOfBuiltTauMonthContext_2,
  builtTauMonthContext_1) => {

  // As there will not be any sort of month 13
  // in leap month so no adjustments.
  const {
    leapTauMonthChinese,
    finalLeapSolarStartDateMonth,
    finalLeapSolarStartDateDay
  } = payloadForMapFunctionOfBuiltTauMonthContext_2;

  const leapTauMonthEnglish =
    findItemByStringFromList(
      originalTauMonthContextSet,
      leapTauMonthChinese,
      'tauMonthChinese')
    .tauMonthEnglish;

  const {
    finalSolarStartDateDay,
    finalSolarStartDateMonth,
    finalSolarStartDateYear
  } = builtTauMonthContext_1

  const sameLeapTauMonth =
    builtTauMonthContext_1.tauMonthChinese
    == leapTauMonthChinese;

  const tauMonthGlobalIndex =
    finalLeapSolarStartDateDay
    + (finalSolarStartDateMonth * 100)
    + (finalSolarStartDateYear * 10000);

  let builtTauMonthContext_2;

  if(sameLeapTauMonth){
    builtTauMonthContext_2 = {
      ...builtTauMonthContext_1,
      finalLeapSolarStartDateMonth,
      finalLeapSolarStartDateDay,
      tauMonthHasLeap: true,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'BuiltTauMonthContext_2'
    }
  }
  else {
    builtTauMonthContext_2 = {
      ...builtTauMonthContext_1,
      tauMonthHasLeap: false,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'BuiltTauMonthContext_2'
    }
  }

  return builtTauMonthContext_2;
}

export const
  mapFunctionOfBuiltTauMonthContextWithoutLeap_2 =
  builtTauMonthContext_1 => {

  const {
    finalSolarStartDateDay,
    finalSolarStartDateMonth,
    finalSolarStartDateYear
  } = builtTauMonthContext_1;

  const tauMonthGlobalIndex =
    finalSolarStartDateDay
    + (finalSolarStartDateMonth * 100)
    + (finalSolarStartDateYear * 10000);

  return {
    ...builtTauMonthContext_1,
    _type: 'BuiltTauMonthContext_2',
    tauMonthGlobalIndex,
    tauMonthHasLeap: false,
    tauYearHasLeap: false
  }
}
