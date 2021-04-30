import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../egghead';

export const isAlnum = alnum => {
  return RA.isString(alnum) || RA.isNumber(alnum);
}

export const utFindByProp =
  (propName, propValue, list) => {

  if(R.isNil(propName)){
    throw new Error(
      'Prop name should not be nil.');
  }

  if(!RA.isString(propName)){
    throw new Error(
      'Prop name must be a string.');
  }

  if(R.isNil(propValue)){
    throw new Error(
      'Prop value should not be nil.');
  }

  if(!isAlnum(propValue)){
    throw new Error(
      'Prop value must be an alnum.');
  }

  if(R.isNil(list)){
    throw new Error(
      'List should not be nil.');
  }

  if(!RA.isArray(list)){
    throw new Error(
      'List must be an array.')
  }

  return R.find(
    R.propEq(propName, propValue),
    list);
}

// [Delpn] is deleted props.
export const utDissoc = (obj, delps) => {

  E.cknwo(obj, 'Object');
  E.cknwa(delps, 'Deleted props');

  const result =
    R.reduce(R.flip(R.dissoc), obj, delps);

  return result;
}
