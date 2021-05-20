import * as R from 'ramda';
import {
  originalTauMonthContextSet
} from './tauFile_02';
import {
  findItemByStringFromList
} from './utilityHubCloneOfTau';

export const mapFunctionOfLocalTauMonthContextWithLeap_2 =
  (payloadForMapFunctionOfLocalTauMonthContext_2,
  localTauMonthContext_1) => {

  // As there will not be any sort of month 13
  // in leap month so no adjustments.
  const {
    leapTauMonthChinese,
    finalLeapMooncakeStartDateMonth,
    finalLeapMooncakeStartDateDay
  } = payloadForMapFunctionOfLocalTauMonthContext_2;

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
  } = localTauMonthContext_1

  const sameLeapTauMonth =
    localTauMonthContext_1.tauMonthChinese
    == leapTauMonthChinese;

  const tauMonthGlobalIndex =
    finalLeapMooncakeStartDateDay
    + (finalSolarStartDateMonth * 100)
    + (finalSolarStartDateYear * 10000);

  let localTauMonthContext_2;

  if(sameLeapTauMonth){
    localTauMonthContext_2 = {
      ...localTauMonthContext_1,
      finalLeapMooncakeStartDateMonth,
      finalLeapMooncakeStartDateDay,
      tauMonthHasLeap: true,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'LocalTauMonthContext_2'
    }
  }
  else {
    localTauMonthContext_2 = {
      ...localTauMonthContext_1,
      tauMonthHasLeap: false,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'LocalTauMonthContext_2'
    }
  }

  return localTauMonthContext_2;
}

export const
  mapFunctionOfLocalTauMonthContextWithoutLeap_2 =
  localTauMonthContext_1 => {

  const {
    finalSolarStartDateDay,
    finalSolarStartDateMonth,
    finalSolarStartDateYear
  } = localTauMonthContext_1;

  const tauMonthGlobalIndex =
    finalSolarStartDateDay
    + (finalSolarStartDateMonth * 100)
    + (finalSolarStartDateYear * 10000);

  return {
    ...localTauMonthContext_1,
    _type: 'LocalTauMonthContext_2',
    tauMonthGlobalIndex,
    tauMonthHasLeap: false,
    tauYearHasLeap: false
  }
}
