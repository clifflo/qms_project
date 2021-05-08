import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  rhoContextSet_1
} from './rho_02';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  bakedNattos,
  gshoro
} from './rho_01';
import {
  isValidElem,
  elementalOrder,
  getTwigElemc
} from '../../twigs/twig_01';
import {
  getTwigElemc
} from '../../twigs/twig_02';

export const getTrnto = (
  genericShortHookOriginal,
  isShetp) => {

  if(R.isNil(genericShortHookOriginal)){
    throw new Error(
      'Generic Short HookOriginal should not be nil.');
  }

  const natto = R.find(
    R.propEq(
      'genericShortHookOriginal',
      genericShortHookOriginal),
    bakedNattos);

  if(!natto){
    throw new Error(
      'Cannot find natto. '
      + genericShortHookOriginal
      + ' '
      + 'is not a valid Generic '
      + 'Short Hook Original.');
  }

  if(isShetp){

    E.checkNilWithString(
      natto.externalShortHookTrunk,
      'External Short Hook Trunk');

    E.checkNilWithArray(
      natto.externalSnapPeas,
      'External Snap Peas');

    E.checkNilWithString(
      natto.genericShortHookElemental,
      'Generic Short Hook Elemental');

    const effectiveShortHookTrunk =
      natto.externalShortHookTrunk;

    const effectiveSnapPeas =
      natto.externalSnapPeas;

    const genericShortHookElemental =
      natto.genericShortHookElemental;

    return {
      effectiveShortHookTrunk,
      effectiveSnapPeas,
      genericShortHookElemental
    }
  }
  else {

    E.checkNilWithString(natto.internslShortHookTrunk, 'externalShortHookTrunk');
    E.checkNilWithArray(natto.internalSnapPeas, 'externalSnapPeass');
    E.checkNilWithString(natto.genericShortHookElemental, 'genericShortHookElemental');

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

export const buildCrosses = (
  fullSnapPeass,
  externalShortHookTrunk,
  internslShortHookTrunk,
  crossSign,
  longHookCrossDownwardIndex,
  list) => {

  const crtk =
    longHookCrossDownwardIndex <= 2 ?
    externalShortHookTrunk :
    internslShortHookTrunk;

  const crossBranch = fullSnapPeass[
    longHookCrossDownwardIndex];

  const crbelc = getTwigElemc(crossBranch);
  const crbele = elementContext[crbelc];

  return {
    crossSign,
    crtk,
    crossBranch,
    crbelc,
    longHookCrossDownwardIndex
  }
}
