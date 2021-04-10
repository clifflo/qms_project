import * as R from 'ramda';
import { pflat } from '../../utils/util_4';
import { utItem, utGetIdx } from '../../utils/util_1';
import { trunkOrder } from '../../twigs/twig_1';

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    // Non unique Rho Focus Set
    const ncfss = R.map(
      R.prop('rofcs'), rhocxt.lhcres);

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
    const rhhfs = R.difference(rfsset, ucfss);

    if(isLhhd){

      // Rho Head Long Hook
      const rhces = R.find(
        R.propEq('lhname', '純' + rhocxt.rhshn),
        rhocs_5).lhcres;

      if(R.isNil(rhces)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

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
