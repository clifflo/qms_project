import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { rhocs_1 } from '../rhos/rhocs_1';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_1';

const getLhnameByIdx = lhIdx => {
  try{
    const rhocxt_1 = R.find(
      R.propEq('lhIdx'), rhocs_1);
    return rhocxt_1.lhname;
  }
  catch(err){
    throw new Error(
      `${lhIdx} is not a valid Long Hook Index.`);
  }
}

const getLhnameFromBilot = bilot => {

  try{
    const lhname = getLhnameByIdx(bilot);

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

const getLhnameFromOclot = oclot => {

  const lhidx = octalToDecimal(oclot);
  return getLhnameByIdx(lhidx);
}
