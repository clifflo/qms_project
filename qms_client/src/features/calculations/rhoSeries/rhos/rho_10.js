import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    // Non unique Rho focus Chinee set
    const ncfcs = R.map(
      R.prop('rfchi'), rhocxt.lhcres);

    if(R.isNil(ncfcs)){
      throw new Error(
        'NCFCS should not be nil.');
    }

    // Unique cross focus Chinese set
    const ucfcs = R.uniq(ncfcs);

    // Long Hook with hidden
    const isLhhd = ucfcs.length < 5;

    // Rho hidden hook focus Chinese set
    const rhfchs = R.difference(rfcis, ucfcs);

    if(isLhhd){

      // Rho Head Long Hook
      const rhcres = R.find(
        R.propEq('lhname', '純' + rhocxt.rhshn),
        rhocs_5).lhcres;

      if(R.isNil(rhcres)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

      return {
        ...rhocxt,
        isLhhd,
        rhfchs,
        rhcres
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
