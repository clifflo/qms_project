import * as R from 'ramda';
import { rhocxts_5 } from './rho_5';
import { elrs } from '../twigs/twig_1';

export const getRhocxts_6 = () => {

  const mapFn = lhook => {
    // Non unique Cross Focus Set
    const ncfss = R.map(R.prop('crfcs'), lhook.crosses);

    // Unique Cross Focus Set
    const ucfss = R.uniq(ncfss);

    // Long Hook with hidden
    const isLhhd = ucfss.length < 5;

    // Hidden Cross Focus Set
    const hcfcs = R.difference(elrs, ucfss);
    let rhlh;

    if(isLhhd){
      // Rho Head Long Hook
      rhlh = R.find(
        R.propEq('lhName', '純' + lhook.rhHook),
        rhocxts_5);
    }
    else {
      rhlh = null;
    }

    return {
      ...lhook,
      isLhhd,
      hcfcs,
      rhlh
    }
  }

  return R.map(mapFn, rhocxts_5)
}
