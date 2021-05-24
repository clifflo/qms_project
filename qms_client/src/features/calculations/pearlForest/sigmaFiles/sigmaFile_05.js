import * as R from 'ramda';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfMonthBranch
} from './sigmaFile_01';
import {
  handleSigmaBoltOfMonthBranchToOriginal
} from './sigmaFile_02';

export const
  getSigmaClutchContextOfMonthOriginal =
  sigmaBrakeContextOfMonthOriginal => {

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
      (handleSigmaBoltOfMonthBranchToOriginal)
      (sigmaBrakeTargetOfMonthBranch);

    const sigmaBoltContextSetOfMonth =
      R.map(
        loadedHandleSigmaBoltOfMonthBranchToOriginal,
        sigmaBoltPairsOfMonthBranch);

    checkNilWithArray(
      sigmaBoltContextSetOfMonth,
      'sigmaBoltContextSetOfMonth');

    const sigmaClutchContextOfMonthBranch = {
      sigmaBoltContextSetOfMonth,
      ...sigmaBrakeContextOfMonthBranch,
      _type: 'SigmaClutchContextOfMonth'
    };

    return sigmaClutchContextOfMonthBranch;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getSigmaClutchContextOfMonthBranch');
  }
}

export const sigmaClutchContextOfMonthBranch =
  R.map(
    getSigmaClutchContextOfMonthBranch,
    sigmaBrakeContextPartialSetOfMonthBranch);
