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
  handleSigmaBoltOfMonthBranch
} from './sigmaFile_02';

export const
  getSigmaClutchContextOfMonthBranch =
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

    const loadedHandleSigmaBoltOfMonthBranch =
      R.curry
      (handleSigmaBoltOfMonthBranch)
      (sigmaBrakeTargetOfMonthBranch);

    const sigmaBoltContextSetOfMonth =
      R.map(
        loadedHandleSigmaBoltOfMonthBranch,
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
