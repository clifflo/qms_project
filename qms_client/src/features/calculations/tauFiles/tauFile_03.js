import * as R from 'ramda';
import {
  originalTauMonthContextSet
} from './tauFile_02';
import {
  getItemByNumberFromList,
  checkNilWithNumber,
  checkNilWithArray,
  throwFunctionalError
} from './utilityHubCloneOfTau';
import {
  DateTime
} from 'luxon';

export const mapFunctionOfBuiltTauMonthContext_1 =
  (payloadForMapFunctionOfBuiltTauMonthContext_1,
  tauMonthIndex) => {

  try{
    const {
      rawSolarStartDateYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDateMonthdaySet
    } = payloadForMapFunctionOfBuiltTauMonthContext_1;

    checkNilWithArray(
      groundTauMonthStartDateMonthdaySet,
      'groundTauMonthStartDateMonthdaySet');

    const tauMonthStartDateMonthday =
      groundTauMonthStartDateMonthdaySet[
        tauMonthIndex];

    const rawSolarStartDateMonth =
      parseInt(
        R.take(
          2, tauMonthStartDateMonthday));

    const finalSolarStartDateDay =
      parseInt(
        R.takeLast(
          2, tauMonthStartDateMonthday));

    let finalSolarStartDateYear;
    let finalSolarStartDateMonth;

    if(rawSolarStartDateMonth == 13){
      finalSolarStartDateYear =
        parseInt(rawSolarStartDateYear) + 1;
      finalSolarStartDateMonth = 1;
    }
    else {
      finalSolarStartDateMonth =
        parseInt(rawSolarStartDateMonth);
      finalSolarStartDateYear =
        parseInt(rawSolarStartDateYear);
    }

    checkNilWithNumber(
      finalSolarStartDateMonth,
      'finalSolarStartDateMonth');

    checkNilWithNumber(
      finalSolarStartDateYear,
      'finalSolarStartDateYear');

    const originalTauMonthContext =
      getItemByNumberFromList(
        originalTauMonthContextSet,
        tauMonthIndex,
        'tauMonthIndex');

    const finalSolarStartDateLuxonBox = {
      day: finalSolarStartDateDay,
      month: finalSolarStartDateMonth,
      year: finalSolarStartDateYear
    };

    const finalSolarStartDateLuxonCar =
      DateTime.fromObject(
        finalSolarStartDateLuxonBox);

    const finalSolarStartDateInIso =
      finalSolarStartDateLuxonCar
      .toISODate();

    const builtTauMonthContext_1 = {
      ...originalTauMonthContext,
      finalSolarStartDateYear,
      finalSolarStartDateMonth,
      finalSolarStartDateDay,
      tauYearTwigFullComboChinese,
      finalSolarStartDateInIso,
      _type: 'BuiltTauMonthContext_1'
    };

    return builtTauMonthContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfBuiltTauMonthContext_1');
  }

}
