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

    const {
      finalSolarStartDateYear,
      finalSolarStartDateMonth,
      finalSolarStartDateDay,
      finalSolarEndDateYear,
      finalSolarEndDateMonth,
      finalSolarEndDateDay
    } = tauMonthGlobalContext_2;

    const targetStartLuxonBox = {
      day: finalSolarStartDateYear,
      month: finalSolarStartDateMonth,
      year: finalSolarStartDateYear
    };

    const targetStartLuxonCar =
      DateTime.fromObject(targetStartLuxonBox);

    const targetEndLuxonBox = {
      day: finalSolarEndDateYear,
      month: finalSolarEndDateMonth,
      year: finalSolarEndDateYear
    };

    const targetEndLuxorCar =
      DateTime.fromObject(targetEndLuxonBox);

    // The 'fromDateTimes' function creates
    // an interval including the start date
    // but not including the end date,
    // so I need to add back one day to
    // create the interval.
    const targetLuxonCarPark =
      Interval.fromDateTimes(
        targetStartLuxonCar,
        targetEndLuxorCar.plus({ days: 1 }));

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
