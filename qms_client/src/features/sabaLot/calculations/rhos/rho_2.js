import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { decimalToBinary } from '../utils/util_3';
import {
  longHooks_1,
  nattos
} from './rho_1';

const buildMustardSeries =
  (shortHook, isUpperShortTrunk) => {

  const natto = R.find(
    R.propEq('shortHook', shortHook), nattos);

  if(!natto){
    throw new Error(`Cannot find natto. ${shortHook} is not valid.`);
  }

  if(isUpperShortTrunk){
    return natto.upperMustardSeries;
  }
  else {
    return natto.lowerMustardSeries;
  }

}

const buildCrosses =
  (fullMustardSeries, crossSign, downwardIndex, list) => {
  return {
    downwardIndex,
    upwardIndex: 5 - downwardIndex,
    mustard: R.drop(1, fullMustardSeries)[downwardIndex],
    crossSign
  }

}

export const getLongHooks_2 = (longHooks) => {

  const mapFn = (longHook) => {

    const upperShortHookBinary = decimalToBinary(
      longHook.upperShortHookNumber, 3);

    const lowerShortHookBinary = decimalToBinary(
      longHook.lowerShortHookNumber, 3);

    let upperMustardSeries;
    let lowerMustardSeries;

    try{
      upperMustardSeries = buildMustardSeries(
        longHook.upperShortHookOriginal, true);

      lowerMustardSeries = buildMustardSeries(
        longHook.lowerShortHookOriginal, false);
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot build mustard series.');
    }

    const fullMustardSeries =
      upperMustardSeries + lowerMustardSeries;

    const longHookBinary = decimalToBinary(longHook.longHookNumber);

    const mapFn = R.curry(buildCrosses)(fullMustardSeries);

    const crosses = RA.mapIndexed(
      mapFn,
      R.drop(1, longHookBinary));

    return {
      ...longHook,
      upperShortHookBinary,
      lowerShortHookBinary,
      upperMustardSeries,
      lowerMustardSeries,
      longHookBinary,
      crosses,
      fullMustardSeries
    }
  }

  return R.map(mapFn, longHooks)
}

export const getLongHooks_3 = (longHooks) => {


}

export const longHooks_2 = getLongHooks_2(longHooks_1);
