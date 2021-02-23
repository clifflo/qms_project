import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const adjust = (index, distance) => {

  const positiveIndex = index % distance;
  const negativeIndex = (index % distance) + distance;

  if(index >= 0){
    return positiveIndex
  }
  else if (index < 0){
    return negativeIndex
  }
  else {
    return 'Index is not a number.'
  }
}

export const item = (array, index) => {

  const firstArgValid =
    RA.isString(array) || RA.isArray(array);

  if(!firstArgValid){
    throw 'Not an array or string for the first argument.'
  }

  if(!RA.isNumber(index)){
    throw 'Not a number for the second argument.'
  }

  return array[adjust(index, array.length)]
}
