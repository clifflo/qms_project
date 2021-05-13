import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString
} from './utilityHubCloneOfDelta';
import {
  deltaLongHookContextSet_4
} from './deltaMiniHub_02';
import {
  deltaLongHookContextMapFunction_5
} from './deltaFile_07';
import {
  isValidTwigTrunkChinese
} from './twigHubCloneOfDelta';

export const
  getDeltaLongHookContextSet_5 =
  askingDayTrunkChinese => {

  checkNilWithString(
    askingDayTrunkChinese,
    'Asking day trunk chinese');

  const loadedDeltaDatedLongHookContextMapFunction =
    R.curry(deltaDatedLongHookContextMapFunction)
    (askingDayTrunkChinese);

  const deltaDatedLongHookContextSet =
    R.map(
      loadedDeltaDatedLongHookContextMapFunction,
      deltaLongHookContextSet_4);

  return deltaDatedLongHookContextSet;
}

export const getDeltaLongHookContextByName_5 =
  (askingDayTrunkChinese,
  wheatHookName) => {

  try{
    checkNilWithString(
      askingDayTrunkChinese,
      'Asking day trunk chinese');

    checkNilWithString(
      wheatHookName,
      'Wheat hook name');

    if(!isValidTwigTrunkChinese(
      askingDayTrunkChinese)){
      throw new Error(
        'Asking day trunk is not valid.');
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get delta long hook context '
      + 'by name 5.');
  }



}
