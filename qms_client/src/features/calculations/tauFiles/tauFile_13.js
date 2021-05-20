import * as R from 'ramda';
import {
  DateTime
} from 'luxon';

export const getTauDayContextForPureMonth =
  tauMonthGlobalContext_3 => {

  const tauMonthStartDateDay =
    tauMonthGlobalContext_3
    .solarStartDateDay;

  const tauMonthStartDateMonth =
    tauMonthGlobalContext_3
    .solarStartDateMonth;

  const tauMonthStartDateYear =
    tauMonthGlobalContext_3
    .solarStartDateYear;

  const tauMonthStartLuxonBox = {
    day: tauMonthStartDateDay,
    month: tauMonthStartDateMonth,
    year: tauMonthStartDateYear
  };

  const tauMonthStartLuxonCar =
    DateTime.fromObject(
      tauMonthStartLuxonBox);

  const differenceInDaysForDayOfMonth =
    sourceLuxonCar.diff(
      tauMonthStartLuxonCar,
      'days').days;

  const tauDayChinese =
    getTauDayChineseByIndex(
      differenceInDaysForDayOfMonth);

  const tauDayTwigFullComboChinese =
    getTwigFullComboChineseByIndex(
      differenceInDaysForCombo % 60);

  const tauDayContext = {
    ...matchedTauMonthGlobalContext_3,
    tauDayChinese,
    tauDayTwigFullComboChinese,
    sourceDateInIso,
    _type: 'TauDayContext_1'
  };

  return tauDayContext;
}

export const getTauDayContextForActiveMonth =
  tauMonthGlobalContext_3 => {

  const {
    flatMooncakeStartDateDay,
    flatMooncakeStartDateMonth,
    flatMooncakeStartDateYear,
    leapMooncakeStartDateDay,
    leapMooncakeStartDateMonth,
    leapMooncakeStartDateYear,
    leapMooncakeEndDateDay,
    leapMooncakeEndDateMonth,
    leapMooncakeEndDateYear,
  } = tauMonthGlobalContext_3;

  const flatMooncakeStartLuxonBox = {
    day: flatMooncakeStartDateDay,
    month: flatMooncakeStartDateMonth,
    year: flatMooncakeStartDateYear
  };

  const flatMooncakeStartLuxonCar =
    DateTime.fromObject(
      flatMooncakeStartLuxonCar);

  const leapMooncakeStartLuxonBox = {
    day: leapMooncakeStartDateDay,
    month: leapMooncakeStartDateMonth,
    year: leapMooncakeStartDateYear
  }



}
