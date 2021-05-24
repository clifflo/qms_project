import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfDayTrunk
} from './sigmaMiniHub_01';
import {
  handleSigmaBoltOfDayTrunk
} from './sigmaFile_08';

const getSigmaClutchContextOfDayTrunk =
  sigmaBrakeContextOfDayTrunk => {

  try{

    const sigmaBoltDictionaryOfDayTrunk =
      sigmaBrakeContextOfDayTrunk
      .sigmaBoltDictionary;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfDayTrunk,
      'sigmaBoltDictionaryOfDayTrunk');

    const sigmaBrakeTargetOfDayTrunk =
      sigmaBrakeContextOfDayTrunk
      .sigmaBrakeTarget;

    checkNilWithString(
      sigmaBrakeTargetOfDayTrunk,
      'sigmaBrakeTargetOfDayTrunk');

    const sigmaBoltPairsOfDayTrunk =
      R.toPairs(sigmaBoltDictionaryOfDayTrunk);

    checkNilWithArray(
      sigmaBoltPairsOfDayTrunk,
      'sigmaBoltPairsOfDayTrunk');

    const loadedHandleSigmaBoltOfDayTrunk =
      R.curry
      (handleSigmaBoltOfDayTrunk)
      (sigmaBrakeTargetOfDayTrunk);

    const sigmaBoltContextSetOfDayTrunk =
      R.map(
        loadedHandleSigmaBoltOfDayTrunk,
        sigmaBoltPairsOfDayTrunk);

    checkNilWithArray(
      sigmaBoltContextSetOfDayTrunk,
      'sigmaBoltContextSetOfDayTrunk');

    const sigmaClutchContextOfDayTrunk = {
      sigmaBoltContextSetOfDayTrunk,
      ...sigmaBrakeContextOfDayTrunk,
      _type: 'SigmaClutchContextOfDayTrunk'
    };

    return sigmaClutchContextOfDayTrunk;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getSigmaClutchContextOfDayTrunk');
  }
}

export const sigmaClutchContextOfDayTrunk =
  R.map(
    getSigmaClutchContextOfDayTrunk,
    sigmaBrakeContextPartialSetOfDayTrunk);
