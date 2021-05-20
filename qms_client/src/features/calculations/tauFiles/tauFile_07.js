import * as R from 'ramda';
import { DateTime } from 'luxon';
import {
  builtTauYearContextSet_2
} from './tauFile_06';

export const getLuxonCarFromTauGlobalMonthContext =
  tauGlobalMonthContext => {

  const {
    solarStartDateYear,
    solarStartDateMonth,
    solarStartDateDay
  } = tauGlobalMonthContext;

  const tauMonthGlobalContextSolarStartDateLuxonBox =
  {
    year: solarStartDateYear,
    month: solarStartDateMonth,
    day: solarStartDateDay
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
    R.map(R.prop('tauLocalMonthContextSet_2')))
  (builtTauYearContextSet_2);
