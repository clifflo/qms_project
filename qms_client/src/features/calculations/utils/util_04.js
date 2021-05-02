import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../egghead';

export const isStranum = stranum => {
  return RA.isString(stranum) ||
  RA.isNumber(stranum);
}

const utCheckPropName = propName => {

  if(R.isNil(propName)){
    throw new Error(
      'Prop name should not be nil.');
  }

  if(!RA.isString(propName)){
    throw new Error(
      'Prop name must be a string.');
  }
}

const utCheckPropValue = propValue => {

  if(R.isNil(propValue)){
    throw new Error(
      'Prop value should not be nil.');
  }

  if(!isStranum(propValue)){
    throw new Error(
      'Prop value must be an stranum.');
  }
}

const utCheckList = list => {

  if(R.isNil(list)){
    throw new Error(
      'List should not be nil.');
  }

  if(!RA.isArray(list)){
    throw new Error(
      'List must be an array.')
  }
}

export const utFindByPropEq =
  (propName, propValue, list) => {

  utCheckPropName(propName);
  utCheckPropValue(propValue);
  utCheckList(list);

  return R.find(
    R.propEq(propName, propValue),
    list);
}

export const utFindByPropNeq =
  (propName, propValue, list) => {

  utCheckPropName(propName);
  utCheckPropValue(propValue);
  utCheckList(list);

  return R.find(
    R.not(R.propEq(propName, propValue)),
    list);
}

export const utFindByPropTrue =
  (propName, list) => {

  utCheckPropName(propName);
  utCheckList(list);

  return R.find(
    R.prop(propName),
    list);
}

export const utFindByPropFalse =
  (propName, list) => {

  utCheckPropName(propName);
  utCheckList(list);

  return R.find(
    R.not(R.prop(propName)),
    list);
}
