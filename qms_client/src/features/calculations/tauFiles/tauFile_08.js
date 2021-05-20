import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  builtTauYearContextSet_2
} from './tauFile_06';
import {
  getLuxonCarFromTauGlobalMonthContext,
  tauMonthGlobalContextSet_1
} from './tauFile_07';
import {
  throwFunctionalError
} from './utilityHubCloneOfTau';

const mapIndexedFunctionOfTauMonthGlobalContext_2 =
  (currentTauMonthGlobalContext_1,
  currentTauMonthGlobalContextIndex_1,
  tauMonthGlobalContextSet_1) => {

  try{
    const tauMonthGlobalContextSetLength_1 =
      tauMonthGlobalContextSet_1.length;

    if(currentTauMonthGlobalContextIndex_1
      < tauMonthGlobalContextSetLength_1 - 2){

      const lensIndexOfNextTauMonthGlobalContext_1 =
        R.lensIndex(
          currentTauMonthGlobalContextIndex_1 + 1);

      const nextTauMonthGlobalContext_1 =
        R.view(
          lensIndexOfNextTauMonthGlobalContext_1,
          tauMonthGlobalContextSet_1);

      const
      currentTauMonthGlobalContextSolarStartDateLuxonCar =
      getLuxonCarFromTauGlobalMonthContext(
        currentTauMonthGlobalContext_1);

      const
      nextTauMonthGlobalContextSolarStartDateLuxonCar =
      getLuxonCarFromTauGlobalMonthContext(
        nextTauMonthGlobalContext_1);

      const
      currentTauMonthGlobalContextSolarEndDateLuxonCar =
      nextTauMonthGlobalContextSolarStartDateLuxonCar
      .minus({ days: 1 });

      const
      finalSolarEndDateInIso =
      currentTauMonthGlobalContextSolarEndDateLuxonCar
      .toISODate();

      const finalSolarEndDateYear =
      currentTauMonthGlobalContextSolarEndDateLuxonCar
      .year;

      const finalSolarEndDateMonth =
      currentTauMonthGlobalContextSolarEndDateLuxonCar
      .month;

      const finalSolarEndDateDay =
      currentTauMonthGlobalContextSolarEndDateLuxonCar
      .day;

      const tauMonthGlobalContext_2 = {
        ...currentTauMonthGlobalContext_1,
        finalSolarEndDateYear,
        finalSolarEndDateMonth,
        finalSolarEndDateDay,
        finalSolarEndDateInIso,
        _type: 'TauMonthGlobalContext_2'
      };

      return tauMonthGlobalContext_2;
    }
    else {
      const tauMonthGlobalContext_2 = {
        ...currentTauMonthGlobalContext_1,
        finalSolarEndDateYear: 2030,
        finalSolarEndDateMonth: 12,
        finalSolarEndDateDay: 30,
        finalSolarEndDateInIso:
        '2030-12-30',
        _type: 'TauMonthGlobalContext_2'
      };

      return tauMonthGlobalContext_2;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'mapIndexedFunctionOfTauMonthGlobalContext_2');
  }


};

export const tauMonthGlobalContextSet_2 =
  RA.mapIndexed(
    mapIndexedFunctionOfTauMonthGlobalContext_2,
    tauMonthGlobalContextSet_1);
