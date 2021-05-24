import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfYearBranch
} from './sigmaMiniHub_01';
import {
  handleSigmaBoltOfYearBranch
} from './sigmaMiniHub_04';

const getSigmaClutchContextOfYearBranch =
  sigmaBrakeContextOfYearBranch => {

  try{

    const sigmaBoltDictionaryOfYearBranch =
      sigmaBrakeContextOfYearBranch
      .sigmaBoltDictionary;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfYearBranch,
      'sigmaBoltDictionaryOfYearBranch');

    const sigmaBrakeTargetOfYearBranch =
      sigmaBrakeContextOfYearBranch
      .sigmaBrakeTarget;

    checkNilWithString(
      sigmaBrakeTargetOfYearBranch,
      'sigmaBrakeTargetOfYearBranch');

    const sigmaBoltPairsOfYearBranch =
      R.toPairs(sigmaBoltDictionaryOfYearBranch);

    checkNilWithArray(
      sigmaBoltPairsOfYearBranch,
      'sigmaBoltPairsOfYearBranch');

    const loadedHandleSigmaBoltOfYearBranch =
      R.curry
      (handleSigmaBoltOfYearBranch)
      (sigmaBrakeTargetOfYearBranch);

    const sigmaBoltContextSetOfYearBranch =
      R.map(
        loadedHandleSigmaBoltOfYearBranch,
        sigmaBoltPairsOfYearBranch);

    checkNilWithArray(
      sigmaBoltContextSetOfYearBranch,
      'sigmaBoltContextSetOfYearBranch');

    const sigmaClutchContextOfYearBranch = {
      sigmaBoltContextSetOfYearBranch,
      ...sigmaBrakeContextOfYearBranch,
      _type: 'SigmaClutchContextOfYearBranch'
    };

    return sigmaClutchContextOfYearBranch;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getSigmaClutchContextOfYearBranch');
  }
}

export const sigmaClutchContextOfYearBranch =
  R.map(
    getSigmaClutchContextOfYearBranch,
    sigmaBrakeContextPartialSetOfYearBranch);
