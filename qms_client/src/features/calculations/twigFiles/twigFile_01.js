import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getCyclicItemFromList,
  getItemByStringFromList,
  getIndexFromString,
  checkNilWithString,
  checkNilWithNumber
} from '../utilityFiles/utilityHub';

export const twigVanillaElementalContextSet = [
  {
    twigVanillaElementalIndex: 0,
    twigVanillaElementalChinese: '五行金',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental metal.'
  },
  {
    twigVanillaElementalIndex: 1,
    twigVanillaElementalChinese: '五行水',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental water.'
  },
  {
    twigVanillaElementalIndex: 2,
    twigVanillaElementalChinese: '五行木',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental wood.'
  },
  {
    twigVanillaElementalIndex: 3,
    twigVanillaElementalChinese: '五行火',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental fire.'
  },
  {
    twigVanillaElementalIndex: 4,
    twigVanillaElementalChinese: '五行土',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental earth'
  }
];

export const getTwigElementalContextByIndex =
  twigElementalIndex => {

  try{
    checkNilWithNumber(
      twigElementalIndex,
      'Twig elemental index');

    const twigElementalContext =
      getCyclicItemFromList(
        twigElementalContextSet,
        twigElementalIndex,
        'twigElementalIndex'
      );

    return twigElementalContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig elemental context by index.');
  }

}

export const getTwigElementalContextByChinese =
  twigElementalChinese => {

  checkNilWithString(
    twigElementalChinese,
    'Elemental Chinese');

  const twigElementalContext =
    getItemByStringFromList(
      twigElementalContextSet,
      twigElementalChinese,
      'twigElementalChinese'
    );

  return twigElementalContext;
}
