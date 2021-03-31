import * as R from 'ramda';
import { lhcts_5 } from './rho_5';
import { elrs } from '../twigs/twig_1';

export const getLhcts_6 = () => {

  const mapFn = lhook => {
    // Non unique Cross Focus Set
    const ncfss = R.map(R.prop('crfcs'), lhook.crosses);

    // Unique Cross Focus Set
    const ucfss = R.uniq(ncfss);

    // Long Hook with hidden
    const isLhhd = ucfss.length < 5;

    // Hidden Cross Focus Set
    const hcfcs = R.difference(elrs, ucfss);

    return {
      lhName: lhook.lhName,
      isLhhd,
      hcfcs
    }
  }

  return R.map(mapFn, lhcts_5)
}
