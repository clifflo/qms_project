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

  const mapFn_1n =
    (lhcrsl, rhhfl, rhlhcl) => {

    E.cknwa(lhcrsl, 'lhcrsl');
    E.cknwa(rhlhcl, 'rhlhcl');
    E.cknwa(rhhfl, 'rhhfl')

    const lhcros = lhcrsl[rhcros.lhcdwi];
    E.cknwo(lhcros);

    const rfcna = rhlhcl.rfcna;

    if(R.isNil(rfcna)){
      throw new Error(
        'RFCHI should not be nil for MAPFN_1.');
    }

    // Is rho boxed cross, i.e. a cross
    // with a hidden part.
    const isRbxcr = R.includes(
      rfcna, rhhfl);

    if(isRbxcr){
      return {
        isRbxcr,
        ...lhcros,
        rhlhcl
      }
    }
    else {
      return {
        isRbxcr,
        ...lhcros
      }
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    if(!rhocxt.isLhhd){
      return rhocxt;
    }
    else {

      const rhlhcl = rhocxt.rhlhcl;
      const rhhfl = rhocxt.rhhfl;

      E.cknwa(rhlhcl, 'rhlhcl');
      E.cknwa(rhhfl, 'rhhfl');

      const lhcrsl =
        R.map(
          mapFn_1c(rhocxt.lhcrsl)(rhhfl),
          rhlhcl);

      if(R.isNil(lhcrsl)){
        throw new Error(
          'LHCRES should not be nil for MAPFN_2.');
      }

      return {
        ...rhocxt,
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
