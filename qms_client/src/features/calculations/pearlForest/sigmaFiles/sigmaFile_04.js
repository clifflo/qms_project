import * as R from 'ramda';
import {
  getSigmaBrakePartialSentenceType
} from './sigmaFile_03';
import {
  sigmaBrakeBuiltContextSet_1
} from './sigmaFile_02';

const getSigmaBrakeBuiltContext_2 =
  sigmaBrakeBuiltContext_1 => {

  const sigmaBrakePartialSentenceType =
    getSigmaBrakePartialSentenceType(
      R.split(sigmaBrakeBuiltContext_1, '，')
      [0]);

  const sigmaBrakeBuiltContext_2 = {
    ...sigmaBrakePartialSentenceType,
    ...sigmaBrakeBuiltContext_1,
    _type: 'SigmaBuiltContext_2'
  };

  return sigmaBrakeBuiltContext_2;
}

export const sigmaBrakeBuiltContextSet_2 =
  R.map(
    getSigmaBrakeBuiltContext_2,
    sigmaBrakeBuiltContextSet_1);
