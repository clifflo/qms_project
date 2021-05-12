import * as R from 'ramda';
import {
  checkNilWithNumber,
  getCyclicItemFromList,
  checkNilWithString,
  getItemByStringFromList
} from './utilityHubCloneOfTwig';
import {
  twigBranchContextSet
} from './twigMiniHub_01';

export const getTwigBranchContextByIndex =
  twigBranchIndex => {

  try{
    checkNilWithNumber(
      twigBranchIndex, 'Twig branch index');

    return getCyclicItemFromList(
      twigBranchContextSet,
      twigBranchIndex,
      'twigBranchIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by index.');
  }
}

export const getTwigBranchContextByChinese =
  twigBranchChinese => {

  try{

    checkNilWithString(
      twigBranchChinese,
      'Twig branch chinese');

    const twigBranchContext = getItemByStringFromList(
      twigBranchContextSet,
      twigBranchChinese,
      'twigBranchChinese');

    if(R.isNil(twigBranchContext)){
      throw new Error(
        twigBranchChinese + ' '
        + 'is not a valid twig branch chinese.');
    }

    return twigBranchContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by chinese.');
  }
}
