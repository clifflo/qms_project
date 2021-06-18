import * as R from 'ramda';
import {
  checkNilWithNumber,
  getCyclicItemFromList,
  checkNilWithString,
  findItemByStringFromList
} from './_utilityHubByTwig';
import {
  twigBranchContextSet,
  isValidBoardTwigBranchChinese,
  isValidTwigBranchChinese
} from './twigMiniHub_01';

export const getTwigBranchContextByIndex =
  twigBranchIndex => {

  try{
    checkNilWithNumber(
      twigBranchIndex,
      'twigBranchIndex');

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
          boardTwigBranchChinese,
          'twigBranchChinese');

      return twigBranchContext;
    }
    else {

      const twigBranchContext =
        findItemByStringFromList(
          twigBranchContextSet,
          '生肖' + boardTwigBranchChinese,
          'twigAnimalSimpleChinese');

      return twigBranchContext;
    }
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig branch context by Chinese.');
  }
}
