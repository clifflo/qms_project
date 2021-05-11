import {
  rhoBaseLongHookGapBinaryDigitsList
} from './rhoFile_10';
import {
  checkNilWithTypedObject
} from './utilityHubShadowOfRhoFiles';


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

const rhoContextMapFunction_4 =
  rhoContext_3 => {

  checkNilWithTypedObject(
    rhoContext_3,
    'Rho context 3');

  const rhoJackPositionContext =
    getItemByNumberFromList(
      rhoJackPositionContextSet,
      rhoGeneration,
      'rhoGeneration');

  const rhoJackAtDownwardIndex =
    rhoJackPositionContext
    .rhoJackAtDownwardIndex;

  const rhoKingAtDownwardIndex =
    (rhoJackAtDownwardIndex + 3) % 6;

  const rhoContext_4 = {
    ...rhoContext_3,
    rhoJackAtDownwardIndex,
    rhoKingAtDownwardIndex,
    _type: 'Rho context 4'
  };

  return rhoContext_4;
}
