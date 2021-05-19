import * as R from 'ramda';
import {
  builtTauYearContextSet_2
} from './tauFile_06';
const { DateTime } = require("luxon");

const mapFunctionOfChangingType =
  R.map(
    R.set(
      R.lensProp('_type'),
      'TauMonthGlobalContext_1'));

export const tauMonthGlobalContextSet_1 =
  R.compose(
    mapFunctionOfChangingType,
    R.sortBy(R.prop('tauMonthGlobalIndex')),
    R.flatten,
    R.map(R.prop('builtTauMonthContextSet_2')))
  (builtTauYearContextSet_2);

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

    const currentTauMonthGlobalContextSolarStartDateYear
    = tauMonthGlobalContext_1.finalSolarStartDateYear;

    const currentTauMonthGlobalContextSolarStartDateMonth
    = tauMonthGlobalContext_1.finalSolarStartDateMonth;

    const
    currentTauMonthGlobalContextSolarStartDateDayOfMonth =
    tauMonthGlobalContext_1.finalSolarStartDateDayOfMonth;

    const
    currentTauMonthGlobalContextSolarStartDateContext =
    {
      year:
      currentTauMonthGlobalContextSolarStartDateYear,
      month:
      currentTauMonthGlobalContextSolarStartDateMonth,
      day:
      currentTauMonthGlobalContextSolarStartDateDayOfMonth,
    };

  }
};
