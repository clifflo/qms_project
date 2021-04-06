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

const getRhocs_3 = () => {

  const mapFn_1 = (
    rhkpal,
    lhname,
    rlhgn) => {

    try{

      const rjkdi = buildRjkdi(rlhgn);
      const rkgdi = (rjkdi + 3) % 6;

      return {
        lhname,
        rhshn: rhkpal.rhshn,
        rlhgn,
        rjkdi,
        rkgdi
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for '
        + 'get hook palace set 2.');
    }

  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = rhkpal => {

    try {

      const result = RA.mapIndexed(
        mapFn_1c(rhkpal),
        rhkpal.rlhkss);

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
      + 'for RHOCS_3.');
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
