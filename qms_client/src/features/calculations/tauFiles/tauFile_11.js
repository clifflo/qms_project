import * as R from 'ramda';
import {
  checkNilWithNumber,
  throwFunctionalError
} from './utilityHubCloneOfTau';
import {
  DateTime
} from 'luxon';

export const getTauMonthGlobalContext_3 =
  tauMonthGlobalContext_2 => {

  try{

    const { tauMonthHasLeap } =
      tauMonthGlobalContext_2;

    if(tauMonthHasLeap){

      const {
        solarStartDateDay,
        solarStartDateMonth,
        solarStartDateYear,
        solarEndDateDay,
        solarEndDateYear,
        solarEndDateMonth,
        leapMonthStartDateMonth,
        leapMonthStartDateDay,
      } = tauMonthGlobalContext_2;

      const flatMonthStartLuxonBox = {
        day: solarStartDateDay,
        month: solarStartDateMonth,
        year: solarStartDateYear
      };

      const flatMonthStartLuxonCar =
        DateTime.fromObject(
          flatMonthStartLuxonBox);

      const leapMonthStartDateYear =
        solarStartDateYear;

      const leapMonthStartLuxonBox = {
        day: leapMonthStartDateDay,
        month: leapMonthStartDateMonth,
        year: leapMonthStartDateYear
      };

      const leapMonthStartLuxonCar =
        DateTime.fromObject(
          leapMonthStartLuxonBox);

      const flatMonthEndLuxonBox =
         leapMonthStartLuxonCar
         .minus({ days: 1 });

      const flatMonthStartDateDay =
        solarStartDateDay;

      checkNilWithNumber(
        flatMonthStartDateDay,
        'flatMonthStartDateDay');

      const flatMonthStartDateMonth =
        solarStartDateMonth;

      checkNilWithNumber(
        flatMonthStartDateMonth,
        'flatMonthStartDateMonth');

      const flatMonthStartDateYear =
        solarStartDateYear;

      checkNilWithNumber(
        flatMonthStartDateYear,
        'flatMonthStartDateYear');

      const flatMonthEndDateDay =
        flatMonthEndLuxonBox
        .day;

      checkNilWithNumber(
        flatMonthEndDateDay,
        'flatMonthEndDateDay');

      const flatMonthEndDateMonth =
        flatMonthEndLuxonBox
        .month;

      checkNilWithNumber(
        flatMonthEndDateMonth,
        'flatMonthEndDateMonth');

      const flatMonthEndDateYear =
        solarStartDateYear;

      checkNilWithNumber(
        flatMonthEndDateYear,
        'flatMonthEndDateYear');

      const leapMonthEndDateDay =
        solarEndDateDay;

      const leapMonthEndDateMonth =
        solarEndDateMonth;

      const leapMonthEndDateYear =
        solarEndDateYear;

      const tauMonthGlobalContext_3 = {
        ...tauMonthGlobalContext_2,
        flatMonthStartDateDay,
        flatMonthStartDateMonth,
        flatMonthStartDateYear,
        flatMonthEndDateDay,
        flatMonthEndDateMonth,
        flatMonthEndDateYear,
        leapMonthStartDateDay,
        leapMonthStartDateMonth,
        leapMonthStartDateYear,
        leapMonthEndDateDay,
        leapMonthEndDateMonth,
        leapMonthEndDateYear,
        _type: 'TauMonthGlobalContext_3'
      };

      return tauMonthGlobalContext_3;
    }
    else {
      return {
        ...tauMonthGlobalContext_2,
        _type: 'TauMonthGlobalContext_3'
      }
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauMonthGlobalContext_3');
  }

}
