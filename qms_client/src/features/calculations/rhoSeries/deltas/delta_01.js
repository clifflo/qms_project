import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utItem,
  utGetIdx
} from '../../utils/util_01';
import {
  trkod,
  isValidTrunk
} from '../../twigs/twig_01';
import {
  getRcxtvByLhn
} from '../rhos/rho_02'
import {
  rhocs_5,
  rfcis
} from '../rhos/rho_06';

// Delta paladin chinese order
export const dplco =
  R.compose(
    R.reverse,
    R.split(','))
  ('丙青龍,丙朱雀,丙勾陳,丙螣蛇,丙白虎,丙玄武');

// [dpldl] is delta paladin dictionary list
// [dplcn] is delta paladin chinese name.
// [dplsen] is delta paladin nickname.
// [dplfen] is delta paladin full english name.
// [dplsid] is delta paladin specification ID.
export const dpldl = [
  {
    dplcn: '丙青龍',
    dplen: 'Delta dragon',
    dplsid: 'dtp-ql'
  },
  {
    dplcn: '丙朱雀',
    dplen: 'Delta phoenix',
    dplsid: 'dtp-zj'
  },
  {
    dplcn: '丙勾陳',
    dplen: 'Delta unicorn',
    dplsid: 'dtp-gc'
  },
  {
    dplcn: '丙螣蛇',
    dplen: 'Delta cobra',
    dplsid: 'dtp-ts'
  },
  {
    dplcn: '丙白虎',
    dplen: 'Delta tiger',
    dplsid: 'dtp-bh'
  },
  {
    dplcn: '丙玄武',
    dplen: 'Delta turtle',
    dplsid: 'dtp-xw'
  }
]

// Get delta paladin chinese by short english
export const getDpcbe = dplen => {

  E.cknws(dplsen, 'dplsen');

  try{
    const dpcbse = utDictParse(
      dplen,
      'dplen',
      'dplcn'
    )
    return dpcbe;
  }
  catch(err){
    console.error(err);
    throw new Error(
      `${dplen} is not a valid [dplen].`);
  }
}

// Delta paladin  english set
export const dpens = utPropMap('dplen');

export const isValidDplen = dplen => {
  return R.includes(dplen, dpens);
}
