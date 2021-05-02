import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  utCheckPropName,
  utCheckPropValue,
  utCheckList
} from './util_05';

export const utFilterByPropEq =
  (propName, propValue, list) => {

  utCheckPropName(propName);
  utCheckPropValue(propValue);
  utCheckList(list);

  return R.filter(
    R.propEq(propName, propValue),
    list);
}

export const utFilterByPropNeq =
  (propName, propValue, list) => {

  utCheckPropName(propName);
  utCheckPropValue(propValue);
  utCheckList(list);

  return R.filter(
    R.not(R.propEq(propName, propValue)),
    list);
}

export const utFilterByPropTrue =
  (propName, list) => {

  utCheckPropName(propName);
  utCheckList(list);

  return R.filter(
    R.prop(propName),
    list);
}

export const utFilterByPropFalse =
  (propName, list) => {

  utCheckPropName(propName);
  utCheckList(list);

  return R.filter(
    R.not(R.prop(propName)),
    list);
}
