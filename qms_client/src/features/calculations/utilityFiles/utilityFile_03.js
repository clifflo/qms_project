import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const checkNilWithTypedObject =
  (objectVariable, variableName, typeName) => {

  if(R.isNil(objectVariable)){
    throw new Error(
      `${variableName} should not be nil.`);
  }

  if(!RA.isPlainObject(objectVariable)){
    throw new Error(
      `${variableName} must be an object.`);
  }

  if(R.isNil(typeName)){
    if(objectVariable['_type'] != variableName){
      throw new Error(
        `The object is not of type ${variableName}.`);
    }
  }
  else {
    if(objectVariable['_type'] != typeName){
      throw new Error(
        `The object is not of type ${typeName}.`);
    }
  }



}

export const checkNilWithUntypedObject =
  (objectVariable, variableName) => {

  if(R.isNil(objectVariable)){
    throw new Error(
      `${variableName} should not be nil.`);
  }

  if(!RA.isPlainObject(objectVariable)){
    throw new Error(
      `${variableName} must be an object.`);
  }
}
