import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookParagraph,
  bakedNattoSet
} from './rhoFile_03';
import {
  rhoContextMapFunction_1,
} from './rhoFile_04';
import {
  checkNilWithArray,
  checkNilWithString,
  checkNilWithTypedObject
} from '../../utilityFiles/utilityHub';
import {
  getTwigElementalContextByChinese,
  getTwigTrunkContextByChinese
} from '../../twigFiles/twigHub';

const buildRhoContextSet_1 = () => {

  try{
    return R.compose(
      R.map(rhoContextMapFunction_1),
      R.split(',')
    )
    (longHookParagraph);
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build Rho Context Set 1.')
  }
}

export const rhoContextSet_1 =
  buildRhoContextSet_1();

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
    bakedNatto.genericShortHookElemental,
    'Generic short hook elemental');

  if(isShortHookExternal){

    checkNilWithString(
      bakedNatto.externalShortHookTrunk,
      'External short hook trunk of natto');

    checkNilWithArray(
      bakedNatto.externalSnapPeas,
      'External snap peas of natto');

    const effectiveShortHookTrunk =
      bakedNatto.externalShortHookTrunk;

    const effectiveSnapPeas =
      bakedNatto.externalSnapPeas;

    const effectiveShortHookElementalChinese =
      bakedNatto
      .genericShortHookElementalChinese;

    const effectiveShortHookElementalEnglish =
      getTwigElementalContextByChinese(
        effectiveShortHookElementalChinese)
      .twigElementalEnglish;

    const nattoNoddle = {
      _type: 'nattoNoddle',
      effectiveShortHookTrunk,
      effectiveSnapPeas,
      effectiveShortHookElementalChinese,
      effectiveShortHookElementalEnglish
    }

    return nattoNoddle;
  }
  else {

    checkNilWithString(
      bakedNatto.internslShortHookTrunk,
      'Internal short hook trunk of natto');

    checkNilWithArray(
      bakedNatto.internalSnapPeas,
      'Internal snap peas of natto');

    checkNilWithString(
      bakedNatto.genericShortHookElemental,
      'Generic short hook elemental of natto');

    const effectiveShortHookTrunk =
      bakedNatto.internslShortHookTrunk;

    const effectiveSnapPeas =
      bakedNatto.internalSnapPeas;

    const effectiveShortHookElementalChinese =
      bakedNatto.genericShortHookElementalChinese;

    const effectiveShortHookElementalEnglish =
      getTwigTrunkContextByChinese(
        effectiveShortHookElementalChinese)
      .twigElementalEnglish;

      const nattoNoddle = {
        _type: 'nattoNoddle',
        effectiveShortHookTrunk,
        effectiveSnapPeas,
        effectiveShortHookElementalChinese,
        effectiveShortHookElementalEnglish
      }

      return nattoNoddle;
  }

}
