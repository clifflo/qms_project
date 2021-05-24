import * as R from 'ramda';
import {
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError,
  checkNilWithString
} from './_utilityHubBySigma';
import {
  sigmaBrakeContextPartialSetOfMonthOriginal
} from './sigmaMiniHub_01';
import {
  handleSigmaBoltOfMonthOriginal
} from './sigmaFile_04';

export const
  getSigmaClutchContextOfMonthOriginal =
  sigmaBrakeContextOfMonthOriginal => {

  try{

    const sigmaBoltDictionaryOfMonthOriginal =
      sigmaBrakeContextOfMonthOriginal
      .sigmaBoltDictionary;

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfMonthOriginal,
      'sigmaBoltDictionaryOfMonthOriginal');

    const sigmaBrakeTargetOfMonthOriginal =
      sigmaBrakeContextOfMonthOriginal
      .sigmaBrakeTarget;

    checkNilWithString(
      sigmaBrakeTargetOfMonthOriginal,
      'sigmaBrakeTargetOfMonthOriginal');

    const sigmaBoltPairsOfMonthOriginal =
      R.toPairs(sigmaBoltDictionaryOfMonthOriginal);

    checkNilWithArray(
      sigmaBoltPairsOfMonthOriginal,
      'sigmaBoltPairsOfMonthOriginal');

    const loadedHandleSigmaBoltOfMonthOriginal =
      R.curry
      (handleSigmaBoltOfMonthOriginal)
      (sigmaBrakeTargetOfMonthOriginal);

    const sigmaBoltContextSetOfMonth =
      R.map(
        loadedHandleSigmaBoltOfMonthOriginal,
        sigmaBoltPairsOfMonthOriginal);

    checkNilWithArray(
      sigmaBoltContextSetOfMonth,
      'sigmaBoltContextSetOfMonth');

    const sigmaClutchContextOfMonthOriginal = {
      sigmaBoltContextSetOfMonth,
      ...sigmaBrakeContextOfMonthOriginal,
      _type: 'SigmaClutchContextOfMonth'
    };

    return sigmaClutchContextOfMonthOriginal;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throwFunctionalError(
      'getSigmaClutchContextOfMonthOriginal');
  }
}

export const sigmaClutchContextOfMonthOriginal =
  R.map(
    getSigmaClutchContextOfMonthOriginal,
    sigmaBrakeContextPartialSetOfMonthOriginal);
