import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getBakedNattoByShortHookOriginal
} from './rhoMiniHub_01';
import {
  getRhoContextByLongHookName_2,
} from './rhoMiniHub_02';
import {
  rhoContextSet_4
} from './rhoFile_12';
import {
  checkNilWithString
} from './utilityHubShadowOfRhoFiles';

const rhoContextMapFunction_5 =
  rhoContext_4 => {

  const rhoImpureHookName =
    rhoContext_4.rhoImpureHookName;

  checkNilWithString(
    rhoImpureHookName,
    'Rho impure hook name');

  const rhoContext_2 =
    getRhoContextByLongHookName_2(
      rhoImpureHookName);

  const bakedNatto =
    getBakedNattoByShortHookOriginal(
      rhoContext_4.rhoShortHookPalace);

  const nattoShortHookElementalChinese =
    bakedNatto
    .genericShortHookElementalChinese;

  const nattoShortHookElementalEnglish =
    bakedNatto
    .genericShortHookElementalEnglish;

  return {
    ...rhoContext_2,
    ...rhoContext_4,
    nattoShortHookElementalChinese,
    nattoShortHookElementalEnglish,
    _type: 'Rho context 5'
  };
}

export const rhoContextSet_5 =
  R.map(
    rhoContextMapFunction_5,
    rhoContextSet_4);
