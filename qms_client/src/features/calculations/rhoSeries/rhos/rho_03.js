import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
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
  elemod
} from '../../twigs/twig_01';
import {
  getElem
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

    if(R.isNil(natto.eshbt)){
      throw new Error(
        'ESHBT should not be nil.')
    }

    if(R.isNil(natto.ebbrs)){
      throw new Error(
        'EBBRS should not be nil.');
    }

    return {
      lshbt: natto.eshbt,
      lbbrs: natto.ebbrs
    }
  }
  else {

    const lshbt = natto.ishbt;
    const lbbrs = natto.ibbrs;

    if(R.isNil(lshbt)){
      throw new Error(
        '[lshbt] should not be nil.');
    }

    if(R.isNil(lbbrs)){
      throw new Error(
        '[lbbrs] should not be nil.');
    }

    return {
      lshbt,
      lbbrs
    }
  }

}

const buildCrosses = (
  fbbrs,
  eshbt,
  ishbt,
  crsi,
  lhcdwi,
  list) => {

  const crtk = lhcdwi <= 2 ?
    eshbt : ishbt;

  const crbh = fbbrs[lhcdwi];

  const crbel = getElem(crbh);

  return {
    crsi,
    crtk,
    crbh,
    crbel,
    lhcdwi
  }
}
