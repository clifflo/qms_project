import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getCyclicItemFromList,
  getIndexFromString
} from '../utils/util_01';

export const twigElementalContextSet = [
  {
    twigElementalIndex: 0,
    twigElementalChinese: '金',
    twigElementalEnglish: 'Twig Metal'
  },
  {
    twigElementalIndex: 1,
    twigElementalChinese: '水',
    twigElementalEnglish: 'Twig Water'
  },
  {
    twigElementalIndex: 2,
    twigElementalChinese: '木',
    twigElementalEnglish: 'Twig Wood'
  },
  {
    twigElementalIndex: 3,
    twigElementalChinese: '火',
    twigElementalEnglish: 'Twig Fire'
  },
  {
    twigElementalIndex: 4,
    twigElementalChinese: '土',
    twigElementalEnglish: 'Twig Earth'
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
    R.find(
      R.propEq(
        'twigElementalChinese',
        twigElementalChinese),
      twigElementalContextSet));

  return twigElementalContext;
}
