import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDplal
} from './delta_01';
import {
  getDpcba
} from '../rhos/rho_09';
import {
  rfcds,
  getClbfc,
  getClbpl
} from './delta_08';

const _getClbpl = (slcrl, dplcn) => {

  E.cknwa(slcrl, 'slcrl');
  E.cknws(dplcn, 'dplcn');

  if(!isValidDfccn(dplcn)){
    throw new Error(
      `${dplcn} is not a valid [dplcn].`);
  }

  const clbpl = utFilterByPropEq(
    'dplcn', dplcn, slcrl);

  return clbpl;
}

export const getClbpl = R.curry(_getClbpl);

// Get cross list by focus in english
// [dfcal] is delta focus alias.
export const getClbfc = (dfcal, slcrl) => {

  E.cknwa(slcrl, 'slcrl');
  E.cknws(dfcal, 'dfcal');

  try{

    const dfccn = getDfcba(dfcal);
    const clbfc = utFilterByPropEq(
      'dfccn', dfccn, slcrl);
    return clbfc;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbfe].');
  }
}

// Get cross list by paladin in english
export const getClbpe = (slcrl, dplal) => {
  E.cknws(dplal, 'dplal');
  try{
    const clbpe = R.compose(
      getClbpl(slcrl),
      getDpcba)
    (dplal);
    return clbpe;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbpe].');
  }
}

export {
  isValidDfcal
} from '../../rhos/rho_09';

export {
  isValidDplal
} from './delta_01';

export {
  getRfccr
} from './delta_08';

export const rfacs = ['Jack', 'Queen', 'King'];

export const isValidRfcad = rfacd => {
  return R.includes(rfacd, rfacs);
}
