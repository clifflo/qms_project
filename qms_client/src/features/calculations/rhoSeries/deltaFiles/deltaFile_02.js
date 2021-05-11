import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigElementalViewingMyselfContextByChinese
} from './twigHubShadowOfDelta';
import {
  checkNilWithString,
  checkNilWithArray,
  getItemByStringFromList
} from './utilityHubShadowOfDelta';
import {
  deltaFocusContextSet
} from './deltaFile_01';
import {
  rhoLongHookContextSet_5
} from './rhoHubShadowOfDelta'

const longHookCrossContextMapFunction_2 =
  (nattoShortHookElementalChinese,
  longHookCrossContext_1) => {

  const longHookCrossBranchElementalChinese =
    longHookCrossContext_1
    .longHookCrossBranchElementalChinese;

  checkNilWithString(
    longHookCrossBranchElementalChinese,
    'Long hook cross branch elemental chinese.');

  const deltaFocusElementalViewingMyselfEnglish =
    getTwigElementalViewingMyselfContextByChinese(
      longHookCrossBranchElementalChinese,
      nattoShortHookElementalChinese)
    .twigElementalViewingMyselfEnglish;

  checkNilWithString(
    deltaFocusElementalViewingMyselfEnglish,
    'Delta focus elemental viewing myself english'
  )

  const deltaFocusContext =
    getItemByStringFromList(
      deltaFocusContextSet,
      deltaFocusElementalViewingMyselfEnglish,
      'deltaFocusElementalViewingMyselfEnglish');

  const {
    deltaFocusChineseName,
    deltaFocusEnglishName
  } = deltaFocusContext

  return {
    deltaFocusChineseName,
    deltaFocusEnglishName,
    nattoShortHookElementalChinese,
    ...longHookCrossContext_1
  };
}

export const deltaLongHookContextMapFunction_1 =
  rhoLongHookContext_5 => {

  const nattoShortHookElementalChinese =
    rhoLongHookContext_5
    .nattoShortHookElementalChinese;

  checkNilWithString(
    nattoShortHookElementalChinese,
    'Natto short hook elemental chinese');

  const longHookCrossContextSet_1 =
    rhoLongHookContext_5
    .longHookCrossContextSet_1;

  checkNilWithArray(
    longHookCrossContextSet_1,
    'Long hook cross context set 1');

  const longHookCrossContextSet_2 =
    R.map(
      R.curry(longHookCrossContextMapFunction_2)
      (nattoShortHookElementalChinese),
      longHookCrossContextSet_1);

  const rawDeltaLongHookContext_1 =
    R.dissoc(
      'longHookCrossContextSet_1',
      rhoLongHookContext_5);

  const finalDeltaLongHookContext_1 = {
      ...rawDeltaLongHookContext_1,
      longHookCrossContextSet_2,
      _type: 'Delta long hook context 1'
  };

  return finalDeltaLongHookContext_1;

}

export const deltaLongHookContextSet =
  R.map(
    deltaLongHookContextMapFunction_1,
    rhoLongHookContextSet_5);
