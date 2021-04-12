import * as R from 'ramda';
import {
  trunkOrder
} from '../../twigs/twig_1';
import {
  rhocs_1
} from './rho_1';
import {
  getRcxtvByLhn
} from './rho_2';
import {
  getRpcstByRdtr
} from './rho_6';
import {
  rhocs_7
} from './rho_7';

const getRhocs_8 = () => {

  const mapFn_1n =
    (lhcres, rhfchs, rhcros) => {

    if(R.isNil(lhcres)){
      throw new Error(
        'LHCRES should not be nil for MAPFN_1');
    }

    if(R.isNil(rhcros)){
      throw new Error(
        'RHCROS should not be nil for MAPFN_1.');
    }

    if(R.isNil(rhfchs)){
      throw new Error(
        'RHFCHS should not be nil for MAPFN_1.');
    }

    const lhcros = lhcres[rhcros.lhcdwi];

    if(R.isNil(lhcros)){
      throw new Error(
        'LHCROS should not be nil for MAPFN_1.');
    }

    const rfchi = rhcros.rfchi;

    if(R.isNil(rfchi)){
      throw new Error(
        'RFCHI should not be nil for MAPFN_1.');
    }

    // Is rho boxed cross, i.e. a cross
    // with a hidden part.
    const isRbxcr = R.includes(
      rfchi, rhfchs);

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

      const rhcres = rhocxt.rhcres;
      const rhfchs = rhocxt.rhfchs;

      if(R.isNil(rhcres)){
        throw new Error(
          'RHCRES should not be nil for MAPFN_2.');
      }

      if(R.isNil(rhfchs)){
        throw new Error(
          'RHFCHS should not be nil for MAPFN_2.');
      }

      const lhcres =
        R.map(
          mapFn_1c(rhocxt.lhcres)(rhfchs),
          rhcres);

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

const getHyrcs = () => {

  const mapFn_1n = (rdtr, lhname) => {

    if(R.isNil(rdtr)){
      throw new Error(
        'RDTR should not be nil.');
    }

    if(R.isNil(lhname)){
      throw new Error(
        'LHNAME should not be nil.');
    }

    const rpcst = getRpcstByRdtr(rdtr);
    const rhocxt_8 = getRcxt8ByLhn(lhname);
    const lhcres_1 = rhocxt_8.lhcres;

    const mapFn = idx => {
      const lhcros = lhcres_1[idx];
      return {
        ...lhcros,
        rplch: rpcst[idx]
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

  const mapFn_2 = rdtr => {
    return {
      rdtr,
      hymrcs: R.map(mapFn_1c(rdtr), lhnames)
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
      'Cannot get HYRCS.');
  }

}

export const hycrs = getHyrcs();
