import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  utCheckPropName,
  utCheckPropValue,
  utCheckList
} from './util_04';

export const utFilterByPropEq =
  (propName, propValue, list) => {

  try{
    utCheckPropName(propName);
    utCheckPropValue(propValue);
    utCheckList(list);

    return R.filter(
      R.propEq(propName, propValue),
      list);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot filter by prop equals.')
  }
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
