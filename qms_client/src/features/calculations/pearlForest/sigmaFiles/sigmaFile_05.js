import * as R from 'ramda';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfMonthOriginal
} from './sigmaFile_01';
import {
  handleSigmaBoltOfMonthOriginal
} from './sigmaFile_04';

export const
  getSigmaClutchContextOfMonthOriginal =
  sigmaBrakeContextOfMonthOriginal => {

  try{

    const sigmaBoltDictionaryOfMonthOriginal =
      sigmaBrakeContextOfMonthBranch
      .sigmaBoltDictionary;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfMonthOriginal,
      'sigmaBoltDictionaryOfMonthOriginal');

    const sigmaBrakeTargetOfMonthOriginal =
      sigmaBrakeContextOfMonthBranch
      .sigmaBrakeTarget;

    checkNilWithString(
      sigmaBrakeTargetOfMonthOriginal,
      'sigmaBrakeTargetOfMonthOriginal');

    const sigmaBoltPairsOfMonthBranch =
      R.toPairs(sigmaBoltDictionaryOfMonthBranch);

    checkNilWithArray(
      sigmaBoltPairsOfMonthBranch,
      'sigmaBoltPairsOfMonthBranch');

    const loadedHandleSigmaBoltOfMonthOriginal =
      R.curry
      (handleSigmaBoltOfMonthOriginal)
      (sigmaBrakeTargetOfMonthOriginal);

    const sigmaBoltContextSetOfMonth =
      R.map(
        loadedHandleSigmaBoltOfMonthOriginal,
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
