import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhoLongHookContextSet_1
} from './rhoMiniHub_01';
import {
  rhoLongHookContextSet_2
} from './rhoFile_07';
import {
  checkNilWithString,
  checkNilWithNumber,
  getItemByStringFromList,
  getItemByNumberFromList
} from './utilityHubShadowOfRho';

export const
  getRhoLongHookContextByName_1 =
  longHookName => {

  try{
    checkNilWithString(
      longHookName,
      'Long hook name');

    const rhoLongHookContext_1 =
      getItemByStringFromList(
        rhoLongHookContextSet_1,
        longHookName,
        'longHookName');

    return rhoLongHookContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context by '
      + 'long hook name 1.');
  }
}

export const getRhoLongHookContextByName_2 =
  longHookName => {

  try{
    checkNilWithString(
      longHookName,
      'Long hook name');

    const rhoLongHookContext_2 =
      getItemByStringFromList(
        rhoLongHookContextSet_2,
        longHookName,
        'longHookName');

    return rhoLongHookContext_2;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context by '
      + 'long hook name 2.');
  }
}

export const getRhoLongHookContextByIndex_1 =
  longHookIndex => {

  try{
    checkNilWithNumber(
      longHookIndex,
      'Long hook index');

    const rhoLongHookContext_1 =
      getItemByNumberFromList(
        rhoLongHookContextSet_1,
        longHookIndex,
        'longHookIndex');

    return rhoLongHookContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context by '
      + 'long hook index 1.');
  }

}

export const isValidLongHookName =
  longHookName => {

  const rhoLongHookContext_1 =
    getRhoLongHookContextByName_1(longHookName);

  return RA.isNotNil(rhoLongHookContext_1);
}
