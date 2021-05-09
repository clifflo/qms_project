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
    twigElementalIndex: 0,
    twigElementalChinese: '金',
    twigElementalEnglish: 'Twig elemental metal'
  },
  {
    twigElementalIndex: 1,
    twigElementalChinese: '水',
    twigElementalEnglish: 'Twig elemental water'
  },
  {
    twigElementalIndex: 2,
    twigElementalChinese: '木',
    twigElementalEnglish: 'Twig elemental wood'
  },
  {
    twigElementalIndex: 3,
    twigElementalChinese: '火',
    twigElementalEnglish: 'Twig elemental fire'
  },
  {
    twigElementalIndex: 4,
    twigElementalChinese: '土',
    twigElementalEnglish: 'Twig elemental earth'
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
