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
  checkNilWithNumber,
  checkNilWithTypedObject,
  throwFunctionalError
} from './utilityHubCloneOfTau';
import {
  getGenericTauMonthActiveContext
} from './tauFile_12';

export const getTauDayContextFromIso =
  sourceDateInIso => {

  try{
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

    const matchedGenericTauMonthActiveContext =
      getGenericTauMonthActiveContext(
        matchedTauMonthGlobalContext_2);

    checkNilWithTypedObject(
      matchedGenericTauMonthActiveContext,
      'matchedGenericTauMonthActiveContext',
      'TauMonthGlobalContext_3');

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
      matchedGenericTauMonthActiveContext
      .solarStartDateDay;

    const tauMonthStartDateMonth =
      matchedGenericTauMonthActiveContext
      .solarStartDateMonth;

    const tauMonthStartDateYear =
      matchedGenericTauMonthActiveContext
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
      ...matchedGenericTauMonthActiveContext,
      tauDayChinese,
      tauDayTwigFullComboChinese,
      sourceDateInIso,
      _type: 'TauDayContext'
    };

    return tauDayContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauDayContext_1');
  }
}
