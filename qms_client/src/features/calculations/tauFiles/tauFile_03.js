import {
  originalTauMonthContextSet
} from './tauFile_02';

export const mapFunctionOfBuiltTauMonthContext_1 =
  (payloadForMapFunctionOfBuiltTauMonthContext_1,
  tauMonthIndex) => {

  const {
    rawSolarYear,
    tauYearTwigFullComboChinese,
    groundTauMonthStartDates
  } = payloadForMapFunctionOfBuiltTauMonthContext_1;

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

  const builtTauMonthContext_1 = {
    _type: 'BuiltTauMonthContext_1',
    ...originalTauMonthContext,
    solarYear: finalSolarYear,
    solarMonth: finalSolarMonth,
    tauYearTwigFullComboChinese
  };

  return builtTauMonthContext_1;
}
