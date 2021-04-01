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

    // Hidden Cross Focus Set
    const hcfcs = R.difference(elrs, ucfss);
    let rhlh;

    if(isLhhd){

      // Rho Head Long Hook
      const rhlhResult = R.find(
        R.propEq('lhName', '純' + rhocxt.rhHook),
        rhocs_5);

      if(R.isNil(rhlhResult)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

      rhlh = rhlhResult;
    }
    else {
      rhlh = null;
    }

    return {
      ...rhocxt,
      isLhhd,
      hcfcs,
      rhlh
    }
  }

  return R.map(mapFn, rhocs_5)
}

export const rhocs_6 = getRhocs_6();
