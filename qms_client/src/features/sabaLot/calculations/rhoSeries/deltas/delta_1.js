import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { rhocs_1 } from '../rhos/rho_1';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_2';

const getLhnameByIdx = lhIdx => {

  try {

    if(R.isNil(lhIdx)){
      throw new Error(
        'Long hook index should not be nil.');
    }

    if(RA.isNumber(lhIdx)){
      throw new Error(
        'Long hook index must be a string.');
    }

    const rhocxt_1 = R.find(
      R.propEq('lhIdx', lhIdx))
      (rhocs_1);
    return rhocxt_1.lhname;
  }
  catch(err){
    throw new Error(
      `${lhIdx} is not a valid Long Hook Index.`);
  }
}

export const getLhnFromBilot = bilot => {

  try{
    const lhidx = binaryToDecimal(bilot);
    const lhname = getLhnameByIdx(lhidx);

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

  const lhidx = octalToDecimal(oclot);
  return getLhnameByIdx(lhidx);
}
