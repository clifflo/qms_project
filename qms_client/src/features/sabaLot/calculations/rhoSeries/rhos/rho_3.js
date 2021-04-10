import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getElem
} from '../../twigs/twig_1';
import {
  decimalToBinary,
  binaryToDecimal
} from '../../utils/util_2';
import {
  nattos,
  rhocs_1
} from './rho_1';
import {
  getRcxtvByLhn,
  getRcxt1ByLhx,
  getRcxt1ByLhn
} from './rho_2';

const getTrnto = (
  gshori,
  isShetp) => {

  const firstGshori = nattos[0].gshori;

  if(R.isNil(firstGshori)){
    throw new Error(
      'First natto does not have GSHORI. '
      + 'Please check the schema.');
  }

  if(R.isNil(gshori)){
    throw new Error(
      'GSHORI should not be nil.');
  }

  const natto = R.find(
    R.propEq('gshori', gshori), nattos);

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

  const crbel = getElem(crbh);

  return {
    crsi,
    crtk,
    crbh,
    crbel,
    lhcdwi
  }
}


export const getRhocs_2 = () => {

  const mapFn = rhocxt => {

    try{

      const eshBinary = decimalToBinary(
        rhocxt.eshidx, 3);

      const ishBinary = decimalToBinary(
        rhocxt.ishidx, 3);

      let ebbrs; // External bean branch series
      let eshbt; // External short hook bean trunk
      let ibbrs; // Internal bean branch series
      let ishbt; // Internal short hook bean trunk

      // External short hook content
      const eshcot = getTrnto(
        rhocxt.eshori, true);

      // Internal short hook content
      const ishcot = getTrnto(
        rhocxt.ishori, false);

      if(R.isNil(eshcot)){
        throw new Error(
          'ESHCOT should not be nil.');
      }

      if(R.isNil(ishcot)){
        throw new Error(
          'ISHCOT should not be nil.');
      }

      ebbrs = eshcot.lbbrs;
      eshbt = eshcot.lshbt;
      ibbrs = ishcot.lbbrs;
      ishbt = ishcot.lshbt;

      if(R.isNil(ebbrs)){
        throw new Error(
          'EBBRS should not be nil.')
      }

      if(R.isNil(ibbrs)){
        throw new Error(
          'IBBRS should not be nil.')
      }

      if(R.isNil(eshbt)){
        throw new Error(
          'ESHBT should not be nil.');
      }

      if(R.isNil(ishbt)){
        throw new Error(
          'ISHBT should not be nil.');
      }

      const fbbrs = R.concat(ebbrs, ibbrs);

      const lhBinary = decimalToBinary(
        rhocxt.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const lhcres = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhname: rhocxt.lhname,
        eshori: rhocxt.eshori,
        ishori: rhocxt.ishori,
        lhcres
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Cannot build bean branch series.');
    }

  }

  return R.map(mapFn, rhocs_1)
}

export const rhocs_2 = getRhocs_2();

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
