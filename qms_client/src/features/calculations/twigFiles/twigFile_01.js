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

export const getTwigVanillaElementalContextByIndex =
  twigElementalIndex => {

  try{
    checkNilWithNumber(
      twigElementalIndex,
      'Twig elemental index');

    const twigVanillaElementalContext =
      getCyclicItemFromList(
        twigVanillaElementalContextSet,
        twigElementalIndex,
        'twigElementalIndex'
      );

    return twigVanillaElementalContext;
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig elemental context by index.');
  }

}

export const
  getTwigVanillaElementalContextByChinese =
  twigVanillaElementalChinese => {

  checkNilWithString(
    twigVanillaElementalChinese,
    'Elemental Chinese');

  const twigVanillaElementalContext =
    getItemByStringFromList(
      twigVanillaElementalContextSet,
      twigVanillaElementalChinese,
      'twigVanillaElementalChinese'
    );

  return twigVanillaElementalContext;
}
