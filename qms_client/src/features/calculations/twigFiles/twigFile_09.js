import {
  getItemByStringFromList
} from './utilityHubCloneOfTwig';
import {
  chosenContextSet,
  chosenTypeOneRawEnvelopSet
} from './twigFile_07';

const mapFunctionOfChosenTypeOneContext =
  (chosenTypeOneEnvelopStartIndex,
  chosenForBranchIndex) => {

  const chosenTypeOneIndex =
    chosenTypeOneEnvelopStartIndex
    + chosenForBranchIndex;

  const chosenContext =
    getCyclicItemFromList(
      chosenContextSet,
      chosenTypeOneIndex,
      'chosenTypeOneIndex');


export const
  mapFunctionOfChosenTypeOneFinalEnvelop =
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



}
