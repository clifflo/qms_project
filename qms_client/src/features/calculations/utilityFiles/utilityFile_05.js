import * as R from 'ramda';
import {
  sentenceCase
} from 'change-case';

const adjustVariableName = rawVariableName => {

  const finalVariableName =
    R.compose(
      R.replace('chinese', 'Chinese'),
      R.replace('english', 'English'),
      R.replace('_', ' '),
      sentenceCase)
    (rawVariableName);

  return finalVariableName;
}

export const throwFunctionalError =
  rawFunctionalErrorName => {

  const finalFunctionalErrorName =
    adjustVariableName(rawFunctionalErrorName);

  const errorMessage =
    finalFunctionalErrorName + 'is error.';

  throw new Error(errorMessage);
}
