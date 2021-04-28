import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  rhocs_1,
  nattos
} from './rho_02';
import {
  getElem
} from '../../twigs/twig_01';

export const getRcxtvByLhx = (
  lhidx,
  rocsob,
  rocsvn) => {

  if(R.isNil(rocsob)){
    throw new Error(
      'ROCSOB should not be nil.');
  }

  if(!RA.isArray(rocsob)){
    throw new Error(
      'ROCSOB must be an array.');
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
      'LHIDX should not be nil.');
  }

  const rcxtob = R.find(
    R.propEq('lhidx', lhidx),
    rocsob);

  if(R.isNil(rcxtob)){
    throw new Error(
      `${lhidx} is not a valid long hook index `
      + `for rho context ${rocsvn}`);
  }

  return rcxtob;
}

export const getRcxtvByLhn = (
  lhname,
  rocsob,
  rocsvn) => {

  if(R.isNil(rocsob)){
    throw new Error(
      'ROCSOB should not be nil.');
  }

  if(!RA.isArray(rocsob)){
    throw new Error(
      'ROCSOB must be an array.');
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

  const rcxtob = R.find(
    R.propEq('lhname', lhname),
    rocsob);

  if(R.isNil(rcxtob)){
    throw new Error(
      `${lhname} is not a valid long hook `
      + `for rho context ${rocsvn}`);
  }

  // Rho context filtered by
  const rcfb = 'Long hook name';

  return {
    ...rcxtob,
    rocsvn,
    rcfb
  };
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
