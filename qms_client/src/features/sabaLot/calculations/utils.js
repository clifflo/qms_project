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
    throw 'Not an array or string for the first argument.'
  }

  if(!RA.isNumber(index)){
    throw 'Not a number for the second argument.'
  }

  return array[adjust(index, array.length)]
}

export function getIndexFromList(wordLike, listLike){
  if(RA.isString(listLike)){
    const sentence = listLike;
    const character = wordLike;

    if(wordLike.length != 1){
      throw 'The first argument must be just a single character'
      + 'if the second argument is a string.';
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
    throw 'The second argument must be string or array.';
  }

}

export const slider = (wordLike, listLike, distance) => {

  const sliderForSentence = () => {

    const character = wordLike;
    const sentence = listLike;
    const doubleSentence = sentence + sentence;
    const startPosition = getIndexFromList(
      character, doubleSentence);
    const result = R.slice(
      startPosition,
      startPosition + distance,
      doubleSentence);

    return result;
  }

  const sliderForList = () => {
    const word = wordLike;
    const list = listLike;
    const doubleList = R.concat(likeLike, likeLike);
    const result = R.slice(
      startPosition,
      startPosition + sentence,
      doubleList
    );
    return result;
  }

  if(distance < 0){
    throw 'Distance should be a positive number';
  }

  if(RA.isString(listLike)){
    try {
      return sliderForSentence;
    }
    catch(err){
      throw 'Slider for sentence failed because of '
      + err;
    }

  }
  else if(RA.isArray(listLike)){
    try{
      return sliderForList;
    }
    catch(err){
      throw 'Slider for list failed because of '
      + err;
    }
  }
  else {
    throw 'Slider does not work. The list like argument'
    + 'is actually type of ' + R.type(listlike);
  }
}
