import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utFindByPropEq,
  utPropMap
} from '../../utils/util_04'
import {
  utDictMove
} from '../../utils/util_06';

// Delta focus dictionary list
// [dfccn] is delta focus chinese name
// [dfcsid] is delta focus specification id
// [dfcen] is delta focus short english name
// [dfcen] is delta focus full english name
export const dfcdl = [
  {
    dfccn: '丙兄弟',
    rrawf: 'Draw',
    dfcen: 'Delta Brother'
  },
  {
    dfccn: '丙子孫',
    rrawf: 'Fruit',
    dfcen: 'Delta Son'
  },
  {
    dfccn: '丙妻財',
    rrawf: 'Bank',
    dfcen: 'Delta Money'
  },
  {
    dfccn: '丙父母',
    rrawf: 'Seed',
    dfcen: 'Delta Parent'
  },
  {
    dfccn: '丙官鬼',
    rrawf: 'Hacker',
    dfcen: 'Delta Ghost'
  }
]

// Delta focus chinese name set
export const dfcns = R.map(
  R.prop('dfccn'), dfcdl);

export const isValidDfccn = dfccn => {
  return R.includes(dfccn, dfcns);
}

export const isDeltaBrother =
  dfcen => dfcen == 'Delta Brother';
