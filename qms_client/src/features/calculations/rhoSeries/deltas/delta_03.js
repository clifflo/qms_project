import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropEq
} from '../../utils/util_04';
import {
  rhocs_1
} from '../rhos/rho_02';
import {
  rhocs_8,
  getRcxt8ByLhn
} from '../rhos/rho_13';
import {
  getDpebt
} from './delta_02';
import {
  trunkOrder
} from '../../twigs/twig_01';

const getHdrcs = () => {

  const mapFn_1n = (dpdtr, lhname) => {

    E.cknws(dpdtr, 'dpdtr');
    E.cknws(lhname, 'lhname');

    const dpebt = getDpebt(dpdtr);
    const rhocxt_8 = getRcxt8ByLhn(lhname);
    const lhcrsl_1 = rhocxt_8.lhcrsl;

    const mapFn = idx => {
      const lhcros = lhcrsl_1[idx];
      const dplcn = dpebt.dpcst[idx];
      return {
        ...lhcros,
        dplcn: dpebt.dpcst[idx]
      }
    }

    const lhcrsl_2 = R.map(
      mapFn, R.range(0, 6));

    return {
      ...rhocxt_8,
      lhcrsl: lhcrsl_2
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const lhnames = R.map(
    R.prop('lhname'), rhocs_1);

  const mapFn_2 = dpdtr => {

    // Hydrated mini rho context set
    const hmrcs = R.map(
      mapFn_1c(dpdtr), lhnames);

    return {
      dpdtr,
      hmrcs
    };
  }

  try{
    return R.map(
      mapFn_2,
      trunkOrder);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [hyrcs].');
  }

}

export const hdrcs = getHdrcs();

// Get hydrated rho context 1
// We need day trunk and wheat bowl
// long hook.
export const getDlcxt_1 = (wbllhn, dpdtr) => {

  try{
    // Hydrated rho context
    const hdrcxt =
      utFindByPropEq('dpdtr', dpdtr, hdrcs);

    const dlcxt_0 =
      utFindByPropEq('lhname', wbllhn, hdrcxt.hmrcs);

    const dlcxt_1 = {
      ...dlcxt_0,
      _type: 'dlcxt',
      dpdtr
    }

    return dlcxt_1;
  }
  catch(err){
    console.error(err);
    throw new Error(
      '[getDlcxt_1] is error.');

  }



}
