import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfDayBranch
} from './sigmaMiniHub_01';
import {
  handleSigmaBoltOfDayBranch
} from './sigmaFile_10';

const getSigmaClutchContextOfDayBranch =
  sigmaBrakeContextOfDayBranch => {

  try{

    const sigmaBoltDictionaryOfDayBranch =
      sigmaBrakeContextOfDayBranch
      .sigmaBoltDictionary;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfDayBranch,
      'sigmaBoltDictionaryOfDayBranch');

    const sigmaBrakeTargetOfDayBranch =
      sigmaBrakeContextOfDayBranch
      .sigmaBrakeTarget;

    checkNilWithString(
      sigmaBrakeTargetOfDayBranch,
      'sigmaBrakeTargetOfDayBranch');

    const sigmaBoltPairsOfDayBranch =
      R.toPairs(sigmaBoltDictionaryOfDayBranch);

    checkNilWithArray(
      sigmaBoltPairsOfDayBranch,
      'sigmaBoltPairsOfDayBranch');

    const loadedHandleSigmaBoltOfDayBranch =
      R.curry
      (handleSigmaBoltOfDayBranch)
      (sigmaBrakeTargetOfDayBranch);

    const sigmaBoltContextSetOfDayBranch =
      R.map(
        loadedHandleSigmaBoltOfDayBranch,
        sigmaBoltPairsOfDayBranch);

    checkNilWithArray(
      sigmaBoltContextSetOfDayBranch,
      'sigmaBoltContextSetOfDayBranch');

    const sigmaClutchContextOfDayBranch = {
      sigmaBoltContextSetOfDayBranch,
      ...sigmaBrakeContextOfDayBranch,
      _type: 'SigmaClutchContextOfDayBranch'
    };

    return sigmaClutchContextOfDayBranch;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getSigmaClutchContextOfDayBranch');
  }
}

export const sigmaClutchContextSetOfDayBranch =
  R.map(
    getSigmaClutchContextOfDayBranch,
    sigmaBrakeContextPartialSetOfDayBranch);
