import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const checkNilWithString =
  (stringVariable, variableName) => {

  if(R.isNil(stringVariable)){
    throw new Error(
      `${variableName} should not be nil.`);
  }

  if(!RA.isString(stringVariable)){
    throw new Error(
      `${variableName} must be a string.`);
  }
}

export const checkNilWithNumber =
  (numberVariable, variableName) => {

  if(R.isNil(numberVariable)){
    throw new Error(
      `${variableName} should not be nil.`);
  }

  if(!RA.isNumber(numberVariable)){
    throw new Error(
      `${variableName} must be a number.`);
  }
}

// Check by nil with object
export const cknwo = (varObj, variableName) => {

  if(R.isNil(varObj)){
    throw new Error(`${variableName} should not be nil.`);
  }

  if(!RA.isPlainObject(varObj)){
    throw new Error(`${variableName} must be an object.`);
  }
}

export const checkNilWithArray = (varArray, variableName) => {

  if(R.isNil(varArray)){
    throw new Error(
      `${variableName} should not be nil.`);
  }

  if(!RA.isArray(varArray)){
    throw new Error(
      `${variableName} must be an array.`);
  }
}

export const cknwb = (varBool, variableName) => {

  if(R.isNil(varBool)){
    throw new Error(`${variableName} should not be nil.`);
  }

  if(!RA.isBoolean(varBool)){
    throw new Error(`${variableName} must be a boolean.`);
  }
}
