import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

// Exception by nil and check string
export const cknws = (
  varObj, varName) => {

  if(R.isNil(varObj)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isString(varObj)){
    throw new Error(`${varName} must be a string.`);
  }
}

export const cknwn = (varObj, varName) => {

  if(R.isNil(varObj)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isNumber(varObj)){
    throw new Error(`${varName} must be a number.`);
  }
}
