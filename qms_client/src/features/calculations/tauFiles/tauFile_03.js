import {
  tauMonthContextSet
} from './tauFile_02';

export const mapFunctionForTauMonthStartDate =
  (rawSolarYear,
  tauMonthIndex,
  tauMonthStartDate,
  tauYearTwigFullCombo) => {

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

  const tauMonthContext =
    getItemByNumberFromList(
      tauMonthContextSet,
      tauMonthIndex,
      'rawTauMonthIndex');

}
