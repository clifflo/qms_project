import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getRhoLongHookContextByName_2
} from './rhoHubCloneOfDelta';
import {
  checkNilWithTypedObject,
  checkNilWithArray
} from './utilityHubCloneOfDelta';

const getDifferenceOfCrossSignSet =
  (wheatLongHookCrossSignSet,
  cheeseLongHookCrossSignSet) => {

  const differenceOfCrossSignFunction =
    longHookCrossDownwardIndex => {

    const wheatLongHookCrossSign =
      wheatLongHookCrossSignSet[
        longHookCrossDownwardIndex];

    const cheeseLongHookCrossSign =
      cheeseLongHookCrossSignSet[
        longHookCrossDownwardIndex];

    return
      (wheatLongHookCrossSign ==
      cheeseLongHookCrossSign) ?
      'Cross is silent.' :
      'Cross is strike.';

  }

  return R.map(
    differenceOfCrossSignFunction,
    R.range(0, 6));
}

export const getCrossStrikeStatusSet =
  (wheatLongHookName,
  cheeseLongHookName) => {

  try{
    const wheatLongHookContext_2 =
      getRhoLongHookContextByName_2(
        wheatLongHookName);

    checkNilWithTypedObject(
      wheatLongHookContext_2,
      'Wheat long hook context 2.',
      'Rho long hook context 2.');

    const cheeseLongHookContext_2 =
      getRhoLongHookContextByName_2(
        cheeseLongHookName);

    checkNilWithTypedObject(
      cheeseLongHookContext_2,
      'Cheese long hook context 2.',
      'Rho long hook context 2.');

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

    const differenceOfCrossSignSet =
      getDifferenceOfCrossSignSet(
        wheatLongHookCrossSignSet,
        cheeseLongHookCrossSignSet);

    return differenceOfCrossSignSet;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get striking cross set.');
  }

}
