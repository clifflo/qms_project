import * as R from 'ramda';
import * as E from '../../egghead';
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
    (lhcrsl, rhdnfl, rpilcs) => {

    E.cknwa(lhcrsl, 'lhcrsl');
    E.cknwo(rpilcs, 'rpilcs');
    E.cknwa(rhdnfl, 'rhdnfl');

    const lhcros = lhcrsl[rpilcs.lhcdwi];
    E.cknwo(lhcros);

    const rfcna = rpilcs.rfcna;

    E.cknws(rfcna, 'rfcna');

    // Is rho boxed cross, i.e. a cross
    // with a hidden part.
    const isrbxc = R.includes(
      rfcna, rhdnfl);

    if(isrbxc){
      return {
        isrbxc,
        ...lhcros,
        rpilcs
      }
    }
    else {
      return {
        isrbxc,
        ...lhcros
      }
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    if(!rhocxt.islklh){
      return rhocxt;
    }
    else {

      const rpilcl = rhocxt.rpilcl;
      const rhdnfl = rhocxt.rhdnfl;

      E.cknwa(rpilcl, 'rpilcl');
      E.cknwa(rhdnfl, 'rhdnfl');

      const lhcrsl =
        R.map(
          mapFn_1c(rhocxt.lhcrsl)(rhdnfl),
          rpilcl);

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
