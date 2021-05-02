import * as R from 'ramda';
import * as E from '../../examiner';
import {
  trkod
} from '../../twigs/twig_01';
import {
  rhocs_1
} from './rho_01';
import {
  getRcxtvByLhn
} from './rho_05';
import {
  rhocs_7
} from './rho_11';

const getRhocs_8 = () => {

  // [rpilcs] stands for Rho pilot cross
  const mapFn_1n =
    (lhcrsl, dlhdfl, rpilcs) => {

    E.cknwa(lhcrsl, 'lhcrsl');
    E.cknwo(rpilcs, 'rpilcs');
    E.cknwa(dlhdfl, 'dlhdfl');

    const lhcros = lhcrsl[rpilcs.lhcdwi];
    E.cknwo(lhcros);

    const dfccn = rpilcs.dfccn;

    E.cknws(dfccn, 'dfccn');

    // Is rho boxed cross, i.e. a cross
    // with a hidden part.
    const isRbxc = R.includes(
      dfccn, dlhdfl);

    if(isRbxc){
      return {
        isRbxc,
        ...lhcros,
        rpilcs
      }
    }
    else {
      return {
        isRbxc,
        ...lhcros
      }
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    if(!rhocxt.isLklh){
      return rhocxt;
    }
    else {

      const dpilcl = rhocxt.dpilcl;
      const dlhdfl = rhocxt.dlhdfl;

      E.cknwa(dpilcl, 'dpilcl');
      E.cknwa(dlhdfl, 'dlhdfl');

      const lhcrsl =
        R.map(
          mapFn_1c(rhocxt.lhcrsl)(dlhdfl),
          dpilcl);

      E.cknwa(lhcrsl, 'lhcrsl');

      return {
        ...rhocxt,
        _type: 'rpilcs',
        lhcrsl
      }
    }
  }

  try {
    return R.map(mapFn_2, rhocs_7);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCS_8');
  }
}

export const rhocs_8 = getRhocs_8();

export const getRcxt8ByLhn = lhname => {
  try {
    return getRcxtvByLhn(
      lhname, rhocs_8, 8);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_8 by long hook name.')
  }
}
