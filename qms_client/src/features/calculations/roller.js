// Exception by nil and check string
export const exceptionBnns = (
  varObj, varName) => {

  if(R.isNil(varObj)){
    throw new Error(`${varName} should not be nil.`);
  }

  if(!RA.isString(varObj)){
    throw new Error(`${varName} must be a string.`);
  }
}
