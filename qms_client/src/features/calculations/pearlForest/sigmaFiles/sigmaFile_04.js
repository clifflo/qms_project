import * as R from 'ramda';
import {
  getSigmaBrakeSentenceType
} from './sigmaFile_03';
import {
  sigmaBrakeBuiltContextSet_1
} from './sigmaFile_02';

const getSigmaBrakeBuiltContext_2 =
  sigmaBrakeBuiltContext_1 => {

  const sigmaBrakeBuiltFullSentence =
    sigmaBrakeBuiltContext_1
    .sigmaBrakeBuiltFullSentence

  const sigmaBrakeBuiltPartialRoughSentenceSet =
    R.split('，', sigmaBrakeBuiltFullSentence);

  const sigmaBrakeBuiltPartialEffectiveSentenceSet =
    R.reject(
      R.equals(''),
      sigmaBrakeBuiltPartialRoughSentenceSet);

  const sigmaBrakeBuiltFirstPartialSentence =
    sigmaBrakeBuiltPartialEffectiveSentenceSet[0];

  const sigmaBrakeSentenceType =
    getSigmaBrakeSentenceType(
      sigmaBrakeBuiltFirstPartialSentence);

  const sigmaBrakeBuiltContext_2 = {
    ...sigmaBrakeSentenceType,
    ...sigmaBrakeBuiltContext_1,
    _type: 'SigmaBuiltContext_2'
  };

  return sigmaBrakeBuiltContext_2;
}

export const sigmaBrakeBuiltContextSet_2 =
  R.map(
    getSigmaBrakeBuiltContext_2,
    sigmaBrakeBuiltContextSet_1);
