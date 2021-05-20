import * as R from 'ramda';
import {
  DateTime,
  Interval
} from 'luxon';
import {
  getLuxonCarFromTauGlobalMonthContext
} from './tauFile_07';
import {
  tauMonthGlobalContextSet_2
} from './tauFile_08';
import {
  throwFunctionalError
} from './utilityHubCloneOfTau';

const tauDateMatchInTauMonthGlobalContext_2 =
  (sourceDateInIso,
  tauMonthGlobalContext_2) => {

  try{
    const sourceLuxonCar =
      DateTime.fromISO(sourceDateInIso);

    if(!sourceLuxonCar.isValid){
      throw new Error(
        'Source luxon car is invalid.');
    }

    const {
      finalSolarStartDateYear,
      finalSolarStartDateMonth,
      finalSolarStartDateDay,
      finalSolarEndDateYear,
      finalSolarEndDateMonth,
      finalSolarEndDateDay
    } = tauMonthGlobalContext_2;

    const targetStartLuxonBox = {
      day: finalSolarStartDateDay,
      month: finalSolarStartDateMonth,
      year: finalSolarStartDateYear
    };

    const targetStartLuxonCar =
      DateTime.fromObject(targetStartLuxonBox);

    if(!targetStartLuxonCar.isValid){
      throw new Error(
        'Target start luxon car is invalid.');
    }

    const targetEndLuxonBox = {
      day: finalSolarEndDateDay,
      month: finalSolarEndDateMonth,
      year: finalSolarEndDateYear
    };

    const targetEndLuxonCar =
      DateTime.fromObject(targetEndLuxonBox);

    if(!targetEndLuxonCar.isValid){
      throw new Error(
        'Target end luxon car is invalid.');
    }


    // The 'fromDateTimes' function creates
    // an interval including the start date
    // but not including the end date,
    // so I need to add back one day to
    // create the interval.
    const targetLuxonCarPark =
      Interval.fromDateTimes(
        targetStartLuxonCar,
        targetEndLuxonCar.plus({ days: 1 }));

    const sourceLuxonCarInTargetCarPark =
      targetLuxonCarPark
      .contains(sourceLuxonCar);

    return sourceLuxonCarInTargetCarPark;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'tauDateMatchInTauMonthGlobalContext_2');
  }


}

export const getTauDateContextFromIso =
  sourceDateInIso => {

  const loadedTauDateMatchInTauMonthGlobalContext_2 =
    R.curry
    (tauDateMatchInTauMonthGlobalContext_2)
    (sourceDateInIso);

  const matchedTauMonthGlobalContext_2 =
    R.find(
      loadedTauDateMatchInTauMonthGlobalContext_2,
      tauMonthGlobalContextSet_2);

  return matchedTauMonthGlobalContext_2;
}
