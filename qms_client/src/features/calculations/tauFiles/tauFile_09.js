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

export const
  tauDateMatchInTauMonthGlobalContext_2 =
  (sourceLuxonCar,
  tauMonthGlobalContext_2) => {

  try{

    if(!sourceLuxonCar.isValid){
      throw new Error(
        'Source luxon car is invalid.');
    }

    const {
      solarStartDateYearOfTauMonth,
      solarStartDateMonthOfTauMonth,
      solarStartDateDayOfTauMonth,
      solarEndDateYearOfTauMonth,
      solarEndDateMonthOfTauMonth,
      solarEndDateDayOfTauMonth
    } = tauMonthGlobalContext_2;

    const targetStartLuxonBox = {
      day: solarStartDateDayOfTauMonth,
      month: solarStartDateMonthOfTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const targetStartLuxonCar =
      DateTime.fromObject(targetStartLuxonBox);

    if(!targetStartLuxonCar.isValid){
      throw new Error(
        'Target start luxon car is invalid.');
    }

    const targetEndLuxonBox = {
      day: solarEndDateDayOfTauMonth,
      month: solarEndDateMonthOfTauMonth,
      year: solarEndDateYearOfTauMonth
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
