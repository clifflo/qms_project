import * as R from 'ramda';
import {
  utFilterByPropEq
} from '../../utils/util_05';
import {
  isValidDfccn
} from '../rhos/rho_08';

// Get cross by focus
export const getClbfc = (dfccn, slcrl) => {

  E.cknwa(slcrl, 'slcrl');
  E.cknws(dfccn, 'dfccn');

  if(!isValidDfccn(dfccn)){
    throw new Error(
      `${dfccn} is not a valid [dfccn].`);
  }

  const clbfc = utFilterByPropEq(
    'dfccn', dfccn, slcrl);

  return clbfc;
}

export const getClbpl = (dplcn, slcrl) => {

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

export const getRjkcr = slcrl => {


}
