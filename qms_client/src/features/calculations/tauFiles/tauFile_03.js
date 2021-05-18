import {
  originalTauMonthContextSet
} from './tauFile_02';

export const mapFunctionOfTauMonthContext_2 =
  (payloadForMapFunctionOfTauMonthContext_2,
  tauMonthIndex) => {

  const {
    rawSolarYear,
    tauYearTwigFullComboChinese,
    groundTauMonthStartDates
  } = payloadForMapFunctionOfTauContext_2;

  const tauMonthStartDate =
    groundTauMonthStartDates[tauMonthIndex];

  const rawSolarMonth =
    R.slice(0, 2, tauMonthStartDate);

  const solarDay =
    R.slice(3, 5, tauMonthStartDate);

  let finalSolarYear;
  let finalSolorMonth;

  if(rawSolorMonth == '13'){
    finalSolarYear =
      (parseInt(rawSolarYear) + 1).toString();
    finalSolarMonth = '01';
  }
  else {
    finalSolorMonth = rawSolorMonth;
    finalSolorYear = rawSolorYear;
  }

  const originalTauMonthContext =
    getItemByNumberFromList(
      tauMonthContextSet,
      tauMonthIndex,
      'tauMonthIndex');

  const tauMonthContext_2 = {
    _type: 'TauMonthContext_2',
    ...originalTauMonthContext,
    solarYear: finalSolarYear,
    solarMonth: finalSolarMonth,
    tauYearTwigFullComboChinese
  };

  return tauMonthContext_2;
}
