import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { rhocs_1 } from '../rhos/rho_1';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_2';
import {
  getRcxt1ByLhn
} from '../rhos/rho_1';

export const getLhnFromBilot = bilot => {

  try{

    if(R.isNil(bilot)){
      throw new Error(
        'BILOT should not be nil.');
    }

    if(!RA.isString(bilot)){
      throw new Error(
        'BILOT must be a string.');
    }

    if(bilot.length != 7){
      throw new Error(
        'Length of BILOT must be 7.');
    }

    const lhidx = binaryToDecimal(bilot);
    const lhname = getRcxt1ByLhn(lhidx).lhname;

    if(R.isNil(lhname)){
      throw new Error(
        'Long hook name should not be nil.');
    }

    return lhname;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Long hook name.');
  }

}

export const getLhnFromOclot = oclot => {

  if(R.isNil(oclot)){
    throw new Error(
      'OCLOT should not be nil.');
  }

  if(!RA.isString(oclot)){
    throw new Error(
      'OCLOT must be a string.');
  }

  if(oclot.length != 5){
    throw new Error(
      'Length of OCLOT must be 5.');
  }

  const lhidx = octalToDecimal(oclot);
  return getRcxt1ByLhn(lhidx).lhname;
}
