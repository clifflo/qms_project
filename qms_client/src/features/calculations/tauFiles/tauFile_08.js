import * as R from 'ramda';
import {
  builtTauYearContextSet_2
} from './tauFile_06';
import {
  getLuxonCarFromTauGlobalMonthContext_1,
  tauMonthGlobalContextSet_1
} from './tauFile_07';

const mapIndexedFunctionOfTauMonthGlobalContext_2 =
  (tauMonthGlobalContext_1,
  tauMonthGlobalContextIndex_1,
  tauMonthGlobalContextSet_1) => {

  const tauMonthGlobalContextSetLength_1 =
    tauMonthGlobalContextSet_1.length;

  if(tauMonthGlobalContextIndex_1
    < tauMonthGlobalContextSetLength_1 - 2){

    const lensIndexOfNextTauMonthGlobalContext_1 =
      R.lensIndex(
        tauMonthGlobalContextIndex_1 + 1);

    const nextTauMonthGlobalContext_1 =
      R.view(lensIndexOfNextTauMonthGlobalContext_1);

    const
    currentTauMonthGlobalContextSolarStartDateLuxonCar =


    const
    currentTauMonthGlobalContextSolarEndDateLuxonCar =
    nextTauMonthGlobalContextSolarStartDateLuxonCar
    .minus({ days: 1 });



  }
};
