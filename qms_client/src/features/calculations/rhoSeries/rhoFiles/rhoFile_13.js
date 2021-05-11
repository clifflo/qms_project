import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getBakedNattoByShortHookOriginal
} from './rhoMiniHub_01';
import {
  getRhoLongHookContextByLongHookName_2,
} from './rhoMiniHub_02';
import {
  rhoLongHookContextSet_4
} from './rhoFile_12';
import {
  checkNilWithString
} from './utilityHubShadowOfRhoFiles';

const rhoLongHookContextMapFunction_5 =
  rhoLongHookContext_4 => {

  const rhoImpureHookName =
    rhoLongHookContext_4.rhoImpureHookName;

  checkNilWithString(
    rhoImpureHookName,
    'Rho impure hook name');

  const rhoLongHookContext_2 =
    getRhoLongHookContextByLongHookName_2(
      rhoImpureHookName);

  const bakedNatto =
    getBakedNattoByShortHookOriginal(
      rhoLongHookContext_4.rhoShortHookPalace);

  const nattoShortHookElementalChinese =
    bakedNatto
    .genericShortHookElementalChinese;

  const nattoShortHookElementalEnglish =
    bakedNatto
    .genericShortHookElementalEnglish;

  return {
    ...rhoLongHookContext_2,
    ...rhoLongHookContext_4,
    nattoShortHookElementalChinese,
    nattoShortHookElementalEnglish,
    _type: 'Rho context 5'
  };
}

export const rhoLongHookContextSet_5 =
  R.map(
    rhoLongHookContextMapFunction_5,
    rhoLongHookContextSet_4);
