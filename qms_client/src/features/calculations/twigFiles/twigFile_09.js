import * as R from 'ramda';
import {
  findItemByStringFromList,
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
  (twigChosenTypeOneEnvelopStartIndex,
  twigChosenForBranchIndex) => {

  const twigChosenIndex =
    twigChosenTypeOneEnvelopStartIndex
    + twigChosenForBranchIndex;

  checkNilWithNumber(
    twigChosenIndex,
    'Twig chosen index');

  const twigChosenTypeOneContext =
    getCyclicItemFromList(
      twigChosenContextSet,
      twigChosenIndex,
      'twigChosenIndex');

  checkNilWithTypedObject(
    twigChosenTypeOneContext,
    'Twig chosen context');

  return twigChosenTypeOneContext;
}

const mapFunctionOfTwigChosenTypeOneFinalEnvelop =
  twigChosenSourceBranchElementalEnglish => {

  const twigChosenTypeOneRawEnvelop =
    findItemByStringFromList(
      twigChosenTypeOneRawEnvelopSet,
      twigChosenSourceBranchElementalEnglish,
      'twigChosenBranchElementalEnglish');

  const { twigChosenTypeOneEnvelopStartIndex } =
    twigChosenTypeOneRawEnvelop;

  const loadedMapFunctionOfTwigChosenTypeOneContext =
    R.curry(mapFunctionOfChosenTypeOneContext)
    (twigChosenTypeOneEnvelopStartIndex);

  const twigChosenTypeOneContextSet =
    R.map(
      loadedMapFunctionOfTwigChosenTypeOneContext,
      R.range(0, 12));

  const twigChosenTypeOneFinalEnvelop = {
    twigChosenTypeOneContextSet,
    ...twigChosenTypeOneRawEnvelop,
    _type: 'Twig chosen type one final envelop'
  };

  return twigChosenTypeOneFinalEnvelop;
}

const getTwigChosenTypeOneFinalEnvelopSet = () => {

  const twigElementalEnglishSet =
    R.map(
      R.prop('twigElementalEnglish'),
      twigElementalContextSet);

  const twigChosenTypeOneFinalEnvelopSet =
    R.map(
      mapFunctionOfTwigChosenTypeOneFinalEnvelop,
      twigElementalEnglishSet);

  return twigChosenTypeOneFinalEnvelopSet;
}

export const twigChosenTypeOneFinalEnvelopSet =
  getTwigChosenTypeOneFinalEnvelopSet();
