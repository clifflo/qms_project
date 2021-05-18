import * as R from 'ramda';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';
import {
  originalTauYearContextSet
} from './tauFile_01';
import {
  mapFunctionOfBuiltTauMonthContext_1
} from './tauFile_03';
import {
  checkNilWithArray,
  throwFunctionalError
} from './utilityHubCloneOfTau';

const mapFunctionOfBuiltTauYearContext_1 =
  originalTauYearContextSet => {

  try{

    const { tauMonthStartDates } =
      originalTauYearContextSet;

    checkNilWithArray(
      tauMonthStartDates,
      'tauMonthStartDates');

    // Ground here stands for non leap
    // month start date
    const groundTauMonthStartDates =
      R.init(
        originalTauYearContextSet
        .tauMonthStartDates);

    const leapTauMonthStartDate =
      R.last(
        originalTauYearContextSet
        .tauMonthStartDates);

    const rawSolarStartDateYear =
      originalTauYearContextSet.rawSolarStartDateYear;

    const twigComboIndex =
      (rawSolarStartDateYear - 1984) % 60;

    const tauYearTwigFullComboChinese =
      getTwigFullComboChineseByIndex(
        twigComboIndex);

    const payloadForMapFunctionOfBuiltTauMonthContext_1 =
    {
      rawSolarStartDateYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDates
    };

    const loadedMapFunctionOfBuiltTauMonthContext_1 =
      R.curry(mapFunctionOfBuiltTauMonthContext_1)
      (payloadForMapFunctionOfBuiltTauMonthContext_1);

    const builtTauMonthContextSet_1 =
      R.map(
        loadedMapFunctionOfBuiltTauMonthContext_1,
        R.range(0, 6));

    const builtTauYearContext_1 = {
      _type: 'BuiltTauYearContext_1',
      builtTauMonthContextSet_1,
      rawSolarStartDateYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDates,
      leapTauMonthStartDate
    };

    return builtTauYearContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfBuiltTauYearContext_1');

  }
}

export const builtTauYearContextSet_1 =
  R.map(
    mapFunctionOfBuiltTauYearContext_1,
    originalTauYearContextSet);
