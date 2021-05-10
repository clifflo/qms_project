import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithArray,
  checkNilWithTypedObject,
  checkNilWithString
} from '../../utilityFiles/utilityHub';
import {
  bakedNattoSet
} from './rhoMiniHub_01';
import {
  getTwigElementalContextByChinese,
  getTwigTrunkContextByChinese
} from '../../twigFiles/twigHub';

export const getNattoNoodle = (
  genericShortHookOriginal,
  isShortHookExternal) => {

  const bakedNatto = R.find(
    R.propEq(
      'genericShortHookOriginal',
      genericShortHookOriginal),
    bakedNattoSet);

  checkNilWithTypedObject(
    bakedNatto,
    'Baked natto',
    'Baked natto'
  )

  checkNilWithString(
    bakedNatto.genericShortHookElementalChinese,
    'Generic short hook elemental chinese');

  if(isShortHookExternal){

    checkNilWithString(
      bakedNatto.externalShortHookTrunkChinese,
      'External short hook trunk chinese of natto');

    checkNilWithArray(
      bakedNatto.externalSnapPeas,
      'External snap peas of natto');

    const effectiveShortHookTrunkChinese =
      bakedNatto.externalShortHookTrunkChinese;

    const effectiveSnapPeas =
      bakedNatto.externalSnapPeas;

    const effectiveShortHookElementalChinese =
      bakedNatto
      .genericShortHookElementalChinese;

    const effectiveShortHookElementalEnglish =
      getTwigElementalContextByChinese(
        effectiveShortHookElementalChinese)
      .twigElementalEnglish;

    const nattoNoodle = {
      _type: 'Natto noodle',
      effectiveShortHookTrunkChinese,
      effectiveSnapPeas,
      effectiveShortHookElementalChinese,
      effectiveShortHookElementalEnglish
    }

    return nattoNoodle;
  }
  else {

    checkNilWithString(
      bakedNatto.internslShortHookTrunkChinese,
      'Internal short hook trunk chinese of natto');

    checkNilWithArray(
      bakedNatto.internalSnapPeas,
      'Internal snap peas of natto');

    checkNilWithString(
      bakedNatto.genericShortHookElementalChinese,
      'Generic short hook elemental chinese of natto');

    const effectiveShortHookTrunkChinese =
      bakedNatto.internslShortHookTrunkChinese;

    const effectiveSnapPeas =
      bakedNatto.internalSnapPeas;

    const effectiveShortHookElementalChinese =
      bakedNatto.genericShortHookElementalChinese;

    const effectiveShortHookElementalEnglish =
      getTwigElementalContextByChinese(
        effectiveShortHookElementalChinese)
      .twigElementalEnglish;

      const nattoNoodle = {
        _type: 'Natto noodle',
        effectiveShortHookTrunkChinese,
        effectiveSnapPeas,
        effectiveShortHookElementalChinese,
        effectiveShortHookElementalEnglish
      }

      return nattoNoodle;
  }
}
