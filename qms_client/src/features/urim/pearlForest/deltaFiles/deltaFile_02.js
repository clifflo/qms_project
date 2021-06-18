import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getTwigElementalRelationContextByChinese
} from './_twigHubByDelta';
import {
  checkNilWithString,
  checkNilWithArray,
  findItemByStringFromList
} from './_utilityHubByDelta';
import {
  deltaFocusContextSet
} from './deltaFile_01';
import {
  rhoLongHookContextSet_5
} from './_rhoHubByDelta'

const crossInHookContextMapFunction_2 =
  (nattoShortHookElementalChinese,
  crossInHookContext_1) => {

  const crossInHookBranchElementalChinese =
    crossInHookContext_1
    .crossInHookBranchElementalChinese;

  checkNilWithString(
    crossInHookBranchElementalChinese,
    'Cross in hook branch elemental Chinese.');

  const deltaFocusElementalRelationEnglish =
    getTwigElementalRelationContextByChinese(
      crossInHookBranchElementalChinese,
      nattoShortHookElementalChinese)
    .twigElementalRelationEnglish;

  checkNilWithString(
    deltaFocusElementalRelationEnglish,
    'Delta focus elemental relation English'
  )

  const deltaFocusContext =
    findItemByStringFromList(
      deltaFocusContextSet,
      deltaFocusElementalRelationEnglish,
      'deltaFocusElementalRelationEnglish');

  const {
    deltaFocusChinese,
    deltaFocusEnglish
  } = deltaFocusContext

  return {
    deltaFocusChinese,
    deltaFocusEnglish,
    nattoShortHookElementalChinese,
    ...crossInHookContext_1,
    _type: 'Cross in hook 2.'
  };
}

export const deltaLongHookContextMapFunction_1 =
  rhoLongHookContext_5 => {

  const nattoShortHookElementalChinese =
    rhoLongHookContext_5
    .nattoShortHookElementalChinese;

  checkNilWithString(
    nattoShortHookElementalChinese,
    'Natto short hook elemental Chinese');

  const crossInHookContextSet_1 =
    rhoLongHookContext_5
    .crossInHookContextSet_1;

  checkNilWithArray(
    crossInHookContextSet_1,
    'Cross in hook set 1');

  const crossInHookContextSet_2 =
    R.map(
      R.curry(crossInHookContextMapFunction_2)
      (nattoShortHookElementalChinese),
      crossInHookContextSet_1);

  const rawDeltaLongHookContext_1 =
    R.dissoc(
      'crossInHookContextSet_1',
      rhoLongHookContext_5);

  const finalDeltaLongHookContext_1 = {
    ...rawDeltaLongHookContext_1,
    crossInHookContextSet_2,
    _type: 'Delta long hook context 1'
  };

  return finalDeltaLongHookContext_1;

}

export const deltaLongHookContextSet_1 =
  R.map(
    deltaLongHookContextMapFunction_1,
    rhoLongHookContextSet_5);
