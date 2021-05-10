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

export const getRhoContextByLongHookName_2 =
  longHookName => {

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
