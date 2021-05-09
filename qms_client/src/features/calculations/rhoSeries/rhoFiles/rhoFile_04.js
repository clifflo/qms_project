import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getShortHookContextByAlternative
} from './rhoFile_03';

export const rhoContextMapFunction_1 =
  longHookSentence => {

  let externalShortHookAlternative;
  let internalShortHookAlternative;
  let longHookName;

  if(longHookSentence == ''){
    throw new Error(
      'Sentence should not be empty string.')
  }

  if(longHookSentence[1] == '為'){

    externalShortHookAlternative =
      longHookSentence[2];

    internalShortHookAlternative =
      longHookSentence[2];

    longHookName = '純' + longHookSentence[0];
  }
  else {

    externalShortHookAlternative =
      longHookSentence[0];

    internalShortHookAlternative =
      longHookSentence[1];

    longHookName = R.drop(2, longHookSentence);
  }

  E.checkNilWithString(
    externalShortHookAlternative,
    'External short hook alternate'
  );

  E.checkNilWithString(
    internalShortHookAlternative,
    'Internal short hook alternate'
  )

  const externalShortHookContext =
    getShortHookContextByAlternative(
      externalShortHookAlternative);

  const internalShortHookContext =
    getShortHookContextByAlternative(
      internalShortHookAlternative);

  const externalShortHookIndex =
    externalShortHookContext
    .genericShortHookIndex;

  const internalShortHookIndex =
    internalShortHookContext
    .genericShortHookIndex;

  const externalShortHookOriginal =
    externalShortHookContext
    .genericShortHookOriginal;

  const internalShortHookOriginal =
    intertalShortHookContext
    .generticShortHookOriginal;

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

  return {
    longHookName,
    longHookIndex,
    externalShortHookOriginal,
    externalShortHookAlternative,
    externalShortHookEnglish,
    internalShortHookOriginal,
    internalShortHookAlternative,
    internalShortHookEnglish
  }
}
