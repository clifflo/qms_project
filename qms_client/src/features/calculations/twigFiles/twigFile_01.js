import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getCyclicItemFromList,
  findItemByStringFromList,
  getIndexFromString,
  checkNilWithString,
  checkNilWithNumber
} from '../utilityFiles/utilityHub';

export const twigElementalContextSet = [
  {
    _type: 'TwigElementalContext',
    twigElementalIndex: 0,
    twigElementalChinese: '五行金',
    twigElementalEnglish:
      'Twig elemental metal'
  },
  {
    _type: 'TwigElementalContext',
    twigElementalIndex: 1,
    twigElementalChinese: '五行水',
    twigElementalEnglish:
      'Twig elemental water'
  },
  {
    _type: 'TwigElementalContext',
    twigElementalIndex: 2,
    twigElementalChinese: '五行木',
    twigElementalEnglish:
      'Twig elemental wood'
  },
  {
    _type: 'TwigElementalContext',
    twigElementalIndex: 3,
    twigElementalChinese: '五行火',
    twigElementalEnglish:
      'Twig elemental fire'
  },
  {
    _type: 'TwigElementalContext',
    twigElementalIndex: 4,
    twigElementalChinese: '五行土',
    twigElementalEnglish:
      'Twig elemental earth'
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
      'Cannot get twig elemental '
      + 'context by index.');
  }

}

export const
  getTwigElementalContextByChinese =
  twigElementalChinese => {

  checkNilWithString(
    twigElementalChinese,
    'Twig elemental Chinese');

  const twigElementalContext =
    findItemByStringFromList(
      twigElementalContextSet,
      twigElementalChinese,
      'twigElementalChinese'
    );

  return twigElementalContext;
}

export const
  getTwigElementalContextByEnglish =
  twigElementalEnglish => {

  checkNilWithString(
    twigElementalEnglish,
    'Twig elemental English');

  const twigElementalContext =
    findItemByStringFromList(
      twigElementalContextSet,
      twigElementalEnglish,
      'twigElementalEnglish'
    );

  return twigElementalContext;
}
