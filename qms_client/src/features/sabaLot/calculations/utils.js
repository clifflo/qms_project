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

  return listLike[adjust(index, listLike.length)]
}

export function getIndexFromList(wordLike, listLike){
  if(RA.isString(listLike)){
    const sentence = listLike;
    const character = wordLike;
    if(wordLike.length != 1){
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
    throw 'The second argument must be string or array.';
  }

}

export const slider = (listLike, wordLike, distance) => {

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
    const doubleList = R.concat(list, list);
    const startPosition = getIndexFromList(
      word, doubleList);
    const result = R.slice(
      startPosition,
      startPosition + distance,
      doubleList
    );
    return result;
  }

  if(!RA.isNumber(distance)){
    throw new Error(
      'Distance should be of type number');
  }

  if(distance < 0){
    throw new Error(
      'Distance should be a positive number');
  }

  if(RA.isString(listLike)){
    try {
      return sliderForSentence();
    }
    catch(err){
      throw new Error('Slider for sentence failed.');
    }
  }
  else if(RA.isArray(listLike)){
    try{
      return sliderForList();
    }
    catch(err){
      throw new Error('Slider for list failed.');
    }
  }
  else {
    throw new Error(
      'Slider does not work. The list like argument '
      + 'is actually type of '
      + R.type(listLike));
  }
}
