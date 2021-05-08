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
        'Length of [bilot] must be 7.');
    }

    const lhidx = binaryToDecimal(bilot);
    E.cknwn(lhidx);

    const longHookName = getRhoContext1ByLongHookName(lhidx).longHookName;
    E.cknws(longHookName);

    return longHookName;
  }
  catch(err){
    console.error(err);
    throw new Error(
      '[getLnfbl] is error.');
  }

}

// Get long hook name from octal lots
export const getLnfol = oclot => {

  E.cknws(oclot, 'oclot');

  if(oclot.length != 5){
    throw new Error(
      'Length of [oclot] must be 5.');
  }

  const lhidx = octalToDecimal(oclot);
  return getRhoContext1ByLongHookName(lhidx).longHookName;
}
