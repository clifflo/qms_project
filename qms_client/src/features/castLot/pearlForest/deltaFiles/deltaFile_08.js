import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  checkNilWithArray,
  findItemByStringFromList,
  checkNilWithTypedObject
} from './_utilityHubByDelta';
import {
  deltaLongHookContextSet_4
} from './deltaMiniHub_02';
import {
  deltaLongHookContextMapFunction_5
} from './deltaFile_07';
import {
  isValidTwigTrunkChinese
} from './_twigHubByDelta';

export const
  getDeltaLongHookContextSet_5 =
  askingDayTrunkChinese => {

  checkNilWithString(
    askingDayTrunkChinese,
    'Asking day trunk Chinese');

  const loadedDeltaLongHookContextMapFunction_5 =
    R.curry(deltaLongHookContextMapFunction_5)
    (askingDayTrunkChinese);

  const deltaLongHookContextSet_5 =
    R.map(
      loadedDeltaLongHookContextMapFunction_5,
      deltaLongHookContextSet_4);

  return deltaLongHookContextSet_5;
}

export const getDeltaLongHookContext_5 =
  (askingDayTrunkChinese,
  wheatHookName) => {

  try{

    checkNilWithString(
      askingDayTrunkChinese,
      'Asking day trunk Chinese');

    checkNilWithString(
      wheatHookName,
      'Wheat hook name');

    if(!isValidTwigTrunkChinese(
      askingDayTrunkChinese)){
      throw new Error(
        'Asking day trunk is not valid.');
    }

    const deltaLongHookContextSet_5 =
      getDeltaLongHookContextSet_5(
        askingDayTrunkChinese);

    checkNilWithArray(
      deltaLongHookContextSet_5,
      'Delta long hook context set 5');

    const deltaLongHookContext_5 =
      findItemByStringFromList(
        deltaLongHookContextSet_5,
        wheatHookName,
        'longHookName');

    checkNilWithTypedObject(
      deltaLongHookContext_5,
      'Delta long hook context 5');

    return deltaLongHookContext_5;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get delta long hook context 5.');
  }
}
