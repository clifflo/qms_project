import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { decimalToBinary } from '../utils/util_3';
import {
  lhContexts_1,
  nattos,
} from './rho_1';
import {
  getElemOfPlastic
} from '../plastics/plastic_1';

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

    const soyBean = natto.esb;
    const mustardSeries = natto.ems;

    if(R.isNil(soyBean)){
      throw new Error('External Soy bean should not be nil.')
    }

    if(R.isNil(mustardSeries)){
      throw new Error('External Mustard Series should not be nil.');
    }

    return {
      soyBean,
      mustardSeries
    }
  }
  else {

    const soyBean = natto.isb;
    const mustardSeries = natto.ims;

    if(R.isNil(soyBean)){
      throw new Error('Internal Soy bean should not be nil.')
    }

    if(R.isNil(mustardSeries)){
      throw new Error('Internal Mustard Series should not be nil.');
    }

    return {
      soyBean,
      mustardSeries
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
  // Cross Branch Elemental
  const crossBrelem = getElemOfPlastic(crossBranch);

  return {
    crossSign,
    crossTrunk,
    crossBranch,
    crossBrelem
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

      if(R.isNil(esb)){
        throw new Error(
          'External Soy Bean should not be nil.')
      }

      if(R.isNil(isb)){
        throw new Error(
          'Internal Soy Bean should not be nil.')
      }


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
