import * as R from 'ramda';
import {
  checkNilWithUntypedObject
} from './_utilityHubBySigma';

export const
  convertSigmaClutchContextOfMonthBranchToOriginal =
  sigmaBrakeContextOfMonthBranch => {

  try{
    const sigmaBoltDictionaryOfMonthBranch =
      sigmaBrakeContextOfMonthBranch
      .sigmaBoltDictionary

    const sigmaBrakeTargetOfMonthBranch =
      sigmaBrakeContextOfMonthBranch
      .sigmaBrakeTarget;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfMonthBranch,
      'sigmaBoltDictionaryOfMonthBranch');

    const sigmaBoltPairsOfMonthBranch =
      R.toPairs(sigmaBoltDictionaryOfMonthBranch);

    checkNilWithArray(
      sigmaBoltPairsOfMonthBranch,
      'sigmaBoltPairsOfMonthBranch');

    const loadedHandleSigmaBoltOfMonthBranchToOriginal =
      R.curry
      (loadedHandleSigmaBoltOfMonthBranchToOriginal)
      (sigmaBrakeTargetOfMonthBranch);

    const sigmaBoltContextSetOfMonthBranch =
      R.map(
        loadedHandleSigmaBoltOfMonthBranchToOriginal,
        sigmaBoltPairsOfMonthBranch);

    checkNilWithArray(
      sigmaBoltContextSetOfMonthBranch,
      'sigmaBoltContextSetOfMonthBranch');

    const sigmaClutchContextOfMonthBranch = {
      sigmaBoltContextSetOfMonthBranch,
      ...sigmaBrakeContextOfMonthBranch,
      _type: 'SigmaClutchContextOfMonthBranch'
    };

    return sigmaClutchContextOfMonthBranch;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'convertSigmaClutchContextOfMonthBranchToOriginal');
  }
}

export const sigmaClutchContextOfMonthBranch =
  R.map(
    convertSigmaClutchContextOfMonthBranchToOriginal,
    sigmaBrakeContextPartialSetOfMonthBranch);
