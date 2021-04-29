import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rfcns
} from './rho_08';
import {
  rhocs_5
} from './rho_09';
import {
  getRcxtvByLhn
} from './rho_05';

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    const nfcns = R.map(
      R.prop('rfcna'), rhocxt.lhcrsl);

    if(R.isNil(nfcns)){
      throw new Error(
        '[nfcns] should not be nil.');
    }

    // Unique cross focus Chinese set
    const ufcns = R.uniq(nfcns);

    // Long Hook with hidden
    const isLhhd = ufcns.length < 5;

    // Rho hidden hook focus list
    const rhhfl = R.difference(rfcns, ufcns);

    if(isLhhd){

      // Rho Head Long Hook Crosses
      const rhlhcl = R.find(
        R.propEq('lhname', '純' + rhocxt.rhlhn),
        rhocs_5).lhcrsl;

      if(R.isNil(rhlhcl)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

      return {
        ...rhocxt,
        isLhhd,
        rhhfl,
        rhlhcl
      }
    }
    else {
      return {
        ...rhocxt,
        isLhhd
      }
    }

  }

  return R.map(mapFn, rhocs_5)
}

export const rhocs_6 = getRhocs_6();

export const getRcxt6ByLhn = lhname => {

  try {
    return getRcxtvByLhn(
      lhname, rhocs_6, 6);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_6 by long hook name.')
  }
}
