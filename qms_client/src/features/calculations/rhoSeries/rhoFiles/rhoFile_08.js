import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhoContextSet_1
} from './rhoMiniHub_01';
import {
  rhoContextSet_2
} from './rhoFile_07';
import {
  checkNilWithString,
  getItemByStringFromList
} from './utilityHubShadowOfRhoFiles';

export const getRhoContextByLongHookName_1 =
  longHookName => {

    try{
      checkNilWithString(
        longHookName,
        'Long hook name');

      const rhoContext_1 =
        getItemByStringFromList(
          rhoContextSet_1,
          longHookName,
          'longHookName');

      return rhoContext_1;
    }
    catch(errorMessage){
      console.error(errorMessage);
      throw new Error(
        'Cannot get rho context by '
        + 'long hook name 1.');
    }

}

export const getRhoContextByLongHookName_2 =
  longHookName => {

  try{
    checkNilWithString(
      longHookName,
      'Long hook name');

    const rhoContext_2 =
      getItemByStringFromList(
        rhoContextSet_2,
        longHookName,
        'longHookName');

    return rhoContext_2;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context by '
      + 'long hook name 2.');
  }



}

export const getRhoContextByLongHookIndex_1 =
  longHookIndex => {

  try{
    checkNilWithString(
      longHookName,
      'Long hook name');

    const rhoContext_1 =
      getItemByStringFromList(
        rhoContextSet_1,
        longHookName,
        'longHookName');

    return rhoContext_1;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get rho context by '
      + 'long hook index 1.');
  }

}
