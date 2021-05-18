import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  sentenceCase
} from 'change-case';

export const checkNilWithString =
  (stringVariable, rawVariableName) => {

  const finalVariableName =
    R.compose(
      R.replace('chinese', 'Chinese'),
      R.replace('english', 'English'),
      sentenceCase)
    (rawVariableName);

  if(R.isNil(stringVariable)){
    throw new Error(
      `${finalVariableName} should not be nil.`);
  }

  if(!RA.isString(stringVariable)){
    throw new Error(
      `${finalVariableName} must be a string.`);
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

export const checkNilWithArray =
  (varArray, variableName) => {

  if(R.isNil(varArray)){
    throw new Error(
      `${variableName} should not be nil.`);
  }

  if(!RA.isArray(varArray)){
    throw new Error(
      `${variableName} must be an array.`);
  }
}

export const getCyclicIndex = (
  rawIndex,
  cycleLength) => {

  checkNilWithNumber(
    rawIndex,
    'Raw index');

  const positiveIndex =
    rawIndex % cycleLength;

  const negativeIndex =
    (rawIndex % cycleLength) + cycleLength;

  const effectiveIndex =
    (rawIndex >= 0) ?
    positiveIndex : negativeIndex

  return effectiveIndex;
}
