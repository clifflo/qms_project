import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookParagraph
} from './rhoFile_03';
import {
  rhoContextMapFunction_1,
} from './rhoFile_04';
import {
  checkNilWithArray,
  checkNilWithString
} from '../../utilityFiles/utilityFile_01';

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
    bakedNattos);

  if(!natto){
    throw new Error(
      'Cannot find baked natto.');
  }

  checkNilWithString(
    natto.genericShortHookElemental,
    'Generic Short Hook Elemental');

  if(isShortHookExternal){

    checkNilWithString(
      natto.externalShortHookTrunk,
      'External short hook trunk of natto');

    checkNilWithArray(
      natto.externalSnapPeas,
      'External snap peas of natto');


    const effectiveShortHookTrunk =
      natto.externalShortHookTrunk;

    const effectiveSnapPeas =
      natto.externalSnapPeas;

    const effectiveShortHookElemental =
      natto.genericShortHookElemental;

    return {
      effectiveShortHookTrunk,
      effectiveSnapPeas,
      effectiveShortHookElemental
    }
  }
  else {

    checkNilWithString(
      natto.internslShortHookTrunk,
      'Internal short hook trunk of natto');

    checkNilWithArray(
      natto.internalSnapPeas,
      'Internal snap peas of natto');

    checkNilWithString(
      natto.genericShortHookElemental,
      'Generic short hook elemental of natto');

    // Displayed short hook bean trunk
    const effectiveShortHookTrunk = natto.internslShortHookTrunk;

    // Displayed bean branch series
    const effectiveSnapPeas = natto.internalSnapPeas;

    const genericShortHookElemental = natto.genericShortHookElemental;

    return {
      effectiveShortHookTrunk,
      effectiveSnapPeas,
      genericShortHookElemental
    }
  }

}
