import * as R from 'ramda';
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
    (lhcres, rhhfl, rhcros) => {

    if(R.isNil(lhcres)){
      throw new Error(
        'LHCRES should not be nil for MAPFN_1');
    }

    if(R.isNil(rhcros)){
      throw new Error(
        'RHCROS should not be nil for MAPFN_1.');
    }

    if(R.isNil(rhhfl)){
      throw new Error(
        'RHFCHS should not be nil for MAPFN_1.');
    }

    const lhcros = lhcres[rhcros.lhcdwi];

    if(R.isNil(lhcros)){
      throw new Error(
        'LHCROS should not be nil for MAPFN_1.');
    }

    const rfcna = rhcros.rfcna;

    if(R.isNil(rfcna)){
      throw new Error(
        'RFCHI should not be nil for MAPFN_1.');
    }

    // Is rho boxed cross, i.e. a cross
    // with a hidden part.
    const isRbxcr = R.includes(
      rfcna, rhhfl);

    if(isRbxcr){
      const rhidcr = rhcros;
      return {
        isRbxcr,
        ...lhcros,
        rhidcr
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

      const rhlhcs = rhocxt.rhlhcs;
      const rhhfl = rhocxt.rhhfl;

      if(R.isNil(rhlhcs)){
        throw new Error(
          'RHCRES should not be nil for MAPFN_2.');
      }

      if(R.isNil(rhhfl)){
        throw new Error(
          'RHFCHS should not be nil for MAPFN_2.');
      }

      const lhcres =
        R.map(
          mapFn_1c(rhocxt.lhcres)(rhhfl),
          rhlhcs);

      if(R.isNil(lhcres)){
        throw new Error(
          'LHCRES should not be nil for MAPFN_2.');
      }

      return {
        ...rhocxt,
        lhcres
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
