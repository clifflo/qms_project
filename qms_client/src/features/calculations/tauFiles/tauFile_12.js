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
        flatMooncakeStartLuxonBoxOfTauMonth);

    const leapMooncakeStartDateOfTauMonthLuxonBox = {
      day: leapMooncakeStartDateDay,
      month: leapMooncakeStartDateMonthOTauMonth,
      year: solarStartDateYearOfTauMonth
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

    const leapMooncakeEndDateDayOfTauMonth =
      solarEndDateDayOfTauMonth;

    const leapMooncakeEndDateMonthOfTauMonth =
      solarEndDateMonthOfTauMonth;

    const leapMooncakeEndDateYear =
      solarEndDateYearOfTauMonth;





  }
}
