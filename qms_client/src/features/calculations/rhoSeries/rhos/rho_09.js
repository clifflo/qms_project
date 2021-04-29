import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rfcns,
  rfens,
  rfmap,
  rhocs_4
} from './rho_08';
import {
  getElre
} from '../../twigs/twig_02';

export const isValidRfcna = rfcna => {

  if(R.isNil(rfcna)){
    throw new Error(
      '[rfcna] should not be nil.');
  }

  if(!RA.isString(rfcna)){
    throw new Error(
      '[rfcna] must be a string.');
  }

  const isValid = R.includes(rfcna, rfcns);

  return isValid;
}

export const isValidRfena = rfena => {

  if(R.isNil(rfena)){
    throw new Error(
      '[rfena] should not be nil.');
  }

  if(!RA.isString(rfena)){
    throw new Error(
      '[rfena] must be a string.');
  }

  const isValid = R.includes(rfena, rfens);

  return isValid;
}

// Get rho focus chinese from raw
const getRfcfr = rrawf => {

  if(R.isNil(rrawf)){
    throw new Error(
      '[rrawf] should not be nil.')
  }

  return R.find(
    R.propEq('rrawf', rrawf), rfmap).rfcna;
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

      const rfcna = getRfcfr(rrawf);

      if(R.isNil(rfcna)){
        throw new Error(
          '[rfcna] should not be nil.');
      }

      const rfcnaLens = R.lensProp('rfcna');

      let lhcros_2 = R.set(
        rfcnaLens, rfcna, lhcros_1);

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
