import * as R from 'ramda';
import {
  getTwigFullComboChineseByIndex
} from './utilityHubCloneOfTwig';
import {
  mapFunctionOfTauContext_2
} from './tauFile_03'

const mapFunctionOfBuiltTauYearContext_1 =
  originalTauYearContextSet => {

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

  const rawSolarYear =
    originalTauYearContextSet.rawSolarYear;

  const twigComboIndex =
    (rawSolarYear - 1984) % 60;

  const twigFullComboChinese =
    getTwigFullComboChineseByIndex(
      twigComboIndex);

  const {
    rawSolarYear,
    tauYearTwigFullComboChinese,
    groundTauMonthStartDates
  } = payloadForMapFunctionOfBuiltTauMonthContext_1;

  const loadedMapFunctionOfBuiltTauMonthContext_1 =
    R.curry(mapFunctionOfTauContext_2)
    (payloadForMapFunctionOfBuiltTauMonthContext_1);

  const tauMonthContextSet_1 =
    R.map(
      loadedMapFunctionOfTauMonthContext_1,
      R.range(0, 6));

  const builtTauYearContext_1 = {
    _type: 'TauYearContext_1',
    tauMonthContextSet_1,
    rawSolarYear,
    tauYearTwigFullComboChinese,
    groundTauMonthStartDates
    leapTauMonthStartDate,
  };

  return builtTauYearContext_1;
}
