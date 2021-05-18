import * as R from 'ramda';
import {
  getTwigFullComboChineseByIndex
} from './utilityHubCloneOfTwig';
import {
  mapFunctionOfTauContext_2
} from './tauFile_03'

const mapFunctionOfTauYearContext_2 =
  tauYearContext_1 => {

  // Ground here stands for non leap
  // month start date
  const groundTauMonthStartDates =
    R.init(
      tauYearContext_1
      .tauMonthStartDates);

  const leapTauMonthStartDate =
    R.last(
      tauYearContext_1
      .tauMonthStartDates);

  const rawSolarYear =
    tauYearContext_1.rawSolarYear;

  const twigComboIndex =
    (rawSolarYear - 1984) % 60;

  const twigFullComboChinese =
    getTwigFullComboChineseByIndex(
      twigComboIndex);

  const {
    rawSolarYear,
    tauYearTwigFullComboChinese,
    groundTauMonthStartDates
  } = payloadForMapFunctionOfTauContext_2;

  const loadedMapFunctionOfTauMonthContext_2 =
    R.curry(mapFunctionOfTauContext_2)
    (payloadForMapFunctionOfTauContext_2);

  const tauMonthContextSet_2 =
    R.map(
      loadedMapFunctionOfTauMonthContext_2,
      R.range(0, 6));

}
