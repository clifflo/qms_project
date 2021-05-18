import {
  tauMonthContextSet_1
} from './tauFile_02';

export const mapFunctionForTauMonthStartDate =
  (rawSolarYear,
  tauMonthIndex,
  tauMonthStartDate,
  tauYearTwigFullComboChinese) => {

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

  const tauMonthContext_1 =
    getItemByNumberFromList(
      tauMonthContextSet,
      tauMonthIndex,
      'tauMonthIndex');

  const tauMonthContext_2 = {
    _type: 'TauMonthContext_2',
    ...tauMonthContext_1,
    solarYear: finalSolarYear,
    solarMonth: finalSolarMonth,
    tauYearTwigFullComboChinese
  };

  return tauMonthContext_2;

}
