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
  getTauMonthGlobalContext_3
} from './tauFile_12';

export const getTauDayContext_1 =
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

    const matchedTauMonthGlobalContext_3 =
      getTauMonthGlobalContext_3(
        matchedTauMonthGlobalContext_2);

    checkNilWithTypedObject(
      matchedTauMonthGlobalContext_3,
      'matchedTauMonthGlobalContext_3',
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
      matchedTauMonthGlobalContext_3
      .solarStartDateDayOfTauMonth;

    const tauMonthStartDateMonth =
      matchedTauMonthGlobalContext_3
      .solarStartDateMonthOfTauMonth;

    const tauMonthStartDateYear =
      matchedTauMonthGlobalContext_3
      .solarStartDateYearOfTauMonth;

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

    const tauDayContext_1 = {
      ...matchedTauMonthGlobalContext_3,
      tauDayChinese,
      tauDayTwigFullComboChinese,
      sourceDateInIso,
      _type: 'TauDayContext_1'
    };

    return tauDayContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getTauDayContext_1');
  }


}
