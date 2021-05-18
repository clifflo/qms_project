import * as R from 'ramda';
import {
  originalTauMonthContextSet
} from './tauFile_02';
import {
  getItemByNumberFromList,
  checkNilWithNumber,
  throwFunctionalError
} from './utilityHubCloneOfTau';

export const mapFunctionOfBuiltTauMonthContext_1 =
  (payloadForMapFunctionOfBuiltTauMonthContext_1,
  tauMonthIndex) => {

  try{
    const {
      rawSolarStartDateYear,
      tauYearTwigFullComboChinese,
      groundTauMonthStartDates
    } = payloadForMapFunctionOfBuiltTauMonthContext_1;

    const tauMonthStartDate =
      groundTauMonthStartDates[tauMonthIndex];

    const rawSolarStartDateMonth =
      parseInt(R.take(2, tauMonthStartDate));

    const solarStartDateDayOfMonth =
      parseInt(R.takeLast(2, tauMonthStartDate));

    let finalSolarStartDateYear;
    let finalSolarStartDateMonth;

    if(rawSolarStartDateMonth == 13){
      finalSolarStartDateYear =
        parseInt(rawSolarStartDateYear) + 1;
      finalSolarStartDateMonth = 1;
    }
    else {
      finalSolarStartDateMonth =
        parseInt(rawSolarStartDateMonth);
      finalSolarStartDateYear =
        parseInt(rawSolarStartDateYear);
    }

    checkNilWithNumber(
      finalSolarStartDateMonth,
      'finalSolarStartDateMonth');

    checkNilWithNumber(
      finalSolarStartDateYear,
      'finalSolarStartDateYear');

    const originalTauMonthContext =
      getItemByNumberFromList(
        originalTauMonthContextSet,
        tauMonthIndex,
        'tauMonthIndex');

    const builtTauMonthContext_1 = {
      ...originalTauMonthContext,
      finalSolarStartDateYear,
      finalSolarStartDateMonth,
      solarStartDateDayOfMonth,
      tauYearTwigFullComboChinese,
      _type: 'BuiltTauMonthContext_1'
    };

    return builtTauMonthContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapFunctionOfBuiltTauMonthContext_1');
  }

}
