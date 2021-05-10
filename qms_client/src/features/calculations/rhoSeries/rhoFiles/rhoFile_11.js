import {
  rhoBaseLongHookGapBinaryDigitsList
} from './rhoFile_10';

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

const getRhoJackAtDownwardIndex =
  rhoGeneration => {

  checkNilWithNumber(
    rhoGeneration, 'Rho generation');

  const rhoJackPositionContext =
    getItemByNumberFromList(
      rhoJackPositionContextSet,
      rhoGeneration,
      'rhoGeneration');

  const rhoJackAtDownwardIndex =
    rhoJackPositionContext
    .rhoJackAtDownwardIndex;

  return rhoJackAtDownwardIndex;
}

const longHongCrossContextMapFunction_2 =
  longHookCrossContext_1 => {

  const rhoJackAtDownwardIndex =
    getRhoJackAtDownwardIndex(rhogen);

  const rhoKingAtDownwardIndex =
    (rhoJackAtDownwardIndex + 3) % 6;



}
