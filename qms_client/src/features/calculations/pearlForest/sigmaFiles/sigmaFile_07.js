import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfSeason
} from './sigmaMiniHub_01';
import {
  handleSigmaBoltOfSeason
} from './sigmaMiniHub_02';

const getSigmaClutchContextOfSeason =
  sigmaBrakeContextOfSeason => {

  try{

    const sigmaBoltDictionaryOfSeason =
      sigmaBrakeContextOfSeason
      .sigmaBoltDictionary;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfSeason,
      'sigmaBoltDictionaryOfSeason');

    const sigmaBrakeTargetOfSeason =
      sigmaBrakeContextOfSeason
      .sigmaBrakeTarget;

    checkNilWithString(
      sigmaBrakeTargetOfSeason,
      'sigmaBrakeTargetOfSeason');

    const sigmaBoltPairsOfSeason =
      R.toPairs(sigmaBoltDictionaryOfSeason);

    checkNilWithArray(
      sigmaBoltPairsOfSeason,
      'sigmaBoltPairsOfSeason');

    const loadedHandleSigmaBoltOfSeason =
      R.curry
      (handleSigmaBoltOfSeason)
      (sigmaBrakeTargetOfSeason);

    const sigmaBoltContextSetOfSeason =
      R.map(
        loadedHandleSigmaBoltOfSeason,
        sigmaBoltPairsOfSeason);

    checkNilWithArray(
      sigmaBoltContextSetOfSeason,
      'sigmaBoltContextSetOfSeason');

    const sigmaClutchContextOfSeason = {
      sigmaBoltContextSetOfSeason,
      ...sigmaBrakeContextOfSeason,
      _type: 'SigmaClutchContextOfSeason'
    };

    return sigmaClutchContextOfSeason;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getSigmaClutchContextOfSeason');
  }
}

export const sigmaClutchContextOfSeason =
  R.map(
    getSigmaClutchContextOfSeason,
    sigmaBrakeContextPartialSetOfSeason);
