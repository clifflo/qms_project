import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../egghead';
import {
  utFindByPropEq
} from '../../utils/util_04';
import {
  dfcns,
  dfens,
  dfcsm,
  rhocs_4
} from './rho_08';
import {
  getElre
} from '../../twigs/twig_02';

export const isValidRfcna = dfccn => {

  if(R.isNil(dfccn)){
    throw new Error(
      '[dfccn] should not be nil.');
  }

  if(!RA.isString(dfccn)){
    throw new Error(
      '[dfccn] must be a string.');
  }

  const isValid = R.includes(dfccn, dfcns);

  return isValid;
}

// Get delta focus chinese by rho raw focus
const getDfcbrf = rrawf => {

  E.cknws(rrawf, 'rrawf');

  try{
    const dfcbrf =
      utFindByPropEq('rrawf', rrawf, dfcsm)
      .dfccn;
    return dfcbrf;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfcbrf].');
  }




}

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, lhcros_1) => {

    try{
      const rrawf = getElre(
        rhshel, lhcros_1.crbel);

      if(R.isNil(rrawf)){
        throw new Error(
          '[rrawf] should not be nil.');
      }

      const dfccn = getDfcbrf(rrawf);

      if(R.isNil(dfccn)){
        throw new Error(
          '[dfccn] should not be nil.');
      }

      const dfccnLens = R.lensProp('dfccn');

      let lhcros_2 = R.set(
        dfccnLens, dfccn, lhcros_1);

      return lhcros_2;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'MAPFN_1 is error for get RHOCS_5.');
    }
  }
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt_4 => {
    try{

      const lhcrsl = R.map(
        mapFn_1c(rhocxt_4.rhshel),
        rhocxt_4.lhcrsl);

      const lhcrslLens = R.lensProp('lhcrsl');

      const rhocxt_5 = R.set(
        lhcrslLens, lhcrsl, rhocxt_4);
      return rhocxt_5;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'MAPFN_2 for get RHOCS_5 is error.');
    }
  }

  return R.map(mapFn_2, rhocs_4);
}

export const rhocs_5 = getRhocs_5();
