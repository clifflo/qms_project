import * as R from 'ramda';
import {
  sigmaBrakeContextPartialSetOfMonthBranch
} from './sigmaFile_01';
import {
  checkNilWithString,
  checkNilWithUntypedObject,
  checkNilWithArray,
  throwFunctionalError
} from './_utilityHubBySigma';

const handleSigmaBoltOfMonthBranchToOriginal =
  sigmaBoltOfMonthBranch => {

  const sigmaSourceNutOfMonthBranch =
    sigmaBoltOfMonthBranch[0];

  checkNilWithString(
    sigmaSourceNutOfMonthBranch,
    'sigmaSourceNutOfMonthBranch');

  const sigmaTargetNutOfMonthBranch =
    sigmaBoltOfMonthBranch[1];

  checkNilWithString(
    sigmaTargetNutOfMonthBranch,
    'sigmaTargetNutOfMonthBranch');

  const sigmaBoltContextOfMonthBranch = {
    _type: 'SigmaBoltContextOfMonthBranch',
    sigmaSourceNutOfMonthBranch,
    sigmaTargetNutOfMonthBranch
  };

  return sigmaBoltContextOfMonthBranch;
}

const convertSigmaClutchContextOfMonthBranchToOriginal =
  sigmaBrakeContextOfMonthBranch => {

  try{
    const sigmaBoltDictionaryOfMonthBranch =
      sigmaBrakeContextOfMonthBranch
      .sigmaBoltDictionary

    checkNilWithUntypedObject(
      sigmaBoltDictionaryOfMonthBranch,
      'sigmaBoltDictionaryOfMonthBranch');

    const sigmaBoltPairsOfMonthBranch =
      R.toPairs(sigmaBoltDictionaryOfMonthBranch);

    checkNilWithArray(
      sigmaBoltPairsOfMonthBranch,
      'sigmaBoltPairsOfMonthBranch');

    const sigmaBoltContextSetOfMonthBranch =
      R.map(
        handleSigmaBoltOfMonthBranchToOriginal,
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
