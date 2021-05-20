import * as R from 'ramda';
import {
  originalTauMonthContextSet
} from './tauFile_02';
import {
  findItemByStringFromList
} from './utilityHubCloneOfTau';

export const mapFunctionOfTauLocalMonthContextWithLeap_2 =
  (payloadForMapFunctionOfTauLocalMonthContext_2,
  tauLocalMonthContext_1) => {

  // As there will not be any sort of month 13
  // in leap month so no adjustments.
  const {
    leapTauMonthChinese,
    leapMooncakeStartDateMonthOTauMonth,
    leapMooncakeStartDateDayOfTauMonth
  } = payloadForMapFunctionOfTauLocalMonthContext_2;

  const leapTauMonthEnglish =
    findItemByStringFromList(
      originalTauMonthContextSet,
      leapTauMonthChinese,
      'tauMonthChinese')
    .tauMonthEnglish;

  const {
    solarStartDateDayOfTauMonth,
    solarStartDateMonthOfTauMonth,
    solarStartDateYearOfTauMonth
  } = tauLocalMonthContext_1

  const sameLeapTauMonth =
    tauLocalMonthContext_1.tauMonthChinese
    == leapTauMonthChinese;

  const tauMonthGlobalIndex =
    leapMooncakeStartDateDayOfTauMonth
    + (solarStartDateMonthOfTauMonth * 100)
    + (solarStartDateYearOfTauMonth * 10000);

  let tauLocalMonthContext_2;

  if(sameLeapTauMonth){
    tauLocalMonthContext_2 = {
      ...tauLocalMonthContext_1,
      leapMooncakeStartDateMonthOTauMonth,
      leapMooncakeStartDateDayOfTauMonth,
      tauMonthHasLeap: true,
      tauYearHasLeap: true,
      tauMonthGlobalIndex,
      leapTauMonthEnglish,
      _type: 'TauLocalMonthContext_2'
    }
  }
  else {
    tauLocalMonthContext_2 = {
      ...tauLocalMonthContext_1,
      tauMonthHasLeap: false,
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
    solarStartDateDayOfTauMonth,
    solarStartDateMonthOfTauMonth,
    solarStartDateYearOfTauMonth
  } = tauLocalMonthContext_1;

  const tauMonthGlobalIndex =
    solarStartDateDayOfTauMonth
    + (solarStartDateMonthOfTauMonth * 100)
    + (solarStartDateYearOfTauMonth * 10000);

  return {
    ...tauLocalMonthContext_1,
    _type: 'TauLocalMonthContext_2',
    tauMonthGlobalIndex,
    tauMonthHasLeap: false,
    tauYearHasLeap: false
  }
}
