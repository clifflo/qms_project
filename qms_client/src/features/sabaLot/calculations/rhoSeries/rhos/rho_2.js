import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utils/util_2';
import {
  rhocs_1,
  nattos,
  getRcxtvByLhn
} from './rho_1';
import {
  getElem
} from '../../twigs/twig_1';

const getTrnto = (
  gshkor,
  isShetp) => {

  if(R.isNil(gshkor)){
    throw new Error(
      'GSHKOR should not be nil.');
  }

  const natto = R.find(
    R.propEq('gshkor', gshkor), nattos);

  if(!natto){
    throw new Error(
      `Cannot find natto. ${gshkor} is not valid.`);
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
        'ISHBT should not be nil.');
    }

    if(R.isNil(lbbrs)){
      throw new Error(
        'IBBRS should not be nil.');
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

  const cbel = getElem(crbh);

  return {
    crsi,
    crtk,
    crbh,
    cbel
  }
}

export const getRhocs_2 = (lhs) => {

  const mapFn = (lh) => {

    try {

      const eshBinary = decimalToBinary(
        lh.eshidx, 3);

      const ishBinary = decimalToBinary(
        lh.ishidx, 3);

      let ebbrs; // External Bean Branch Series
      let eshbt; // External Short Hook Bean Trunk
      let ibbrs; // Internal Bean Branch Series
      let ishbt; // Internal Short Hook Bean Trunk

      const etn = getTrnto(
        lh.eshkor, true);

      const itn = getTrnto(
        lh.ishkor, false);

      ebbrs = etn.lbbrs;
      eshbt = etn.lshbt;
      ibbrs = itn.lbbrs;
      ishbt = itn.lshbt;

      if(R.isNil(ebbrs)){
        throw new Error(
          'EBBRS should not be nil.')
      }

      if(R.isNil(ibbrs)){
        throw new Error(
          'IBBRS should not be nil.')
      }

      const fbbrs = R.concat(ebbrs, ibbrs);

      const lhBinary = decimalToBinary(
        lh.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const lhcres = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhname: lh.lhname,
        eshkor: lh.eshkor,
        ishkor: lh.ishkor,
        lhcres
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Cannot build bean branch series.');
    }

  }

  return R.map(mapFn, lhs)
}

export const rhocs_2 = getRhocs_2(rhocs_1);

export const getRcxt2ByLhn = lhname => {

  try {
    return getRcxtvByLhn(
      lhname, rhocs_2, 2);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_2 by long hook name.')
  }
}
