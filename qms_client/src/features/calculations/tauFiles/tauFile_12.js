import * as R from 'ramda';
import {
  checkNilWithNumber
} from './utilityHubCloneOfTau';

export const buildTauMonthContext_3 =
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

    const flatMooncakeStartDateOfTauMonthLuxonBox = {
      day: solarStartDateDayOfTauMonth,
      month: solarStartDateMonthOfTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const flatMooncakeStartDateOfTauMonthLuxonCar =
      DateTime.fromObject(
        flatMooncakeStartDateLuxonBoxOfTauMonth);

    const leapMooncakeStartDateOfTauMonthLuxonBox = {
      day: leapMooncakeStartDateDay,
      month: leapMooncakeStartDateMonthOTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const leapMooncakeStartDateOfTauMonthLuxonCar =
      DateTime.fromObject(
        leapMooncakeStartDateLuxonBox);

    const flatMooncakeEndDateLuxonBox =
       leapMooncakeStartDateOfTauMonthLuxonCar
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
      flatMooncakeEndDateLuxonBox
      .day;

    checkNilWithNumber(
      flatMooncakeEndDateDay,
      'flatMooncakeEndDateDay');

    const flatMooncakeEndDateMonthOfTauMonth =
      flatMooncakeEndDateLuxonBox
      .month;

    const flatMooncakeEndDateYearOfTauMonth =
      flatMooncakeEndDateLuxonBox
      .year;

    const leapMooncakeStartDateYearOfTauMonth =
      flatMooncakeEndDateLuxonBox
      .year;

    const leapMooncakeEndDateDayOfTauMonth =
      solarEndDateDayOfTauMonth;

    const leapMooncakeEndDateMonthOfTauMonth =
      solarEndDateMonthOfTauMonth;

    const leapMooncakeEndDateYear =
      solarEndDateYearOfTauMonth;





  }
}
