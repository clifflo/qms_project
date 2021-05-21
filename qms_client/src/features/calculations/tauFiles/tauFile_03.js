import * as R from 'ramda';
import {
  originalTauMonthContextSet
} from './tauFile_01';
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

export const mapFunctionOfTauLocalMonthContext_1 =
  (payloadForMapFunctionOfTauLocalMonthContext_1,
  tauMonthIndex) => {

  try{
    const {
      solarStartDateWrappedYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDateMonthdaySet
    } = payloadForMapFunctionOfTauLocalMonthContext_1;

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

    const solarStartDateDay =
      parseInt(
        R.takeLast(
          2, tauMonthStartDateMonthday));

    let solarStartDateYear;
    let solarStartDateMonth;

    if(rawSolarStartDateMonth == 13){
      solarStartDateYear =
        parseInt(solarStartDateWrappedYear) + 1;
      solarStartDateMonth = 1;
    }
    else {
      solarStartDateMonth =
        parseInt(rawSolarStartDateMonth);
      solarStartDateYear =
        parseInt(solarStartDateWrappedYear);
    }

    checkNilWithNumber(
      solarStartDateMonth,
      'solarStartDateMonth');

    checkNilWithNumber(
      solarStartDateYear,
      'solarStartDateYear');

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

    const solarStartDateLuxonBox = {
      day: solarStartDateDay,
      month: solarStartDateMonth,
      year: solarStartDateYear
    };

    const solarStartDateLuxonCar =
      DateTime.fromObject(
        solarStartDateLuxonBox);

    const solarStartDateInIso =
      solarStartDateLuxonCar
      .toISODate();

    const tauLocalMonthContext_1 = {
      ...originalTauMonthContext,
      solarStartDateYear,
      solarStartDateMonth,
      solarStartDateDay,
      tauYearTwigFullComboChinese,
      solarStartDateInIso,
      tauMonthTwigFullComboChinese,
      _type: 'TauLocalMonthContext_1'
    };

    return tauLocalMonthContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfTauLocalMonthContext_1');
  }

}
