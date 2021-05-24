import * as R from 'ramda';
import {
  tauRawMonthContextSet
} from './tauFile_01';
import {
  findItemByStringFromList
} from './_utilityHubByTau';

export const
  mapFunctionOfTauLocalMonthContextWithLeap_2 =
  (payloadForMapFunctionOfTauLocalMonthContext_2,
  tauLocalMonthContext_1) => {

  // As there will not be any sort of month 13
  // in leap month so no adjustments.
  const {
    leapTauMonthChinese,
    leapMonthStartDateMonth,
    leapMonthStartDateDay
  } = payloadForMapFunctionOfTauLocalMonthContext_2;

  const leapTauMonthEnglish =
    findItemByStringFromList(
      tauRawMonthContextSet,
      leapTauMonthChinese,
      'tauMonthChinese')
    .tauMonthEnglish;

  const {
    solarStartDateDay,
    solarStartDateMonth,
    solarStartDateYear
  } = tauLocalMonthContext_1

  const sameLeapTauMonth =
    tauLocalMonthContext_1.tauMonthChinese
    == leapTauMonthChinese;

  const tauMonthGlobalIndex =
    leapMonthStartDateDay
    + (solarStartDateMonth * 100)
    + (solarStartDateYear * 10000);

  let tauLocalMonthContext_2;

  if(sameLeapTauMonth){
    tauLocalMonthContext_2 = {
      ...tauLocalMonthContext_1,
      leapMonthStartDateMonth,
      leapMonthStartDateDay,
      tauMonthIsAugmented: true,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'TauLocalMonthContext_2'
    }
  }
  else {
    tauLocalMonthContext_2 = {
      ...tauLocalMonthContext_1,
      tauMonthIsAugmented: false,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'TauLocalMonthContext_2'
    }
  }

  return tauLocalMonthContext_2;
}

export const
  mapFunctionOfTauLocalMonthContextWithoutLeap_2 =
  tauLocalMonthContext_1 => {

  const {
    solarStartDateDay,
    solarStartDateMonth,
    solarStartDateYear
  } = tauLocalMonthContext_1;

  const tauMonthGlobalIndex =
    solarStartDateDay
    + (solarStartDateMonth * 100)
    + (solarStartDateYear * 10000);

  return {
    ...tauLocalMonthContext_1,
    _type: 'TauLocalMonthContext_2',
    tauMonthGlobalIndex,
    tauMonthIsAugmented: false,
    tauYearHasLeap: false
  }
}
