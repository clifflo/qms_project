import * as R from 'ramda';
import {
  rhoLongHookContextSet_3
} from './rhoFile_11';
import {
  checkNilWithTypedObject,
  getItemByNumberFromList
} from './_utilityHubCloneOfRho';


const rhoJackPositionContextSet = [
  {
    rhoGeneration: 0,
    rhoJackAtDownwardIndex: 5
  },
  {
    rhoGeneration: 1,
    rhoJackAtDownwardIndex: 0
  },
  {
    rhoGeneration: 2,
    rhoJackAtDownwardIndex: 1
  },
  {
    rhoGeneration: 3,
    rhoJackAtDownwardIndex: 2
  },
  {
    rhoGeneration: 4,
    rhoJackAtDownwardIndex: 3
  },
  {
    rhoGeneration: 5,
    rhoJackAtDownwardIndex: 4
  },
  {
    rhoGeneration: 6,
    rhoJackAtDownwardIndex: 3
  },
  {
    rhoGeneration: 7,
    rhoJackAtDownwardIndex: 2
  }
];

const rhoLongHookContextMapFunction_4 =
  rhoLongHookContext_3 => {

  checkNilWithTypedObject(
    rhoLongHookContext_3,
    'Rho long hook context 3');

  const rhoJackPositionContext =
    getItemByNumberFromList(
      rhoJackPositionContextSet,
      rhoLongHookContext_3.rhoGenerationIndex,
      'rhoGeneration');

  const rhoJackAtDownwardIndex =
    rhoJackPositionContext
    .rhoJackAtDownwardIndex;

  const rhoKingAtDownwardIndex =
    (rhoJackAtDownwardIndex + 3) % 6;

  const rhoLongHookContext_4 = {
    ...rhoLongHookContext_3,
    rhoJackAtDownwardIndex,
    rhoKingAtDownwardIndex,
    _type: 'Rho long hook context 4'
  };

  return rhoLongHookContext_4;
}

export const rhoLongHookContextSet_4 =
  R.map(
    rhoLongHookContextMapFunction_4,
    rhoLongHookContextSet_3);
