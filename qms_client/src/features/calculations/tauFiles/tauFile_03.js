import * as R from 'ramda';
import {
  tauRawMonthContextSet
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
import {
  getSolarStartDateUnwrappedContext
} from './tauFile_02';

export const mapFunctionOfTauLocalMonthContext_1 =
  (payloadForMapFunctionOfTauLocalMonthContext_1,
  tauMonthIndex) => {

  try{

    const {
      tauYearTwigFullComboChinese,
      solarStartDateWrappedYear,
      groundTauMonthStartDateMonthdaySet,
    } = payloadForMapFunctionOfTauLocalMonthContext_1;

    const solarStartDateUnwrappedContext =
      getSolarStartDateUnwrappedContext(
        solarStartDateWrappedYear,
        groundTauMonthStartDateMonthdaySet,
        tauMonthIndex);

    const {
      solarStartDateYear,
      solarStartDateMonth,
      solarStartDateDay
    } = solarStartDateUnwrappedContext;

    const tauRawMonthContext =
      getItemByNumberFromList(
        tauRawMonthContextSet,
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
      + 2 + tauMonthIndex;

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
      ...tauRawMonthContext,
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
