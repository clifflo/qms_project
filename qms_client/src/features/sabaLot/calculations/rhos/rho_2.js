import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { decimalToBinary } from '../utils/util_3';
import {
  lhContexts_1,
  nattos
} from './rho_1';

const getTruncatedNatto = (
  shOri,
  isUpperShortTrunk) => {

  const natto = R.find(
    R.propEq('shOri', shOri), nattos);

  if(R.isNil(shOri)){
    throw new Error(
      'Short hook original should not be nil.');
  }

  if(!natto){
    throw new Error(
      `Cannot find natto. ${shOri} is not valid.`);
  }

  if(isUpperShortTrunk){
    return {
      soyBean: natto.upperSoyBean,
      mustardSeries: natto.ems
    }
  }
  else {
    return {
      soyBean: natto.lowerSoyBean,
      mustardSeries: natto.ims
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
    crossSign,
    crossTwig: crossTrunk + crossBranch
  }

}

export const getLhContexts_2 = (longHooks) => {

  const mapFn = (longHook) => {

    try {

      const eshBinary = decimalToBinary(
        longHook.eshNumber, 3);

      const ishBinary = decimalToBinary(
        longHook.ishNumber, 3);


      let ems; // External Mustard Series
      let esb; // External Soy Bean
      let ims; // Internal Mustard Series
      let isb; // Internal Soy Bean

      // External truncated natto
      const etn = getTruncatedNatto(
        longHook.eshOri, true);

      // Internal truncated Natto
      const itn = getTruncatedNatto(
        longHook.ishOri, false);

      ems = etn.mustardSeries;
      esb = etn.soyBean;
      ims = itn.mustardSeries;
      isb = itn.soyBean;


      // Full Mustard Series
      const fms = ems + ims;

      const longHookBinary = decimalToBinary(
        longHook.lhNumber,
        6);

      const mapFn = R.curry(buildCrosses)
        (fms)
        (esb)
        (isb);

      const crosses = RA.mapIndexed(
        mapFn,
        R.drop(1, longHookBinary));

      return {
        lhName: longHook.lhName,
        crosses
      }
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot build mustard series.');
    }

  }

  return R.map(mapFn, longHooks)
}

export const lhContexts_2 =
  getLhContexts_2(lhContexts_1);
