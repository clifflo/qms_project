import * as R from 'ramda';
import {
  builtTauYearContextSet_2
} from './tauFile_06';

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
  null;
