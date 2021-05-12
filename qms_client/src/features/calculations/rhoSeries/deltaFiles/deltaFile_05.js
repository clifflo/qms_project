import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  checkNilWithArray
} from './utilityHubCloneForDelta';
import {
  getTwigBranchContextByChinese
} from './twigHubCloneOfDelta';
import {
  deltaLongHookContextSet_3
} from './deltaFile_04';

const
  getRhoQueenCrossIndexFromJackCrossBranchChinese =
  rhoJackCrossBranchChinese => {

  checkNilWithString(
    rhoJackCrossBranchChinese,
    'Rho jack cross branch chinese');

  const rhoJackCrossBranchIndex =
    getTwigBranchContextByChinese(
      rhoJackCrossBranchChinese);

  checkNilWithNumber(
    rhoJackCrossBranchIndex,
    'Rho jack cross branch index');

  const rhoQueenCrossIndex =
    5 - (rhoJackCrossBranchIndex % 6);

  checkNilWithNumber(
    rhoQueenCrossIndex,
    'Rho queen cross index');

  return rhoQueenCrossIndex;
}

const deltaLongHookContextMapFunction_4 =
  deltaLongHookContext_3 => {

  const {
    rhoJackAtDownwardIndex,
    longHookCrossContextSet_3
  } = deltaLongHookContext_3;

  checkNilWithNumber(
    rhoJackAtDownwardIndex,
    'Rho jack at downward index');

  checkNilWithArray(
    longHookCrossContextSet_3,
    'Long hook cross context set 3');

  const rhoJackCrossContext =
    longHookCrossContextSet_3[
      rhoJackAtDownwardIndex];

  checkNilWithTypedObject(
    rhoJackCrossContext,
    'Long hook cross context 3.');

  const rhoQueenCrossIndex =
    getRhoQueenCrossIndexFromJackTwigBranchChinese(
      rhoJackCrossContext
      .longHookCrossBranchChinese);

  checkNilWithNumber(
    rhoQueenCrossIndex,
    'Rho queen cross index');

  const deltaLongHookContext_4 = {
    ...deltaLongHookContext_3,
    rhoQueenCrossIndex,
    _type: 'Delta long hook context 4'
  };

  return deltaLongHookContext_4;
}

export const deltaLongHookContextSet_4 =
  R.map(
    deltaLongHookContextMapFunction_4,
    deltaLongHookContextSet_3);
