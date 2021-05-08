import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getCyclicItemFromList =
  (objectList, objectIndex) => {

  const cycleLength = objectList.length;

  const positiveIndex =
    objectIndex % cycleLength;

  const negativeIndex =
    (objectIndex % cycleLength) + cycleLength;

  const effectiveIndex =
    (objectIndex >= 0) ?
    positiveIndex : negativeIndex

  return objectList[effectiveIndex];
}
