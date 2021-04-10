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


export const getRcxtvByLhx = (
  lhidx,
  rocsvo,
  rocsvn) => {

  if(R.isNil(rocsvo)){
    throw new Error(
      'RHCSVO should not be nil.');
  }

  if(!RA.isArray(rocsvo)){
    throw new Error(
      'ROCSVO must be an array.');
  }

  if(R.isNil(rocsvn)){
    throw new Error(
      'ROCSVN should not be nil.');
  }

  if(!RA.isNumber(rocsvn)){
    throw new Error(
      'ROCSVN must be a number.');
  }

  if(R.isNil(lhidx)){
    throw new Error(
      'Long hook index should not be nil.');
  }

  const rcxtvo = R.find(
    R.propEq('lhidx', lhidx),
    rocsvo);

  if(R.isNil(rcxtvo)){
    throw new Error(
      `${lhidx} is not a valid long hook index `
      + `for rho context ${rocsvn}`);
  }

  return rcxtvo;
}

export const getRcxtvByLhn = (
  lhname,
  rocsvo,
  rocsvn) => {

  if(R.isNil(rocsvo)){
    throw new Error(
      'RHCSVO should not be nil.');
  }

  if(!RA.isArray(rocsvo)){
    throw new Error(
      'ROCSVO must be an array.');
  }

  if(R.isNil(rocsvn)){
    throw new Error(
      'ROCSVN should not be nil.');
  }

  if(!RA.isNumber(rocsvn)){
    throw new Error(
      'ROCSVN must be a number.');
  }

  if(R.isNil(lhname)){
    throw new Error(
      'LHNAME should not be nil.');
  }

  const rcxtvo = R.find(
    R.propEq('lhname', lhname),
    rocsvo);

  if(R.isNil(rcxtvo)){
    throw new Error(
      `${lhname} is not a valid long hook `
      + `for rho context ${rocsvn}`);
  }

  return rcxtvo;
}

export const getRcxt1ByLhn = lhname => {

  try {
    return getRcxtvByLhn(
      lhname, rhocs_1, 1);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_1 by long hook name.')
  }
}

export const getRcxt1ByLhx = lhidx => {

  try {
    return getRcxtvByLhx(
      lhidx, rhocs_1, 1);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_1 by long hook index.')
  }
}


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

      let ebbrs; // External Bean Branch Series
      let eshbt; // External Short Hook Bean Trunk
      let ibbrs; // Internal Bean Branch Series
      let ishbt; // Internal Short Hook Bean Trunk

      const etn = getTrnto(
        rhocxt.eshkor, true);

      const itn = getTrnto(
        rhocxt.ishkor, false);

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
        eshkor: rhocxt.eshkor,
        ishkor: rhocxt.ishkor,
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
