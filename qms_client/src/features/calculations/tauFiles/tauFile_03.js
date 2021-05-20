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

    const solarStartDateDayOfTauMonth =
      parseInt(
        R.takeLast(
          2, tauMonthStartDateMonthday));

    let solarStartDateYearOfTauMonth;
    let solarStartDateMonthOfTauMonth;

    if(rawSolarStartDateMonth == 13){
      solarStartDateYearOfTauMonth =
        parseInt(solarStartDateWrappedYear) + 1;
      solarStartDateMonthOfTauMonth = 1;
    }
    else {
      solarStartDateMonthOfTauMonth =
        parseInt(rawSolarStartDateMonth);
      solarStartDateYearOfTauMonth =
        parseInt(solarStartDateWrappedYear);
    }

    checkNilWithNumber(
      solarStartDateMonthOfTauMonth,
      'solarStartDateMonthOfTauMonth');

    checkNilWithNumber(
      solarStartDateYearOfTauMonth,
      'solarStartDateYearOfTauMonth');

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
      day: solarStartDateDayOfTauMonth,
      month: solarStartDateMonthOfTauMonth,
      year: solarStartDateYearOfTauMonth
    };

    const solarStartDateLuxonCar =
      DateTime.fromObject(
        solarStartDateLuxonBox);

    const solarStartDateInIso =
      solarStartDateLuxonCar
      .toISODate();

    const tauLocalMonthContext_1 = {
      ...originalTauMonthContext,
      solarStartDateYearOfTauMonth,
      solarStartDateMonthOfTauMonth,
      solarStartDateDayOfTauMonth,
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
