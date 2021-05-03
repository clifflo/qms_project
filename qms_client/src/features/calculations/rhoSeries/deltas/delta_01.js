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
    dplsen: 'Dragon',
    dplfen: 'Delta dragon',
    dplsid: 'dtp-ql'
  },
  {
    dplcn: '丙朱雀',
    dplsen: 'Phoenix',
    dplfen: 'Delta phoenix',
    dplsid: 'dtp-zj'
  },
  {
    dplcn: '丙勾陳',
    dplsen: 'Unicorn',
    dplfen: 'Delta unicorn',
    dplsid: 'dtp-gc'
  },
  {
    dplcn: '丙螣蛇',
    dplsen: 'Cobra',
    dplfen: 'Delta cobra',
    dplsid: 'dtp-ts'
  },
  {
    dplcn: '丙白虎',
    dplsen: 'Tiger',
    dplfen: 'Delta tiger',
    dplsid: 'dtp-bh'
  },
  {
    dplcn: '丙玄武',
    dplsen: 'Turtle',
    dplfen: 'Delta turtle',
    dplsid: 'dtp-xw'
  }
]

// Get delta paladin dictionary by short english
export const getDpdbse = dplsen => {

  E.cknws(dplsen, 'dplsen');

  try{
    const dpdbse = utFindByPropEq(
      'dplsen', dplsen, dpldl);

    return dpcbse;
  }
}

// Delta paladin short english set
export const dpsens = utPropMap('dplsen');

export const isValidDplsen = dplsen => {
  return R.includes(dplsen, dpsens);
}
