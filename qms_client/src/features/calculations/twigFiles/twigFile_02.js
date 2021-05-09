import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const twigTrunkContextSet = [
  {
    twigTrunkIndex: 0,
    twigTrunkChinese: '甲',
    twigTrunkEnglish: 'Beta'
  },
  {
    twigTrunkIndex: 1,
    twigTrunkChinese: '乙',
    twigTrunkEnglish: 'Gamma'
  },
  {
    twigTrunkIndex: 2,
    twigTrunkChinese: '丙',
    twigTrunkEnglish: 'Delta'
  },
  {
    twigTrunkIndex: 3,
    twigTrunkChinese: '丁',
    twigTrunkEnglish: 'Epsilon'
  },
  {
    twigTrunkIndex: 4,
    twigTrunkChinese: '戊',
    twigTrunkEnglish: 'Zeta'
  },
  {
    twigTrunkIndex: 5,
    twigTrunkChinese: '己',
    twigTrunkEnglish: 'Eta'
  },
  {
    twigTrunkIndex: 6,
    twigTrunkChinese: '庚',
    twigTrunkEnglish: 'Theta'
  },
  {
    twigTrunkIndex: 7,
    twigTrunkChinese: '辛',
    twigTrunkEnglish: 'Iota'
  },
  {
    twigTrunkIndex: 8,
    twigTrunkChinese: '壬',
    twigTrunkEnglish: 'Kappa'
  },
  {
    twigTrunkIndex: 9,
    twigTrunkChinese: '癸',
    twigTrunkChinese : 'Lamda'
  }
]

export const isValidTwigTrunkChinese =
  twigTrunkChinese => {

  checkNilWithString(
    twigTrunkChinese, 'Twig trunk chinese');

  return isItemExistByStringFromList(
    twigTrunkContextSet,
    twigTrunkChinese,
    'twigTrunkChinese');
}

export const getTwigTrunkContextByIndex =
  twigTrunkIndex => {

  try{
    checkNilWithNumber(
      twigTrunkIndex, 'Twig trunk index');

    return getCyclicItemFromList(
      twigTrunkContextSet,
      twigTrunkIndex,
      'twigTrunkIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get twig trunk context by index.');
  }
}
