import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const trunkContextSet = [
  {
    trunkIndex: 0,
    trunkChinese: '甲',
    trunkEnglish: 'Beta'
  },
  {
    trunkIndex: 1,
    trunkChinese: '乙',
    trunkEnglish: 'Gamma'
  },
  {
    trunkIndex: 2,
    trunkChinese: '丙',
    trunkEnglish: 'Delta'
  },
  {
    trunkIndex: 3,
    trunkChinese: '丁',
    trunkEnglish: 'Epsilon'
  },
  {
    trunkIndex: 4,
    trunkChinese: '戊',
    trunkEnglish: 'Zeta'
  },
  {
    trunkIndex: 5,
    trunkChinese: '己',
    trunkEnglish: 'Eta'
  },
  {
    trunkIndex: 6,
    trunkChinese: '庚',
    trunkEnglish: 'Theta'
  },
  {
    trunkIndex: 7,
    trunkChinese: '辛',
    trunkEnglish: 'Iota'
  },
  {
    trunkIndex: 8,
    trunkChinese: '壬',
    trunkEnglish: 'Kappa'
  },
  {
    trunkIndex: 9,
    trunkChinese: '癸',
    trunkChinese : 'Lamda'
  }
]

export const isValidTrunkChinese =
  trunkChinese => {

  checkNilWithString(
    trunkChinese, 'Trunk Chinese');

  return R.any(
    R.propEq('trunkChinese', trunkChinese),
    trunkContextSet);
}

export const getTrunkContextByIndex =
  trunkIndex => {

  try{
    checkNilWithNumber(
      trunkIndex, 'Trunk index');

    return getCyclicItemFromList(
      trunkContextSet,
      trunkIndex,
      'trunkIndex'
    );
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot get trunk context by index.');
  }
}
