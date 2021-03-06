import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  checkNilWithArray,
  getCyclicIndex
} from './utilityFile_01';

export const getCyclicItemFromList =
  (objectList,
  objectIndex,
  propForIndex) => {

  const effectiveIndex =
    getCyclicIndex(
      objectIndex,
      objectList.length);

  const respectiveObject =
    R.find(
      R.propEq(propForIndex, effectiveIndex),
      objectList);

  return respectiveObject;
}

export const getItemByNumberFromList =
  (objectList,
  numberPropValue,
  propForNumber) => {

  try{

    checkNilWithArray(
      objectList,
      'Object list');

    const respectiveObject =
      R.find(
        R.propEq(propForNumber, numberPropValue),
        objectList);

    return respectiveObject;

  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get item by number from list.');
  }
}

export const findItemByStringFromList =
  (objectList,
  stringPropValue,
  propForString) => {

  try{
    checkNilWithString(
      stringPropValue,
      'String prop value');

    checkNilWithString(
      propForString,
      'Prop for string');

    const respectiveObject =
      R.find(
        R.propEq(propForString, stringPropValue),
        objectList);

    return respectiveObject;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get item by string from list.');
  }
}

export const filterItemByStringFromList =
  (objectList,
  stringPropValue,
  propForString) => {

  try{
    checkNilWithString(
      stringPropValue,
      'String prop value');

    checkNilWithString(
      propForString,
      'Prop for string');

    const respectiveObject =
      R.filter(
        R.propEq(propForString, stringPropValue),
        objectList);

    return respectiveObject;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get item by string from list.');
  }
}

export const isItemExistByStringFromList =
  R.compose(
    RA.isNotNil,
    R.curry(findItemByStringFromList));
