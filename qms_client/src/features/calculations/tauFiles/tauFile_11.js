import * as R from 'ramda';
import {
  DateTime
} from 'luxon';
import {
  getTauDayChineseByIndex,
  tauDateMatchInTauMonthGlobalContext_2,
  tauMonthGlobalContextSet_2
} from './tauMiniHub_02';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';
import {
  checkNilWithNumber
} from './utilityHubCloneOfTau';

export const getTauDateContextFromIso =
  sourceDateInIso => {

  const sourceLuxonCar =
    DateTime.fromISO(sourceDateInIso);

  const loadedTauDateMatchInTauMonthGlobalContext_2 =
    R.curry
    (tauDateMatchInTauMonthGlobalContext_2)
    (sourceLuxonCar);

  const matchedTauMonthGlobalContext_2 =
    R.find(
      loadedTauDateMatchInTauMonthGlobalContext_2,
      tauMonthGlobalContextSet_2);

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
      'days')
    .days;

  checkNilWithNumber(
    differenceInDaysForCombo,
    'differenceInDaysForCombo');

  const tauMonthStartDateDay =
    matchedTauMonthGlobalContext_2
    .finalSolarStartDateDay;

  const tauMonthStartDateMonth =
    matchedTauMonthGlobalContext_2
    .finalSolarStartDateMonth;

  const tauMonthStartDateYear =
    matchedTauMonthGlobalContext_2
    .finalSolarStartDateYear;

  const tauMonthStartDateLuxonBox = {
    day: tauMonthStartDateDay,
    month: tauMonthStartDateMonth,
    year: tauMonthStartDateYear
  };

  const tauMonthStartDateLuxonCar =
    DateTime.fromObject(
      tauMonthStartDateLuxonBox);

  const differenceInDaysForDayOfMonth =
    sourceLuxonCar.diff(
      tauMonthStartDateLuxonCar,
      'days').days;

  const tauDayChinese =
    getTauDayChineseByIndex(
      differenceInDaysForDayOfMonth);

  const tauDayTwigFullComboChinese =
    getTwigFullComboChineseByIndex(
      differenceInDaysForCombo % 60);

  const tauDayContext = {
    ...matchedTauMonthGlobalContext_2,
    tauDayChinese,
    tauDayTwigFullComboChinese,
    sourceDateInIso,
    _type: 'TauDayContext'
  };

  return tauDayContext;
}
