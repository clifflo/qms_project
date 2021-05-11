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
    _type: 'Twig vanilla elemental context',
    twigVanillaElementalIndex: 0,
    twigVanillaElementalChinese: '五行金',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental metal.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigVanillaElementalIndex: 1,
    twigVanillaElementalChinese: '五行水',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental water.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigVanillaElementalIndex: 2,
    twigVanillaElementalChinese: '五行木',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental wood.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigVanillaElementalIndex: 3,
    twigVanillaElementalChinese: '五行火',
    twigVanillaElementalEnglish:
      'Twig vanilla elemental fire.'
  },
  {
    _type: 'Twig vanilla elemental context',
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
