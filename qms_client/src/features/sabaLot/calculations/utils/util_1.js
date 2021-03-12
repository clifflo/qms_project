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

export const item = (listLike, index) => {

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

  return listLike[adjust(index, listLike.length)]
}

export function idxTool(wordLike, listLike){

  if(RA.isString(listLike)){
    const sentence = listLike;
    const character = wordLike;
    if(character.length != 1){
      throw new Error(
        'The first argument must be just a single '
        + 'character if the second argument is a string.');
    }

    return R.findIndex(
      R.equals(character),R.split('', sentence));
  }
  else if(RA.isArray(listLike)){
    const word = wordLike;
    const wordList = listLike;
    R.findIndex(R.equals(word), wordList);
  }
  else {
    throw new Error(
      'The second argument must be string or array.');
  }
}
