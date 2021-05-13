import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getCyclicItemFromList,
  getItemByStringFromList,
  getIndexFromString,
  checkNilWithString,
  checkNilWithNumber
} from '../utilityFiles/utilityHub';

export const twigElementalContextSet = [
  {
    _type: 'Twig vanilla elemental context',
    twigElementalIndex: 0,
    twigElementalChinese: '五行金',
    twigElementalEnglish:
      'Twig vanilla elemental metal.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigElementalIndex: 1,
    twigElementalChinese: '五行水',
    twigElementalEnglish:
      'Twig vanilla elemental water.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigElementalIndex: 2,
    twigElementalChinese: '五行木',
    twigElementalEnglish:
      'Twig vanilla elemental wood.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigElementalIndex: 3,
    twigElementalChinese: '五行火',
    twigElementalEnglish:
      'Twig vanilla elemental fire.'
  },
  {
    _type: 'Twig vanilla elemental context',
    twigElementalIndex: 4,
    twigElementalChinese: '五行土',
    twigElementalEnglish:
      'Twig vanilla elemental earth.'
  }
];

export const getTwigVanillaElementalContextByIndex =
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

export const
  getTwigVanillaElementalContextByChinese =
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
