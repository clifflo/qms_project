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
import {
  getTwigBranchContextByIndex,
  getTwigTrunkContextByChinese,
  getTwigTrunkContextByIndex
} from './twigHubCloneOfTau';

export const mapFunctionOfLocalTauMonthContext_1 =
  (payloadForMapFunctionOfLocalTauMonthContext_1,
  tauMonthIndex) => {

  try{
    const {
      rawSolarStartDateYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDateMonthdaySet
    } = payloadForMapFunctionOfLocalTauMonthContext_1;

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

    const tauMonthBranchChinese =
      getTwigBranchContextByIndex(
        tauMonthIndex + 2)
      .twigBranchChinese;

    const tauYearTrunkIndex =
      getTwigTrunkContextByChinese(
        tauYearTwigFullComboChinese[0])
      .twigTrunkIndex;

    checkNilWithNumber(
      tauYearTrunkIndex,
      'tauYearTrunkIndex');

    const tauMonthTrunkIndex =
      ((tauYearTrunkIndex % 5) * 2)
      + 2
      + tauMonthIndex;

    const tauMonthTrunkChinese =
      getTwigTrunkContextByIndex(
        tauMonthTrunkIndex)
      .twigTrunkChinese;

    const tauMonthTwigFullComboChinese =
      tauMonthTrunkChinese
      + tauMonthBranchChinese;

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

    const localTauMonthContext_1 = {
      ...originalTauMonthContext,
      finalSolarStartDateYear,
      finalSolarStartDateMonth,
      finalSolarStartDateDay,
      tauYearTwigFullComboChinese,
      finalSolarStartDateInIso,
      tauMonthTwigFullComboChinese,
      _type: 'LocalTauMonthContext_1'
    };

    return localTauMonthContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfLocalTauMonthContext_1');
  }

}
