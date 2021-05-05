import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropTrue,
  utFindByPropFalse
} from '../../utils/util_04';
import {
  utFilterByPropEq
} from '../../utils/util_05';
import {
  isValidDfccn
} from '../rhos/rho_09';

// Get cross list by focus
const _getClbfc = (slcrl, dfccn) => {

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

export const getClbfc = R.curry(_getClbfc);

// Get cross list by paladin
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

const _getRjkcr = slcrl => {

  try{
    return utFindByPropTrue('isRjk', slcrl);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rjkcr].');
  }
}

export const getRjkcr = R.curry(_getRjkcr);

const _getRqncr = slcrl => {

  try{
    return utFindByPropTrue('isRqn', slcrl);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rqncr].');
  }
}

export const getRqncr = R.curry(_getRqncr);

const _getRkgcr = slcrl => {

  try{
    return utFindByPropTrue('isRkg', slcrl);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rkgcr].');
  }
}

export const getRkgcr = R.curry(_getRkgcr);

// Get rho face card cross
// [rfacd] is the rho face card
export const getRfccr = (rfacd, slcrl) => {

  E.cknws(rfacd);

  try{

    if(rfacd == 'Jack'){
      return getRjkcr(slcrl);
    }
    else if(rfacd == 'Queen'){
      return getRqncr(slcrl);
    }
    else if(rfacd == 'King'){
      return getRkgcr(slcrl);
    }
    else {
      throw new Error(
        `${rfacd} is not a valid [rfacd].`);
    }
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [rfccr].')
  }
}
