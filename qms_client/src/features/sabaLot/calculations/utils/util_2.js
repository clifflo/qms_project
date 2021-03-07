import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const slider =
  (listLike, sourceWordLike, targetWordLike) => {

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
