import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { decimalToBinary } from '../utils/util_3';
import {
  longHookContexts_1,
  nattos
} from './rho_1';

const getTruncatedNatto =
  (shortHook, isUpperShortTrunk) => {

  const natto = R.find(
    R.propEq('shortHook', shortHook), nattos);

  if(!natto){
    throw new Error(`Cannot find natto. ${shortHook} is not valid.`);
  }

  if(isUpperShortTrunk){
    return {
      soyBean: natto.upperSoyBean,
      mustardSeries: natto.upperMustardSeries
    }
  }
  else {
    return {
      soyBean: natto.lowerSoyBean,
      mustardSeries: natto.lowerMustardSeries
    }
  }

}

const buildCrosses = (
  fullMustardSeries,
  upperSoyBean,
  lowerSoyBean,
  crossSign,
  downwardIndex,
  list) => {

  const crossTrunk = downwardIndex <= 2 ?
    upperSoyBean : lowerSoyBean;

  const crossBranch = fullMustardSeries[downwardIndex];

  return {
    downwardIndex,
    upwardIndex: 5 - downwardIndex,
    crossBranch,
    crossTrunk,
    crossSign,
    crossTwig: crossTrunk + crossBranch
  }

}

export const getLongHookContexts_2 = (longHooks) => {

  const mapFn = (longHook) => {

    const upperShortHookBinary = decimalToBinary(
      longHook.upperShortHookNumber, 3);

    const lowerShortHookBinary = decimalToBinary(
      longHook.lowerShortHookNumber, 3);

    let upperMustardSeries;
    let upperSoyBean;
    let lowerMustardSeries;
    let lowerSoyBean;

    try{
      const upperTruncatedNatto = getTruncatedNatto(
        longHook.upperShortHookOriginal, true);

      const lowerTruncatedNatto = getTruncatedNatto(
        longHook.lowerShortHookOriginal, false);

      upperMustardSeries = upperTruncatedNatto.mustardSeries;
      upperSoyBean = upperTruncatedNatto.soyBean;
      lowerMustardSeries = lowerTruncatedNatto.mustardSeries;
      lowerSoyBean = lowerTruncatedNatto.soyBean;
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot build mustard series.');
    }

    const fullMustardSeries =
      upperMustardSeries + lowerMustardSeries;

    const longHookBinary = decimalToBinary(longHook.longHookNumber);

    const mapFn = R.curry(buildCrosses)
      (fullMustardSeries)
      (upperSoyBean)
      (lowerSoyBean);

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
      fullMustardSeries,
      upperSoyBean,
      lowerSoyBean
    }
  }

  return R.map(mapFn, longHooks)
}

export const longHookContexts_2 =
  getLongHookContexts_2(longHookContexts_1);