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
    throw new Error(
      'The second argument must be string or array.');
  }

}

export const slider = (
  listLike,
  sourceWordLike,
  targetWordLike) => {

  const sliderForSentence = () => {

    const sourceCharacter = sourceWordLike;
    const targetCharacter = targetWordLike;
    const sentence = listLike;
    const doubleSentence = sentence + sentence;

    const startPosition = getIndexFromList(
      sourceCharacter, doubleSentence);

    const rawEndPosition = getIndexFromList(
      targetCharacter, doubleSentence);

    const finalEndPosition =
      startPosition > rawEndPosition ?
        rawEndPosition + sentence.length : rawEndPosition;

    const result = R.slice(
      startPosition,
      finalEndPosition,
      doubleSentence);

    return result;
  }

  const sliderForList = () => {

    const sourceWord = sourceWordLike;
    const targetWord = targetWordLike;
    const list = listLike;
    const doubleList = R.concat(list, list);

    const startPosition = getIndexFromList(
      sourceWord, doubleList);

    const rawEndPosition = getIndexFromList(
      targetWord, doubleList);

    const finalEndPosition =
      startPosition > rawEndPosition ?
        rawEndPosition + list.length : rawEndPosition

    const result = R.slice(
      startPosition,
      finalEndPosition,
      doubleList
    );
    return result;
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

export const move =
  (listLike, sourceWordLike, distance, direction) => {

  const getMovement = () => {
    if(direction == 'Forward'){
      return distance;
    }
    else if (direction == 'Backward'){
      return (-distance);
    }
    else {
      throw `'${direction}' is not a valid direction.`;
    }
  }

  const movement = getMovement();

  const moveForSentence = () => {

    const sourceCharacter = sourceWordLike;
    const sentence = listLike;
    const sourceIndex = getIndexFromList(
      sourceCharacter, sentence);
    const targetIndex = sourceIndex + movement;
    const targetCharacter = item(sentence, targetIndex);
    return targetCharacter;
  }

  const moveForList = () => {

    const sourceWord = sourceWordLike;
    const list = listLike;
    const sourceIndex = getIndexFromList(
      sourceWord, list);
    const targetIndex = sourceIndex + movement;
    const targetWord = item(list, targetIndex);
    return targetWord;
  }

  if(RA.isString(listLike)){
    return moveForSentence();
  }
  else if(RA.isArray(listLike)){
    return moveForList();
  }
  else {
    throw new Error(
      'The first argument is neither a list nor a string.');
  }

}
