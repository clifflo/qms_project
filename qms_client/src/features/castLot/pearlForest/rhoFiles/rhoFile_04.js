import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getShortHookContextByAlternative
} from './rhoFile_03';
import {
  checkNilWithString,
  checkNilWithNumber
} from '../../utilityFiles/utilityHub';

export const rhoLongHookContextMapFunction_1 =
  longHookSentence => {

  let externalShortHookComplexAlternative;
  let internalShortHookComplexAlternative;
  let longHookName;

  if(longHookSentence == ''){
    throw new Error(
      'Sentence should not be empty string.')
  }

  if(longHookSentence[1] == '為'){

    externalShortHookComplexAlternative =
      '卦象' + longHookSentence[2];

    internalShortHookComplexAlternative =
      '卦象' + longHookSentence[2];

    longHookName = '純' + longHookSentence[0];
  }
  else {

    externalShortHookComplexAlternative =
      '卦象' + longHookSentence[0];

    internalShortHookComplexAlternative =
      '卦象' + longHookSentence[1];

    longHookName = R.drop(2, longHookSentence);
  }

  checkNilWithString(
    externalShortHookComplexAlternative,
    'External short hook alternate'
  );

  checkNilWithString(
    internalShortHookComplexAlternative,
    'Internal short hook alternate'
  )

  const externalShortHookContext =
    getShortHookContextByAlternative(
      externalShortHookComplexAlternative);

  const internalShortHookContext =
    getShortHookContextByAlternative(
      internalShortHookComplexAlternative);

  const externalShortHookIndex =
    externalShortHookContext
    .genericShortHookIndex;

  const internalShortHookIndex =
    internalShortHookContext
    .genericShortHookIndex;

  const externalShortHookComplexOriginal =
    externalShortHookContext
    .genericShortHookComplexOriginal;

  const internalShortHookComplexOriginal =
    internalShortHookContext
    .genericShortHookComplexOriginal;

  const externalShortHookSimpleOriginal =
    externalShortHookContext
    .genericShortHookSimpleOriginal;

  const internalShortHookSimpleOriginal =
    internalShortHookContext
    .genericShortHookSimpleOriginal;

  const externalShortHookEnglish =
    externalShortHookContext
    .genericShortHookEnglish;

  const internalShortHookEnglish =
    internalShortHookContext
    .genericShortHookEnglish;

  const longHookIndex =
    (externalShortHookContext
      .genericShortHookIndex * 8) +
    internalShortHookContext
      .genericShortHookIndex;

  const rhoLongHookContext_1 = {
    _type: 'Rho long hook context 1',
    longHookName,
    longHookIndex,
    externalShortHookComplexOriginal,
    externalShortHookSimpleOriginal,
    externalShortHookComplexAlternative,
    externalShortHookEnglish,
    internalShortHookComplexOriginal,
    internalShortHookSimpleOriginal,
    internalShortHookComplexAlternative,
    internalShortHookEnglish,
    internalShortHookIndex,
    externalShortHookIndex
  }

  return rhoLongHookContext_1;
}
