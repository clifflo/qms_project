import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  lhContexts_4
} from './rho_4';
import {
  getElemRel
} from '../plastics/plastic_1';

const getLhContexts_5 = () => {

  // Map Function 1 non-curried.
  const mapFn_1n = (hhElem, cross) => {

    const focus = getElemRel(
      hhElem,
      cross.crossBrelem);

    return {
      ...cross,
      focus
    }
  }

  // Map Function 1 curried
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = (lhContext) => {

    const crosses = R.map(
      mapFn_1c(lhContext.hhElem),
      lhContext.crosses);

    return {
      ...lhContext,
      crosses
    }
  }

  const result = R.map(mapFn_2, lhContexts_4);
  return result;
}

export const lhContexts_5 = getLhContexts_5();
