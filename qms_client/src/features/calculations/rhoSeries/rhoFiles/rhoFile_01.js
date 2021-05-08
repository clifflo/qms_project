import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utItem,
  utGetIdx
} from '../../utils/util_01';
import {
  indexOfBranch,
  itemOfBranch
} from '../../twigs/twig_01';

export const rawNattoContextSet =
  R.join(',', [
    '乾金甲子壬順佈,坎水戊寅戊順佈',
    '艮土丙辰丙順佈,震木庚子庚順佈',
    '巽木辛丑辛逆佈,離火己卯己逆佈',
    '坤土乙未癸逆佈,兌金丁巳丁逆佈',
  ])

export const shortHookContextSet = [
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 0,
    genericShortHookOriginal: '地',
    genericShortHookAlternative: '坤',
    genericShortHookEnglish: 'Short Hook Earth'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 1,
    genericShortHookOriginal: '雷',
    genericShortHookAlternative: '震',
    genericShortHookEnglish: 'Short Hook Thunder'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 2,
    genericShortHookOriginal: '水',
    genericShortHookAlternative: '坎',
    genericShortHookEnglish: 'Short Hook Lake'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 3,
    genericShortHookOriginal: '澤',
    genericShortHookAlternative: '兌',
    genericShortHookEnglish: 'Short Hook Swamp'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 4,
    genericShortHookOriginal: '山',
    genericShortHookAlternative: '艮',
    genericShortHookEnglish: 'Short Hook Mountain'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 5,
    genericShortHookOriginal: '火',
    genericShortHookAlternative: '離',
    genericShortHookEnglish: 'Short Hook Flame'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 6,
    genericShortHookOriginal: '風',
    genericShortHookAlternative: '巽',
    genericShortHookEnglish: 'Short Hook Monsoon'
  },
  {
    _type: 'Short Hook Context',
    genericShortHookIndex: 7,
    genericShortHookOriginal: '天',
    genericShortHookAlternative: '乾',
    genericShortHookEnglish: 'Short Hook Sky'
  }
]
