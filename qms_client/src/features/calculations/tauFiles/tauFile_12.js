import * as R from 'ramda';
import {
  checkNilWithNumber
} from './utilityHubCloneOfTau';

export const getTauMonthContext_3 =
  tauMonthGlobalContext_2 => {

  const { tauMonthHasLeap } = tauMonthGlobalContext_2;

  if(tauMonthHasLeap){

    const {
      solarStartDateDayOfTauMonth,
      solarStartDateMonthOfTauMonth,
      solarStartDateYearOfTauMonth,
      solarEndDateDayOfTauMonth,
      solarEndDateYearOfTauMonth,
      solarEndDateMonthOfTauMonth,
      leapMooncakeStartDateMonth,
      leapMooncakeStartDateDay,
    } = tauMonthGlobalContext_2;

    const flatMooncakeStartLuxonBox = {
      day: solarStartDateDayOfTauMonth,
      month: solarStartDateMonthOfTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const flatMooncakeStartDateOfTauMonthLuxonCar =
      DateTime.fromObject(
        flatMooncakeStartLuxonBoxOfTauMonth);

    const leapMooncakeStartDateYear =
      solarStartDateYear;

    const leapMooncakeStartDateLuxonBox = {
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
      solarStartDateDayOfTauMonth;

    checkNilWithNumber(
      flatMooncakeStartDateDay,
      'flatMooncakeStartDateDay');

    const flatMooncakeStartDateMonth =
      solarStartDateMonthOfTauMonth;

    checkNilWithNumber(
      flatMooncakeStartDateMonth,
      'flatMooncakeStartDateMonth');

    const flatMooncakeStartDateYear =
      solarStartDateYearOfTauMonth;

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
      solarStartDateYearOfTauMonth;

    checkNilWithNumber(
      flatMooncakeEndDateYear,
      'flatMooncakeEndDateYear');

    const leapMooncakeStartDateYear =
      flatMooncakeEndLuxonBox
      .year;

    const leapMooncakeEndDateDay =
      solarEndDateDayOfTauMonth;

    const leapMooncakeEndDateMonth =
      solarEndDateMonthOfTauMonth;

    const leapMooncakeEndDateYear =
      solarEndDateYearOfTauMonth;

    const tauMonthContext_3 = {
      ...tauMonthContext_2,
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
      leapMooncakeEndDateYear
    }



  }
  else {
    return {
      ...tauMonthGlobalContext_2,
      _type: 'TauMonthGlobalContext_3'
    }
  }
}
