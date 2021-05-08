import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  rhocs_1
} from './rho_02';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  bkntos,
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
      '[genericShortHookOriginal] should not be nil.');
  }

  const natto = R.find(
    R.propEq('genericShortHookOriginal', genericShortHookOriginal),
    bkntos);

  if(!natto){
    throw new Error(
      `Cannot find natto. ${genericShortHookOriginal} is not valid.`);
  }

  if(isShetp){

    E.cknws(natto.externalShortHookBeanTrunk, 'externalShortHookBeanTrunk');
    E.cknwa(natto.ebbrs, 'ebbrs');
    E.cknws(natto.genericShortHookElemental, 'genericShortHookElemental');

    // Displayed short hook bean trunk
    const dshbt = natto.externalShortHookBeanTrunk;

    // Displayed bean branch series
    const dbbrs = natto.ebbrs;

    const genericShortHookElemental = natto.genericShortHookElemental;

    return {
      dshbt,
      dbbrs,
      genericShortHookElemental
    }
  }
  else {

    E.cknws(natto.ishbt, 'externalShortHookBeanTrunk');
    E.cknwa(natto.ibbrs, 'ebbrs');
    E.cknws(natto.genericShortHookElemental, 'genericShortHookElemental');

    // Displayed short hook bean trunk
    const dshbt = natto.ishbt;

    // Displayed bean branch series
    const dbbrs = natto.ibbrs;

    const genericShortHookElemental = natto.genericShortHookElemental;

    return {
      dshbt,
      dbbrs,
      genericShortHookElemental
    }
  }

}

export const buildCrosses = (
  fullSnapPea,
  externalShortHookBeanTrunk,
  ishbt,
  crsi,
  lhcdwi,
  list) => {

  const crtk = lhcdwi <= 2 ?
    externalShortHookBeanTrunk : ishbt;

  const crossBranch = fullSnapPea[lhcdwi];

  const crbelc = getTwigElemc(crossBranch);
  const crbele = elementContext[crbelc];

  return {
    crsi,
    crtk,
    crossBranch,
    crbelc,
    lhcdwi
  }
}
