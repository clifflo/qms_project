import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_2
} from './rho_2';
import {
  nattos,
  getRcxtvByLhn
} from './rho_1';
import {
  utGetIdx
} from '../../utils/util_1';
import {
  getElre
} from '../../twigs/twig_1';
import {
  buildRjkdi,
  rhpals,
  rhgbs
} from './rho_3';

const rblhss =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const getRhgbs = () => {

  const sLhidx = 63;

  const mapFn = tLhname => {

    const tLhidx =
      getRcxt1ByLhn(tLhname)
      .lhidx;

    if(R.isNil(tLhidx)){
      throw new Error(
        'Target LHIDX should not be nil.');
    }

    if(!RA.isNumber(tLhidx)){
      throw new Error(
        'How come the long hook '
        + 'index becomes a string?');
    }

    const gapBinary = decimalToBinary(
      sLhidx ^ tLhidx,
      6);

    return gapBinary;
  }

  try{

    const rhgbs_1 = R.map(mapFn, rblhss);
    const rhgbs_2 = R.uniq(rhgbs_1);

    if(rhgbs_2.length != 7){
      throw new Error(
        'It must have 7 Rho hook gap binaries'
        + 'only but now it has '
        + rhgbs_2.length + '.');
    }

    return R.map(mapFn, rblhss);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho hook gap binaries set.');
  }
}

export const rhgbs = getRhgbs();

const getRhpals = () => {

  const mapFn_1 =
    (gshori, gapBinary, index) => {

    try{

      const gapDecimal = binaryToDecimal(gapBinary);

      const rhlhn = '純' + gshori;
      const rhlix =
        getRcxt1ByLhn(rhlhn)
        .lhidx;

      if(R.isNil(rhlix)){
        throw new Error(
          'RHLIX should not be nil.');
      }

      const rglhi = gapDecimal ^ rhlix;
      const rglct1 =
        getRcxt1ByLhx(rglhi);

      return rglct1.lhname;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Error in getting hook series.')
    }
  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = gshori => {

    const rlhkss_1 = RA.mapIndexed(
      mapFn_1c(gshori), rhgbs);

    const rlhkss_2 = R.prepend(
      '純' + gshori, rlhkss_1);

    return {
      rhshn: gshori,
      rlhkss: rlhkss_2
    }
  }

  const result = R.map(
    mapFn_2, gshoriOrder);

  return result;
}

export const rhksrs = getRhksrs();

export const buildRjkdi = rlhgn => {

  const mapper = {
    0: 5,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 3,
    7: 2
  }

  const lhcuwi = mapper[rlhgn];
  const lhcdwi = 5 - lhcuwi;
  return lhcdwi;
}

const getRhocs_3 = () => {

  const mapFn_1 = (
    rhksrs,
    lhname,
    rlhgn) => {

    try{

      const rjkdi = buildRjkdi(rlhgn);
      const rkgdi = (rjkdi + 3) % 6;

      return {
        lhname,
        rhshn: rhksrs.rhshn,
        rlhgn,
        rjkdi,
        rkgdi
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Mapfn 2 error for get RHOCS_3.');
    }

  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = rhksrs => {

    try{

      const result = RA.mapIndexed(
        mapFn_1c(rhksrs),
        rhksrs.rlhkss);

      return result;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Get RHOCS_3 Map Function 2 error.')
    }

  }

  try{
    const nestedList = R.map(mapFn_2, rhpals);
    const flatList = R.flatten(nestedList);
    return flatList;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RHOCS_3.');
  }

}

const rhocs_3 = getRhocs_3();

const getRcxt3ByLn = lhname => {

  if(R.isNil(lhname)){
    throw new Error(
      'Long hook name should not be nil '
      + 'for RHOCS_3.');
  }

  const rhocxt_3 = R.find(
    R.propEq('lhname', lhname),
    rhocs_3);

  if(R.isNil(rhocxt_3)){
    throw new Error(
      `${lhname} is not a valid long hook `
      + 'name for RHOCS_3.');
  }

  return rhocxt_3;
}

const getRhocs_4 = () => {

  const mapFn = rhocxt_3 => {

    const rhocxt_2 = R.find(
      R.propEq('lhname', rhocxt_3.lhname),
      rhocs_2);

    const natto = R.find(
      R.propEq('gshkor', rhocxt_3.rhshn),
      nattos);

    if(R.isNil(natto)){
      throw new Error(
        'Natto should not be nil.');
    }

    const rhshel = natto.gshele;

    if(R.isNil(rhshel)){
      throw new Error(
        'RHSHEL should not be nil.');
    }

    return {
      ...rhocxt_2,
      ...rhocxt_3,
      rhshel
    }
  }

  try {

    const rhocs_4a = R.map(mapFn, rhocs_3);

    const rhocs_4b = R.sortBy(
      R.prop('rglhi'), rhocs_4a);

    return rhocs_4b;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RHOCS_4.');
  }
}

export const rhocs_4 = getRhocs_4();

export const getRcxt4ByLhn = lhname => {
  try {
    return getRcxtvByLhn(
      lhname, rhocs_4, 4);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_4 by long hook name.')
  }
}
