import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  getCyclicItemFromList,
  utGetIdx
} from '../../utilityFiles/utility_01';
import {
  indexOfBranch,
  itemOfBranch
} from '../../twigs/twig_01';

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
