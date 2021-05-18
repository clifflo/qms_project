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
  checkNilWithArray
} from './utilityHubCloneOfTau';

const mapFunctionOfBuiltTauYearContext_1 =
  originalTauYearContextSet => {

  try{

    const { tauMonthFirstDates } =
      originalTauYearContextSet;

    checkNilWithArray(
      tauMonthFirstDates,
      'tauMonthFirstDates');

    // Ground here stands for non leap
    // month start date
    const groundTauMonthStartDates =
      R.init(
        originalTauYearContextSet
        .tauMonthFirstDates);

    const leapTauMonthStartDate =
      R.last(
        originalTauYearContextSet
        .tauMonthFirstDates);

    const rawSolarYear =
      originalTauYearContextSet.rawSolarYear;

    const twigComboIndex =
      (rawSolarYear - 1984) % 60;

    const tauYearTwigFullComboChinese =
      getTwigFullComboChineseByIndex(
        twigComboIndex);

    const payloadForMapFunctionOfBuiltTauMonthContext_1 =
    {
      rawSolarYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDates
    };

    const loadedMapFunctionOfBuiltTauMonthContext_1 =
      R.curry(mapFunctionOfBuiltTauMonthContext_1)
      (payloadForMapFunctionOfBuiltTauMonthContext_1);

    const tauMonthContextSet_1 =
      R.map(
        loadedMapFunctionOfBuiltTauMonthContext_1,
        R.range(0, 6));

    const builtTauYearContext_1 = {
      _type: 'TauYearContext_1',
      tauMonthContextSet_1,
      rawSolarYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDates,
      leapTauMonthStartDate
    };

    return builtTauYearContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'mapFunctionOfBuiltTauYearContext_1 is error.')
  }

}

export const builtTauYearContextSet_1 =
  R.map(
    mapFunctionOfBuiltTauYearContext_1,
    originalTauYearContextSet);
