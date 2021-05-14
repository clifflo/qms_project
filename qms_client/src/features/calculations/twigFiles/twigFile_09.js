import * as R from 'ramda';
import {
  getItemByStringFromList,
  getCyclicItemFromList,
  checkNilWithTypedObject,
  checkNilWithNumber
} from './utilityHubCloneOfTwig';
import {
  twigElementalContextSet
} from './twigMiniHub_01';
import {
  twigChosenContextSet,
  twigChosenTypeOneRawEnvelopSet
} from './twigFile_08';

const mapFunctionOfChosenTypeOneContext =
  (chosenTypeOneEnvelopStartIndex,
  chosenForBranchIndex) => {

  const chosenIndex =
    chosenTypeOneEnvelopStartIndex
    + chosenForBranchIndex;

  checkNilWithNumber(
    chosenIndex,
    'Chosen index');

  const chosenTypeOneContext =
    getCyclicItemFromList(
      chosenContextSet,
      chosenIndex,
      'chosenIndex');

  checkNilWithTypedObject(
    chosenTypeOneContext,
    'Chosen type one context');

  return chosenTypeOneContext;
}

const mapFunctionOfChosenTypeOneFinalEnvelop =
  chosenSourceBranchElementalEnglish => {

  const chosenTypeOneRawEnvelop =
    getItemByStringFromList(
      chosenTypeOneRawEnvelopSet,
      chosenSourceBranchElementalEnglish,
      'chosenBranchElementalEnglish');

  const { chosenTypeOneEnvelopStartIndex } =
    chosenTypeOneRawEnvelop;

  const loadedMapFunctionOfChosenTypeOneContext =
    R.curry(mapFunctionOfChosenTypeOneContext)
    (chosenTypeOneEnvelopStartIndex);

  const chosenTypeOneContextSet =
    R.map(
      loadedMapFunctionOfChosenTypeOneContext,
      R.range(0, 12));

  const chosenTypeOneFinalEnvelop = {
    chosenTypeOneContextSet,
    ...chosenTypeOneRawEnvelop,
    _type: 'Chosen type one final envelop'
  };

  return chosenTypeOneFinalEnvelop;
}

const getChosenTypeOneFinalEnvelopSet = () => {

  const twigElementalEnglishSet =
    R.map(
      R.prop('twigElementalEnglish'),
      twigElementalContextSet);

  const chosenTypeOneFinalEnvelopSet =
    R.map(
      mapFunctionOfChosenTypeOneFinalEnvelop,
      twigElementalEnglishSet);

  return chosenTypeOneFinalEnvelopSet;
}

export const chosenTypeOneFinalEnvelopSet =
  getChosenTypeOneFinalEnvelopSet();
