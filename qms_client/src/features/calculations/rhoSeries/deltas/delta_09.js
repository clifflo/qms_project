import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDplsen
} from './delta_01';
import {
  getDfebcn
} from '../rhos/rho_09';
import {
  rfcds,
  getClbfc,
  getClbpl
} from './delta_08';

// Get cross list by focus in short english
export const getClbfe = dfcsen => {

  E.cknws(dfcsen);
  
  try{
    return getClbfc(getDfcbse(dfcsen));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbfe].');
  }
}
