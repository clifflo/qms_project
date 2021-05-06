import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDplnn
} from './delta_01';
import {
  getDpcbe
} from '../rhos/rho_09';
import {
  rfcds,
  getClbfc,
  getClbpl
} from './delta_08';

// Get cross list by focus in english
export const getClbfe = (slcrl, dfcen) => {

  E.cknws(dfcen);

  try{
    const clbfe = R.compose(
      getClbfc(slcrl),
      getDfcbe)
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
export const getClbpe = (slcrl, dplnn) => {

  E.cknws(dplnn, 'dplnn');

  try{
    const clbpe = R.compose(
      getClbpl(slcrl),
      getDpcbe)
    (dplnn);

    return clbpe;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbpe].');
  }

}

export {
  isValidDfcen,
  dfnns
} from '../../rhos/rho_09';

export { isValidDplnn } from './delta_01';
export { getRfccr } from './delta_08';

export const rfacs = ['Jack', 'Queen', 'King'];

export const isValidRfcad = rfacd => {
  return R.includes(rfacd, rfacs);
}
