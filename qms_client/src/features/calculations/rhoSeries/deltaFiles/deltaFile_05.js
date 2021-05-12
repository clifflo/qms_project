import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  checkNilWithArray
} from './utilityHubCloneForDelta';


const getRhoQueenIndexFromJackBranchIndex =
  rhoJackBranchIndex => {

  
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
}
