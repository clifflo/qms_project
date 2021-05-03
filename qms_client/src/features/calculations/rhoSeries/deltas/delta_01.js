import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  utItem,
  utGetIdx
} from '../../utils/util_01';
import {
  trunkOrder,
  isValidTrunk
} from '../../twigs/twig_01';
import {
  getRcxtvByLhn
} from '../rhos/rho_02'
import {
  rhocs_5,
  rfcis
} from '../rhos/rho_06';
import {
  utPropMap
} from '../../utils/util_04';
import {
  utDictParse
} from '../../utils/util_06';

// Delta paladin chinese order
export const dplco =
  R.compose(
    R.reverse,
    R.split(','))
  ('丙青龍,丙朱雀,丙勾陳,丙螣蛇,丙白虎,丙玄武');

// [dpldl] is delta paladin dictionary list
// [dplcn] is delta paladin chinese name.
// [dplen] is delta paladin nickname.
// [dplfen] is delta paladin full english name.
// [dplsid] is delta paladin specification ID.
export const dpldl = [
  {
    dplcn: '丙青龍',
    dplen: 'Delta Dragon',
    dplsid: 'dtp-ql'
  },
  {
    dplcn: '丙朱雀',
    dplen: 'Delta Phoenix',
    dplsid: 'dtp-zj'
  },
  {
    dplcn: '丙勾陳',
    dplen: 'Delta Unicorn',
    dplsid: 'dtp-gc'
  },
  {
    dplcn: '丙螣蛇',
    dplen: 'Delta Cobra',
    dplsid: 'dtp-ts'
  },
  {
    dplcn: '丙白虎',
    dplen: 'Delta Tiger',
    dplsid: 'dtp-bh'
  },
  {
    dplcn: '丙玄武',
    dplen: 'Delta Turtle',
    dplsid: 'dtp-xw'
  }
]

// Get delta paladin chinese by short english
export const getDpcbe = dplen => {

  E.cknws(dplen, 'dplen');

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
