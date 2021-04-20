import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getBrsfcv
} from './twig_08';
import {
  idxOfBranch,
  idxOfTrunk
} from './twig_01';

// MBGBRH is may be generic branch.
export const getBrhdcv = mbgbrh => {
  if(R.isNil(mbgbrh)){
    throw new Error(
      'MBGBRH should not be nil.');
  }

  if(!RA.isString(mbgbrh)){
    throw new Error('MBGBRH must be a string.');
  }

  const brsfcv = getBrsfcv(mbgbrh);

  if(brsfcv){
    return brsfcv;
  }
  else {
    return mbgbrh;
  }
}

// BRCVSC is branch convert sentence candidate.
export const getBhdcvs = brcvsc => {

  if(R.isNil(brcvsc)){
    throw new Error(
      'BRCVSC should not be nil.');
  }

  if(!RA.isString(brcvsc)){
    throw new Error(
      'BRCVSC must be a string.');
  }

  return R.map(getBrhdcv, brcvsc);
}
