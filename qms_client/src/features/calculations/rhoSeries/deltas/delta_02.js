import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_1
} from '../rhos/rho_02';
import {
  rhocs_8,
  getRcxt8ByLhn
} from '../rhos/rho_12';
import {
  getDpebt
} from './delta_01';
import {
  trkod
} from '../../twigs/twig_01';

const getHyrcs = () => {

  const mapFn_1n = (dpdtr, lhname) => {

    if(R.isNil(dpdtr)){
      throw new Error(
        'RDTR should not be nil.');
    }

    if(R.isNil(lhname)){
      throw new Error(
        'LHNAME should not be nil.');
    }

    const dpebt = getDpebt(dpdtr);
    const rhocxt_8 = getRcxt8ByLhn(lhname);
    const lhcres_1 = rhocxt_8.lhcres;

    const mapFn = idx => {
      const lhcros = lhcres_1[idx];
      return {
        ...lhcros,
        dplch: dpebt[idx]
      }
    }

    const lhcres_2 = R.map(
      mapFn, R.range(0, 6));

    return {
      ...rhocxt_8,
      lhcres: lhcres_2
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const lhnames = R.map(
    R.prop('lhname'), rhocs_1);

  const mapFn_2 = dpdtr => {

    const hymrcs = R.map(
      mapFn_1c(dpdtr), lhnames);

    return {
      dpdtr,
      hymrcs
    };
  }

  try{
    return R.map(
      mapFn_2,
      trkod);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get HYRCS.');
  }

}

export const hycrs = getHyrcs();
