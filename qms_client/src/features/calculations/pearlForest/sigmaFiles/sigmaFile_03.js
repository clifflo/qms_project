import * as R from 'ramda';
import {
  sigmaMonthChineseSet,
  sigmaBoardBranchChineseSet,
  sigmaTrunkChineseSet,
  sigmaSeasonChineseSet
} from './sigmaFile_02';

const determineSigmaBrakeCharacterType =
  sigmaBrakeCharacter => {

  const brakeCharacterIncludesFunction =
    sigmaVariousChineseSet =>
    R.includes(
      sigmaBrakeCharacter,
      sigmaVariousChineseSet)

  const brakeCharacterIsSigmaTrunk =
    brakeCharacterIncludesFunction(
      sigmaTrunkChineseSet);

  const brakeCharacterIsSigmaBoardBranch =
    brakeCharacterIncludesFunction(
      sigmaBoardBranchChineseSet);

  const brakeCharacterIsSigmaMonth =
    brakeCharacterIncludesFunction(
      sigmaMonthChineseSet);

  const brakeCharacterIsSigmaSeason =
    brakeCharacterIncludesFunction(
      sigmaSeasonChineseSet);

  if(brakeCharacterIsSigmaTrunk){
    return 'Trunk';
  }
  else if(brakeCharacterIsSigmaBoardBranch){
    return 'Branch'
  }
  else if(brakeCharacterIsSigmaMonth){
    return 'Month'
  }
  else if(brakeCharacterIsSigmaSeason){
    return 'Season';
  }
  else {
    throw new Error('Invalid brake character.');
  }




}

export const getSigmaBrakePartialSentenceType =
  sigmaBrakeBuiltPartialSentence => {

  const firstSigmaBrakeCharacterType =
    determineSigmaBrakeCharacterType(
      sigmaBrakeBuiltPartialSentence[0]);

  let comingSigmaBrakeCharacterType;

  for(let i = 1;
    i < sigmaBrakeBuiltPartialSentence.length,
    i++)
  {

    const cursorSigmaBrakeCharacterType =
      determineSigmaBrakeCharacterType(
        sigmaBrakeBuiltPartialSentence[i]);

    const changedSigmaBrakeCharacterType =
      cursorSigmaBrakeCharacterType !=
      firstSigmaBrakeCharacterType

    if(changedSigmaBrakeCharacterType){
      comingSigmaBrakeCharacterType =
      cursorSigmaBrakeCharacterType;
      break;
    }
  }

  return {
    firstSigmaBrakeCharacterType,
    comingSigmaBrakeCharacterType
  };
}
