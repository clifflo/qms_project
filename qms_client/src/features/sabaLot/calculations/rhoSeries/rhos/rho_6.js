import * as R from 'ramda';
import { rhocs_5 } from './rho_5';
import { elrs } from '../twigs/twig_1';

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    // Non unique Cross Focus Set
    const ncfss = R.map(R.prop('crfcs'), rhocxt.crosses);

    if(R.isNil(ncfss)){
      throw new Error(
        'Non Unique Cross Focus Set should '
        + 'not be nil.');
    }

    // Unique Cross Focus Set
    const ucfss = R.uniq(ncfss);

    // Long Hook with hidden
    const isLhhd = ucfss.length < 5;

    // Rho Hidden Hook Focus Set
    const rhhfs = R.difference(elrs, ucfss);
    let rhces;

    if(isLhhd){

      // Rho Head Long Hook
      const rhcesResult = R.find(
        R.propEq('lhname', '純' + rhocxt.rhHook),
        rhocs_5).crosses;

      if(R.isNil(rhcesResult)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

      rhces = rhcesResult;

      return {
        ...rhocxt,
        isLhhd,
        rhhfs,
        rhces
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
