import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const utAdjust = (cycleLength, index) => {

  if(R.isNil(cycleLength)){
    throw new Error(
      'Cycle length should not be nil.');
  }

  if(!RA.isNumber(cycleLength)){
    throw new Error(
      'Cycle length must be a number')
  }

  const positiveIndex = index % cycleLength;
  const negativeIndex =
    (index % cycleLength) + cycleLength;

  if(index >= 0){
    return positiveIndex;
  }
  else {
    return negativeIndex;
  }
}

export const utItem = (listLike, index) => {

  const listLikeValid =
    RA.isString(listLike) || RA.isArray(listLike);

  if(!listLikeValid){
    throw new Error(
      'Not an array or string for the first argument.')
  }

  if(!RA.isNumber(index)){
    throw new Error(
      'Not a number for the second argument.')
  }

  return listLike[
    utAdjust(listLike.length, index)]
}

export const utGetIdx = (wordLike, listLike) => {

  if(RA.isString(listLike)){
    const sentence = listLike;
    const character = wordLike;

    if(R.isNil(character)){
      throw new Error(
        'The first argument should not be nil.');
    }

    if(character.length != 1){
      throw new Error(
        'The first argument must be just a single '
        + 'character if the second argument '
        + 'is a string.');
    }

    return R.findIndex(
      R.equals(character),R.split('', sentence));
  }
  else if(RA.isArray(listLike)){
    const word = wordLike;
    const wordList = listLike;
    return R.findIndex(
      R.equals(word), wordList);
  }
  else {
    throw new Error(
      'The second argument must be string or array.');
  }
}
