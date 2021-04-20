import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  branmi,
  brmhmi,
  isValidAnimal,
  isValidMonth
} from './twig_07';
import {
  isValidBranch
} from './twig_01';

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
