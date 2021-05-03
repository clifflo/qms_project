import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropEq
} from '../../utils/util_04';
import {
  dfcns,
  dfens,
  dfcdl,
  rhocs_4
} from './rho_08';
import {
  getElre
} from '../../twigs/twig_02';
import {
  getDfdbrf
} from './rho_09';

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, _lhcros) => {

    try{
      const rrawf = getElre(
        rhshel, _lhcros.crbel);

      if(R.isNil(rrawf)){
        throw new Error(
          '[rrawf] should not be nil.');
      }

      // Delta focus dictionary
      const dlfdi = getDfdbrf(rrawf);
      const { dfccn } = dlfdi;

      if(R.isNil(dfccn)){
        throw new Error(
          '[dfccn] should not be nil.');
      }

      const lhcros = {
        ..._lhcros,
        dfccn
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
        '[mapFn_2] is error.');
    }
  }

  return R.map(mapFn_2, rhocs_4);
}

export const rhocs_5 = getRhocs_5();
