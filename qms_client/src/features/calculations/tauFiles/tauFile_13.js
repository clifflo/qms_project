import * as R from 'ramda';
import {
  DateTime
} from 'luxon';
import {
  getTauDayChineseByIndex
} from './tauMiniHub_02';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';
import {
  checkNilWithNumber
} from './utilityHubCloneOfTau';

export const getTauDayContextForCleanMonth =
  (sourceDateInISO,
  tauMonthActiveContext) => {

  const sourceLuxonCar =
    DateTime.fromISO(sourceDateInISO);

  const tauMonthStartDateDay =
    tauMonthActiveContext
    .solarStartDateDay;

  const tauMonthStartDateMonth =
    tauMonthActiveContext
    .solarStartDateMonth;

  const tauMonthStartDateYear =
    tauMonthActiveContext
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

  const referenceTauLuxonBox = {
    day: 16,
    month: 1,
    year: 2021
  };

  const referenceTauLuxonCar =
    DateTime.fromObject(referenceTauLuxonBox);

  const differenceInDaysForCombo =
    sourceLuxonCar.diff(
      referenceTauLuxonCar,
      'days').days;

  checkNilWithNumber(
    differenceInDaysForCombo,
    'differenceInDaysForCombo');

  const tauDayChinese =
    getTauDayChineseByIndex(
      differenceInDaysForDayOfMonth);

  const tauDayTwigFullComboChinese =
    getTwigFullComboChineseByIndex(
      differenceInDaysForCombo % 60);

  const finalTauMonthChineseForDay =
    '淨' + tauMonthActiveContext.tauMonthChinese;

  const tauDayContext = {
    ...tauMonthActiveContext,
    finalTauMonthChineseForDay,
    tauDayChinese,
    tauDayTwigFullComboChinese,
    sourceDateInISO,
    _type: 'TauDayContext'
  };

  return tauDayContext;
}
