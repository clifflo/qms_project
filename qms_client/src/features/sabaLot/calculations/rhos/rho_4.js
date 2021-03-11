import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  lhContexts_2
} from './rho_2';
import {
  nattos
} from './rho_1';
import {
  lhContexts_3
} from './rho_3';

const getShortHookElementalByOriginal =
  (shortHookOriginal) => {
  const natto = R.find(
    R.propEq('shortHookOriginal', shortHookOriginal),
    nattos);

  if(R.isNil(natto)){
    throw new Error(
      `${shortHookOriginal} is not a valid short hook original.`);
  }

  return natto.shortHookElemental;
}

const getLhContexts_4 = () => {

  const mapFn = (context_3) => {
    const context_2 = R.find(
      R.propEq('longHookName', context_3.longHookName),
      lhContexts_2);
    return {
      ...context_2,
      ...context_3
    }
  }

  return R.map(mapFn, lhContexts_3);
}

export const lhContexts_4 = getLhContexts_4();
