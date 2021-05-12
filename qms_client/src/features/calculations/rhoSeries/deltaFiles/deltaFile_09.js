import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getRhoLongHookContextByName_2
} from './rhoHubCloneOfDelta';
import {
  checkNilWithTypedObject,
  checkNilWithArray
} from './utilityHubCloneOfDelta';

export const getStrikingCrossSet =
  (wheatLongHookName,
  cheeseLongHookName) => {

  const wheatLongHookContext_2 =
    getRhoLongHookContextByName_2(
      wheatLongHookName);

  checkNilWithTypedObject(
    wheatLongHookContext_2,
    'Rho long hook context 2.',
    'Wheat long hook context 2.');

  const cheeseLongHookContext_2 =
    getRhoLongHookContextByName_2(
      wheatLongHookName);

  checkNilWithTypedObject(
    cheeseLongHookContext_2,
    'Rho long hook context 2.',
    'Cheese long hook context 2.');

  const wheatLongHookCrossContextSet_1 =
    wheatLongHookContext_2
    .longHookCrossContextSet_1;

  checkNilWithArray(
    wheatLongHookCrossContextSet_1,
    'Wheat long hook cross context set.');

  const cheeseLongHookCrossContextSet_1 =
    cheeseLongHookContext_2
    .longHookCrossContextSet_1;

  checkNilWithArray(
    cheeseLongHookCrossContextSet_1,
    'Cheese long hook cross context set.');

  const wheatLongHookCrossSignSet =
    R.map(
      R.prop('longHookCrossSign'),
      wheatLongHookCrossContextSet_1);

  const cheeseLongHookCrossSignSet =
    R.map(
      R.prop('longHookCrossSign'),
      cheeseLongHookCrossContextSet_1);

  console.log(wheatLongHookCrossSignSet);
  console.log(cheeseLongHookCrossSignSet);

  return cheeseLongHookCrossSignSet;
}
