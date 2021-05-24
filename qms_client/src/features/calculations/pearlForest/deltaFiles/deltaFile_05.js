import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  checkNilWithArray,
  checkNilWithString,
  checkNilWithTypedObject,
  findItemByStringFromList
} from './_utilityHubByDelta';
import {
  getTwigBranchContextByChinese
} from './_twigHubByDelta';
import {
  deltaLongHookContextSet_3
} from './deltaFile_04';

const
  getRhoQueenCrossIndexFromJackCrossBranchChinese =
  rhoJackCrossBranchChinese => {

  checkNilWithString(
    rhoJackCrossBranchChinese,
    'Rho jack cross branch Chinese');

  const rhoJackCrossBranchIndex =
    getTwigBranchContextByChinese(
      rhoJackCrossBranchChinese)
    .twigBranchIndex;

  checkNilWithNumber(
    rhoJackCrossBranchIndex,
    'Rho jack cross branch index');

  const rhoQueenAtDownwardIndex =
    5 - (rhoJackCrossBranchIndex % 6);

  checkNilWithNumber(
    rhoQueenAtDownwardIndex,
    'Rho queen at downward index');

  return rhoQueenAtDownwardIndex;
}

const deltaLongHookContextMapFunction_4 =
  deltaLongHookContext_3 => {

  const {
    rhoJackAtDownwardIndex,
    crossInHookContextSet_3
  } = deltaLongHookContext_3;

  checkNilWithNumber(
    rhoJackAtDownwardIndex,
    'Rho jack at downward index');

  checkNilWithArray(
    crossInHookContextSet_3,
    'Cross in hook set 3');

  const rhoJackCrossContext =
    crossInHookContextSet_3[
      rhoJackAtDownwardIndex];

  checkNilWithTypedObject(
    rhoJackCrossContext,
    'Cross in hook 3.');

  const rhoQueenAtDownwardIndex =
    getRhoQueenCrossIndexFromJackCrossBranchChinese(
      rhoJackCrossContext
      .crossInHookBranchChinese);

  checkNilWithNumber(
    rhoQueenAtDownwardIndex,
    'Rho queen at downward index');

  const deltaLongHookContext_4 = {
    ...deltaLongHookContext_3,
    rhoQueenAtDownwardIndex,
    _type: 'Delta long hook context 4'
  };

  return deltaLongHookContext_4;
}

export const deltaLongHookContextSet_4 =
  R.map(
    deltaLongHookContextMapFunction_4,
    deltaLongHookContextSet_3);

export const getDeltaLongHookContext_4 =
  longHookName => {

  checkNilWithString(
    longHookName,
    'Long hook name');

  return findItemByStringFromList(
    deltaLongHookContextSet_4,
    longHookName,
    'longHookName');
}
