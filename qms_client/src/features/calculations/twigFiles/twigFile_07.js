import * as R from 'ramda';
import {
  checkNilWithNumber,
  getCyclicItemFromList,
  checkNilWithString,
  findItemByStringFromList
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
  boardTwigBranchChinese => {

  try{

    checkNilWithString(
      boardTwigBranchChinese,
      'boardTwigBranchChinese');

    if(!isValidBoardTwigBranchChinese(
      boardTwigBranchChinese)){
      throw new Error(
        'Invalid board twig branch Chinese.')
    }

    if(isValidTwigBranchChinese(
      boardTwigBranchChinese)){

      const twigBranchContext =
          findItemByStringFromList(
            twigBranchContextSet,
            twigBranchChinese,
            'twigBranchChinese');


        return twigBranchContext;
    }


  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by Chinese.');
  }
}
