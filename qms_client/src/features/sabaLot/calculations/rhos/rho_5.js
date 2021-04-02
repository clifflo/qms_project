import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_4
} from './rho_4';
import {
  getElr,
  idxOfTrunk,
  itemOfTrunk
} from '../twigs/twig_1';

const getRhocs_5 = () => {

  // Map Function 1 non-curried.
  const mapFn_1n = (rhhElem, cross) => {

    const crfcs = getElr(
      rhhElem,
      cross.cbel);

    return {
      ...cross,
      crfcs
    }
  }

  // Map Function 1 curried
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = (lhContext) => {

    const crosses = R.map(
      mapFn_1c(lhContext.rhhElem),
      lhContext.crosses);

    return {
      ...lhContext,
      crosses
    }
  }

  const result = R.map(mapFn_2, rhocs_4);
  return result;
}

export const rhocs_5 = getRhocs_5();

const rpalSce = '青龍,朱雀,勾陳,螣蛇,白虎,玄武';
