import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
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

// Get delta focus envelop by rho raw focus
const getDfebrf = rrawf => {

  E.cknws(rrawf, 'rrawf');

  try{
    const dfebrf =
      utFindByPropEq('rrawf', rrawf, dfcsm)
    return dfebrf;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [dfcbrf].');
  }
}

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, _lhcros) => {

    try{
      const rrawf = getElre(
        rhshel, _lhcros.crbel);

      if(R.isNil(rrawf)){
        throw new Error(
          '[rrawf] should not be nil.');
      }

      // Delta focus envelop
      const dlfev = getDfebrf(rrawf);
      const { dfccn, dfcsen } = dlfev;

      if(R.isNil(dfccn)){
        throw new Error(
          '[dfccn] should not be nil.');
      }

      const lhcros = {
        ..._lhcros,
        dfccn,
        dfcsen
      }

      return lhcros;
    }
    catch(err){
      console.error(err);
      throw new Error(
        '[mapFn_1n] is error.');
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
