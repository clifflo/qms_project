import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  indexOfBranch,
  indexOfTrunk,
  isValidBranch
} from './twig_01';
import {
  isValidAnimal,
  isValidMonth,
  animalOrder,
  monthOrder
} from './twig_11';
import {
  branmi,
  brmhmi
} from './twig_08';


// BRFAN means Branch from animal
export const getBrfan = animal => {

  if(R.isNil(animal)){
    throw new Error(
      'Animal should not be nil.');
  }

  if(!RA.isString(animal)){
    throw new Error(
      'Animal must be string.');
  }

  if(!isValidAnimal(animal)){
    throw new Error(
      `${animal} is not a valid animal.`);
  }

  const brfan = branmi[animal];

  if(R.isNil(brfan)){
    throw new Error('BRFAN should not be nil.');
  }

  if(!isValidBranch(brfan)){
    throw new Error('BRFAN must be a valid branch.');
  }

  return brfan;
}

export const getBrfmn = month => {

    if(R.isNil(month)){
      throw new Error(
        'Month should not be nil.');
    }

    if(!RA.isString(month)){
      throw new Error(
        'Month must be string.');
    }

    if(!isValidMonth(month)){
      throw new Error(
        `${month} is not a valid month.`);
    }

    const brfmn = brmhmi[month];

    if(!isValidBranch(brfmn)){
      throw new Error('BRFMN must be a valid branch.');
    }

    return brfmn;
}

// Branch soft convert from any branch
// which stands for any sort of
// animal, month or branch itself.
// For hard convert (convert that must be
// done or return original), please
// refers to BRHDCT.
export const getBrsfcv = genbrh => {

  if(R.isNil(genbrh)){
    throw new Error(
      'GENBRH should not be nil.');
  }

  if(!RA.isString(genbrh)){
    throw new Error('GENBRH must be a string.');
  }

  try{
    if(isValidBranch(genbrh)){
      return genbrh;
    }
    else if(isValidAnimal(genbrh)){
      return getBrfan(genbrh);

    }
    else {
      return null;
    }
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get BRSFCT.');
  }

}

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
