import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookContexts_2
} from './rho_2';
import {
  nattos
} from './rho_1';

const getShortHookElementalByOriginal =
  (shortHookOriginal) => {
  const natto = R.find(
    R.propEq('shortHookOriginal', shortHookOriginal),
    nattos);

  if(R.isNil(result)){
    throw new Error(
      `${shortHookOriginal} is not a valid short hook original.`);
  }

  return natto.shortHookElemental;
}
