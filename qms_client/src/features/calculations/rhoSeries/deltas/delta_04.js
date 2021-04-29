import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_02';


// Get long hook name from binary lots
export const getLnfbl = bilot => {

  try{

    E.cknws(bilot, 'bilot');

    if(bilot.length != 7){
      throw new Error(
        'Length of BILOT must be 7.');
    }

    const lhidx = binaryToDecimal(bilot);
    E.cknwn(lhidx);

    const lhname = getRcxt1ByLhn(lhidx).lhname;
    E.cknws(lhname);

    return lhname;
  }
  catch(err){
    console.error(err);
    throw new Error(
      '[getLnfbl] is error.');
  }

}

// Get long hook name from octal lots
export const getLnfol = oclot => {

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
