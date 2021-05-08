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

  if(objectVariable['_type'] != typeName){
    throw new Error(
      `The object is not of type ${typeName}.`);
  }
}
