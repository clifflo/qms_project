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
  getTwigElemce
} from '../../twigs/twig_01';
import {
  getTwigElemc
} from '../../twigs/twig_02';

export const getTrnto = (
  gshori,
  isShetp) => {

  if(R.isNil(gshori)){
    throw new Error(
      '[gshori] should not be nil.');
  }

  const natto = R.find(
    R.propEq('gshori', gshori),
    bkntos);

  if(!natto){
    throw new Error(
      `Cannot find natto. ${gshori} is not valid.`);
  }

  if(isShetp){

    E.cknws(natto.eshbt, 'eshbt');
    E.cknwa(natto.ebbrs, 'ebbrs');
    E.cknws(natto.gshele, 'gshele');

    // Displayed short hook bean trunk
    const dshbt = natto.eshbt;

    // Displayed bean branch series
    const dbbrs = natto.ebbrs;

    const gshele = natto.gshele;

    return {
      dshbt,
      dbbrs,
      gshele
    }
  }
  else {

    E.cknws(natto.ishbt, 'eshbt');
    E.cknwa(natto.ibbrs, 'ebbrs');
    E.cknws(natto.gshele, 'gshele');

    // Displayed short hook bean trunk
    const dshbt = natto.ishbt;

    // Displayed bean branch series
    const dbbrs = natto.ibbrs;

    const gshele = natto.gshele;

    return {
      dshbt,
      dbbrs,
      gshele
    }
  }

}

export const buildCrosses = (
  fbbrs,
  eshbt,
  ishbt,
  crsi,
  lhcdwi,
  list) => {

  const crtk = lhcdwi <= 2 ?
    eshbt : ishbt;

  const crbh = fbbrs[lhcdwi];

  const crbelc = getTwigElemc(crbh);
  const crbele = elementContext[crbelc];

  return {
    crsi,
    crtk,
    crbh,
    crbelc,
    lhcdwi
  }
}
