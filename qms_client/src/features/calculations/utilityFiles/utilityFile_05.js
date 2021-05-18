import * as R from 'ramda';
import {
  sentenceCase
} from 'change-case';
import {
  adjustVariableName
} from './utilityMiniHub_01';

export const throwGetterError =
  rawGetterErrorName => {

  const finalGetterErrorName =
    adjustVariableName(rawGetterErrorName);

  const errorMessage =
    'Cannot get ' + finalGetterErrorName;

  throw new Error(errorMessage);
}
