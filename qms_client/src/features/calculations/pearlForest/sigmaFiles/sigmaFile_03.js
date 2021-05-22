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

  const brakeCharacterIsMoon =
    sigmaBrakeCharacter == '月';

  const brakeCharacterIsSun =
    sigmaBrakeCharacter == '日';

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
  else if(brakeCharacterIsMoon){
    return 'Moon';
  }
  else if(brakeCharacterIsSun){
    return 'Sun';
  }
  else {
    throw new Error('Invalid brake character.');
  }
}

export const getSigmaBrakeSentenceType =
  sigmaBrakeBuiltPartialSentence => {

  const firstSigmaBrakeCharacterType =
    determineSigmaBrakeCharacterType(
      sigmaBrakeBuiltPartialSentence[0]);

  let comingSigmaBrakeCharacterType;
  let throughMoonOrSun;

  for(let i = 1;
    i < sigmaBrakeBuiltPartialSentence.length;
    i++)
  {
    const cursorSigmaBrakeCharacterType =
      determineSigmaBrakeCharacterType(
        sigmaBrakeBuiltPartialSentence[i]);

    const cursorDifferentThanFirst =
      cursorSigmaBrakeCharacterType !=
      firstSigmaBrakeCharacterType

    const cursorIsMoonOrSun =
      (cursorSigmaBrakeCharacterType == 'Moon')
      || (cursorSigmaBrakeCharacterType == 'Sun');

    if(cursorIsMoonOrSun){
      throughMoonOrSun = true;
    }

    const sigmaBrakeSecondCharacterTypeHit =
      cursorDifferentThanFirst
      && !cursorIsMoonOrSun;

    if(sigmaBrakeSecondCharacterTypeHit){
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
