import * as R from 'ramda';
import { DateTime } from 'luxon';
import {
  builtTauYearContextSet_2
} from './tauFile_06';

export const getLuxonCarFromTauGlobalMonthContext_1 =
  tauGlobalMonthContext_1 => {

  const {
    finalSolarStartDateYear,
    finalSolarStartDateMonth,
    finalSolarStartDateDay
  } = tauGlobalMonthContext_1;

  const tauMonthGlobalContextSolarStartDateLuxonBox =
  {
    year: finalSolarStartDateYear,
    month: finalSolarStartDateMonth,
    day: finalSolarStartDateDay
  };

  const tauMonthGlobalContextSolarStartDateLuxonCar =
  DateTime.fromObject(
    tauMonthGlobalContextSolarStartDateLuxonBox);

  return tauMonthGlobalContextSolarStartDateLuxonCar;
}

const mapFunctionOfTauMonthGlobalContext_1 =
  R.map(
    R.set(
      R.lensProp('_type'),
      'TauMonthGlobalContext_1'));

export const tauMonthGlobalContextSet_1 =
  R.compose(
    mapFunctionOfTauMonthGlobalContext_1,
    R.sortBy(R.prop('tauMonthGlobalIndex')),
    R.flatten,
    R.map(R.prop('builtTauMonthContextSet_2')))
  (builtTauYearContextSet_2);
