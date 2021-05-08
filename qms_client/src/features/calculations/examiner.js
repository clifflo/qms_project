import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

// Check by nil with string
export const checkNilWithString = (varStr, varName) => {

  if(R.isNil(varStr)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isString(varStr)){
    throw new Error(`${varName} must be a string.`);
  }
}

// Check by nil with number
export const cknwn = (varNum, varName) => {

  if(R.isNil(varNum)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isNumber(varNum)){
    throw new Error(`${varName} must be a number.`);
  }
}

// Check by nil with object
export const cknwo = (varObj, varName) => {

  if(R.isNil(varObj)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isPlainObject(varObj)){
    throw new Error(`${varName} must be an object.`);
  }
}

export const checkNilWithArray = (varArray, varName) => {

  if(R.isNil(varArray)){
    throw new Error(
      `${varName} should not be nil.`);
  }

  if(!RA.isArray(varArray)){
    throw new Error(
      `${varName} must be an array.`);
  }
}

export const cknwb = (varBool, varName) => {

  if(R.isNil(varBool)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isBoolean(varBool)){
    throw new Error(`${varName} must be a boolean.`);
  }
}
