import * as R from 'ramda';
import {
  getTwigFullComboChineseByIndex
} from './twigHubCloneOfTau';
import {
  originalTauYearContextSet
} from './tauFile_01';
import {
  mapFunctionOfTauLocalMonthContext_1
} from './tauFile_03';
import {
  checkNilWithArray,
  throwFunctionalError
} from './utilityHubCloneOfTau';

const mapFunctionOfBuiltTauYearContext_1 =
  originalTauYearContextSet => {

  try{

    const { tauMonthStartDateMonthdaySet } =
      originalTauYearContextSet;

    checkNilWithArray(
      tauMonthStartDateMonthdaySet,
      'tauMonthStartDateMonthdaySet');

    // Ground here stands for non leap
    // month start date
    const groundTauMonthStartDateMonthdaySet =
      R.init(
        tauMonthStartDateMonthdaySet);

    const rawLeapTauMonthStartDateMonthday =
      R.last(
        tauMonthStartDateMonthdaySet);

    const finalLeapTauMonthStartDateMonthday =
      R.isEmpty(rawLeapTauMonthStartDateMonthday) ?
      null : rawLeapTauMonthStartDateMonthday;

    const solarStartDateWrappedYear =
      originalTauYearContextSet
      .solarStartDateWrappedYear;

    const twigComboIndex =
      (solarStartDateWrappedYear - 1984) % 60;

    const tauYearTwigFullComboChinese =
      getTwigFullComboChineseByIndex(
        twigComboIndex);

    const payloadForMapFunctionOfTauLocalMonthContext_1 =
    {
      solarStartDateWrappedYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDateMonthdaySet
    };

    const loadedMapFunctionOfTauLocalMonthContext_1 =
      R.curry(mapFunctionOfTauLocalMonthContext_1)
      (payloadForMapFunctionOfTauLocalMonthContext_1);

    const tauLocalMonthContextSet_1 =
      R.map(
        loadedMapFunctionOfTauLocalMonthContext_1,
        R.range(0, 12));

    const builtTauYearContext_1 = {
      _type: 'BuiltTauYearContext_1',
      tauLocalMonthContextSet_1,
      solarStartDateWrappedYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDateMonthdaySet,
      leapTauMonthStartDateMonthday:
      finalLeapTauMonthStartDateMonthday
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
