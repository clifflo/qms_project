import {
  findItemByStringFromList,
  checkNilWithString
} from './_utilityHubByTau';
import * as R from 'ramda';

export const tauRawMonthContextSet = [
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '正月',
    tauMonthEnglish: 'Tau January',
    tauMonthIndex: 0,
    tauMonthBranchChinese: '寅月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '二月',
    tauMonthEnglish: 'Tau February',
    tauMonthIndex: 1,
    tauMonthBranchChinese: '卯月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '三月',
    tauMonthEnglish: 'Tau March',
    tauMonthIndex: 2,
    tauMonthBranchChinese: '辰月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '四月',
    tauMonthEnglish: 'Tau April',
    tauMonthIndex: 3,
    tauMonthBranchChinese: '巳月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '五月',
    tauMonthEnglish: 'Tau May',
    tauMonthIndex: 4,
    tauMonthBranchChinese: '午月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '六月',
    tauMonthEnglish: 'Tau June',
    tauMonthIndex: 5,
    tauMonthBranchChinese: '未月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '七月',
    tauMonthEnglish: 'Tau July',
    tauMonthIndex: 6,
    tauMonthBranchChinese: '申月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '八月',
    tauMonthEnglish: 'Tau August',
    tauMonthIndex: 7,
    tauMonthBranchChinese: '酉月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '九月',
    tauMonthEnglish: 'Tau September',
    tauMonthIndex: 8,
    tauMonthBranchChinese: '戌月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '十月',
    tauMonthEnglish: 'Tau October',
    tauMonthIndex: 9,
    tauMonthBranchChinese: '亥月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '十一月',
    tauMonthEnglish: 'Tau November',
    tauMonthIndex: 10,
    tauMonthBranchChinese: '子月'
  },
  {
    _type: 'TauRawMonthContext',
    tauMonthOriginalChinese: '十二月',
    tauMonthEnglish: 'Tau December',
    tauMonthIndex: 11,
    tauMonthBranchChinese: '丑月'
  }
];

export const tauMonthOriginalChineseSet =
  R.map(
    R.prop('tauMonthOriginalChinese'),
    tauRawMonthContextSet);
