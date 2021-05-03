import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDplen
} from './delta_01';
import {
  getDfebcn
} from '../rhos/rho_09';
import {
  rfcds,
  getClbfc,
  getClbpl
} from './delta_08';

const getNickname = fullEnglishName => {
  return R.split(' ', fullEnglishName)[1];
}

// Get cross list by focus in english
export const getClbfe = dfcen => {

  E.cknws(dfcen);

  try{
    const clbfe = R.compose(
      getClbfc,
      getDfcbe,
      getNickname)
    (dfcen);

    E.cknwa(clbfe);
    return clbfe;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbfe].');
  }
}

// Get cross list by paladin in english
export const getClbpe = dplen => {

  E.cknws(dplen, 'dplen');

  try{
    const clbpe = R.compose(
      getClbpl,
      getDpcbe,
      getNickname)
    (dplen);

    return clbpe;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbpe].');
  }

}

export { isValidDfcen } from '../../rhos/rho_09';
export { isValidDplen } from './delta_01';
