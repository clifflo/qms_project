import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithNumber,
  checkNilWithString,
  getCyclicItemFromList,
  findItemByStringFromList
} from './_utilityHubByTwig';
import {
  twigTrunkContextSet
} from './twigMiniHub_01';

export const getTwigTrunkContextByIndex =
  twigTrunkIndex => {

  try{
    checkNilWithNumber(
      twigTrunkIndex, 'Twig trunk index');

    return getCyclicItemFromList(
      twigTrunkContextSet,
      twigTrunkIndex,
      'twigTrunkIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig trunk context by index.');
  }
}

export const getTwigTrunkContextByChinese =
  twigTrunkChinese => {

  try{

    checkNilWithString(
      twigTrunkChinese,
      'Twig trunk Chinese');

    const twigTrunkContext =
      findItemByStringFromList(
        twigTrunkContextSet,
        twigTrunkChinese,
        'twigTrunkChinese');

    if(R.isNil(twigTrunkContext)){
      throw new Error(
        twigTrunkChinese + ' '
        + 'is not a valid twig trunk Chinese.');
    }

    return twigTrunkContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig trunk context by Chinese.');
  }
}
