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
        solarEndDateDayOfTauMonth,
        solarEndDateYearOfTauMonth,
        solarEndDateMonthOfTauMonth,
        leapMooncakeStartDateMonth,
        leapMooncakeStartDateDay,
      } = tauMonthGlobalContext_2;

      const flatMooncakeStartLuxonBox = {
        day: solarStartDateDay,
        month: solarStartDateMonth,
        year: solarStartDateYear
      };

      const flatMooncakeStartLuxonCar =
        DateTime.fromObject(
          flatMooncakeStartLuxonBox);

      const leapMooncakeStartDateYear =
        solarStartDateYear;

      const leapMooncakeStartLuxonBox = {
        day: leapMooncakeStartDateDay,
        month: leapMooncakeStartDateMonth,
        year: leapMooncakeStartDateYear
      };

      const leapMooncakeStartLuxonCar =
        DateTime.fromObject(
          leapMooncakeStartLuxonBox);

      const flatMooncakeEndLuxonBox =
         leapMooncakeStartLuxonCar
         .minus({ days: 1 });

      const flatMooncakeStartDateDay =
        solarStartDateDay;

      checkNilWithNumber(
        flatMooncakeStartDateDay,
        'flatMooncakeStartDateDay');

      const flatMooncakeStartDateMonth =
        solarStartDateMonth;

      checkNilWithNumber(
        flatMooncakeStartDateMonth,
        'flatMooncakeStartDateMonth');

      const flatMooncakeStartDateYear =
        solarStartDateYear;

      checkNilWithNumber(
        flatMooncakeStartDateYear,
        'flatMooncakeStartDateYear');

      const flatMooncakeEndDateDay =
        flatMooncakeEndLuxonBox
        .day;

      checkNilWithNumber(
        flatMooncakeEndDateDay,
        'flatMooncakeEndDateDay');

      const flatMooncakeEndDateMonth =
        flatMooncakeEndLuxonBox
        .month;

      checkNilWithNumber(
        flatMooncakeEndDateMonth,
        'flatMooncakeEndDateMonth');

      const flatMooncakeEndDateYear =
        solarStartDateYear;

      checkNilWithNumber(
        flatMooncakeEndDateYear,
        'flatMooncakeEndDateYear');

      const leapMooncakeEndDateDay =
        solarEndDateDayOfTauMonth;

      const leapMooncakeEndDateMonth =
        solarEndDateMonthOfTauMonth;

      const leapMooncakeEndDateYear =
        solarEndDateYearOfTauMonth;

      const tauMonthGlobalContext_3 = {
        ...tauMonthGlobalContext_2,
        flatMooncakeStartDateDay,
        flatMooncakeStartDateMonth,
        flatMooncakeStartDateYear,
        flatMooncakeEndDateDay,
        flatMooncakeEndDateMonth,
        flatMooncakeEndDateYear,
        leapMooncakeStartDateDay,
        leapMooncakeStartDateMonth,
        leapMooncakeStartDateYear,
        leapMooncakeEndDateDay,
        leapMooncakeEndDateMonth,
        leapMooncakeEndDateYear,
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
