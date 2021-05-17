import * as R from 'ramda';

const getEpsilonFocusToFaceCorrelationContext =
  epsilonFocusToFaceRelationContext => {

  const {
    epsilonFaceType,
    epsilonFocusType,
    epsilonFocusFaceRelationEnglish,
  } = epsilonFocusToFaceRelationContext;

  checkNilWithString(
    epsilonFaceType,
    'Epsilon face type');

  checkNilWithString(
    epsilonFocusType,
    'Epsilon focus type');

  checkNilWithString(
    epsilonFocusFaceRelationEnglish,
    'Epsilon focus face relation english');

  switch(epsilonFocusFaceRelationEnglish){

  }
}
