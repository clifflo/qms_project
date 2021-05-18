import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  checkNilWithString,
  checkNilWithNumber,
  isItemExistByStringFromList,
  getCyclicItemFromList,
  findItemByStringFromList
} from '../utilityFiles/utilityHub';

export const twigTrunkContextSet = [
  {
    twigTrunkIndex: 0,
    twigTrunkChinese: '甲',
    twigTrunkEnglish: 'Beta',
    twigTrunkElementalChinese: '五行木'
  },
  {
    twigTrunkIndex: 1,
    twigTrunkChinese: '乙',
    twigTrunkEnglish: 'Gamma',
    twigTrunkElementalChinese: '五行木'
  },
  {
    twigTrunkIndex: 2,
    twigTrunkChinese: '丙',
    twigTrunkEnglish: 'Delta',
    twigTrunkElementalChinese: '五行火',
  },
  {
    twigTrunkIndex: 3,
    twigTrunkChinese: '丁',
    twigTrunkEnglish: 'Epsilon',
    twigTrunkElementalChinese: '五行火',
  },
  {
    twigTrunkIndex: 4,
    twigTrunkChinese: '戊',
    twigTrunkEnglish: 'Zeta',
    twigTrunkElementalChinese: '五行土',
  },
  {
    twigTrunkIndex: 5,
    twigTrunkChinese: '己',
    twigTrunkEnglish: 'Eta',
    twigTrunkElementalChinese: '五行土',
  },
  {
    twigTrunkIndex: 6,
    twigTrunkChinese: '庚',
    twigTrunkEnglish: 'Theta',
    twigTrunkElementalChinese: '五行金',
  },
  {
    twigTrunkIndex: 7,
    twigTrunkChinese: '辛',
    twigTrunkEnglish: 'Iota',
    twigTrunkElementalChinese: '五行金',
  },
  {
    twigTrunkIndex: 8,
    twigTrunkChinese: '壬',
    twigTrunkEnglish: 'Kappa',
    twigTrunkElementalChinese: '五行水',
  },
  {
    twigTrunkIndex: 9,
    twigTrunkChinese: '癸',
    twigTrunkEnglish : 'Lamda',
    twigTrunkElementalChinese: '五行水',
  }
]

export const isValidTwigTrunkChinese =
  twigTrunkChinese => {

  checkNilWithString(
    twigTrunkChinese, 'Twig trunk Chinese');

  return isItemExistByStringFromList(
    twigTrunkContextSet,
    twigTrunkChinese,
    'twigTrunkChinese');
}
