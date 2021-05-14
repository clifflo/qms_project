import {
  getItemByStringFromList
} from './utilityHubCloneOfTwig';
import {
  twigElementalContextSet
} from './twigMiniHub_01';
import {
  chosenContextSet,
  chosenTypeOneRawEnvelopSet
} from './twigFile_08';

const mapFunctionOfChosenTypeOneContext =
  (chosenTypeOneEnvelopStartIndex,
  chosenForBranchIndex) => {

  const chosenTypeOneIndex =
    chosenTypeOneEnvelopStartIndex
    + chosenForBranchIndex;

  const chosenTypeOneContext =
    getCyclicItemFromList(
      chosenContextSet,
      chosenTypeOneIndex,
      'chosenTypeOneIndex');

  return chosenTypeOneContext;
}

const mapFunctionOfChosenTypeOneFinalEnvelop =
  chosenSourceTwigElementalEnglish => {

  const chosenTypeOneRawEnvelop =
    getItemByStringFromList(
      chosenTypeOneRawEnvelopSet,
      chosenBranchElementalEnglish,
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
