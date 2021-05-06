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
  utDictParse,
  utSecondWord
} from '../../utils/util_06';

// Delta paladin chinese order
export const dplco =
  R.compose(
    R.reverse,
    R.split(','))
  ('丙青龍,丙朱雀,丙勾陳,丙螣蛇,丙白虎,丙玄武');

// [dpldl] is delta paladin dictionary list
// [dplcn] is delta paladin chinese name.
// [dplnn] is delta paladin nickname.
// [dplnn] is delta paladin full english name.
// [dplsid] is delta paladin specification ID.
const _dpldl = [
  {
    dplcn: '丙青龍',
    dplnn: 'Dragon',
    dplsid: 'dtp-ql'
  },
  {
    dplcn: '丙朱雀',
    dplnn: 'Phoenix',
    dplsid: 'dtp-zj'
  },
  {
    dplcn: '丙勾陳',
    dplnn: 'Unicorn',
    dplsid: 'dtp-gc'
  },
  {
    dplcn: '丙螣蛇',
    dplnn: 'Cobra',
    dplsid: 'dtp-ts'
  },
  {
    dplcn: '丙白虎',
    dplnn: 'Tiger',
    dplsid: 'dtp-bh'
  },
  {
    dplcn: '丙玄武',
    dplnn: 'Turtle',
    dplsid: 'dtp-xw'
  }
]

const dpldlMapFn = dpldi => {
  const dplen = 'Delta ' + dpldi.dplnn;
  return {
    ...dpldi,
    dplen
  }
}

export const dpldl = R.map(dpldlMapFn, _dpldl);

// Get delta paladin chinese by nickname
export const getDpcbe = dplnn => {

  E.cknws(dplnn, 'dplnn');

  try{
    const dpcbn = utDictParse(
      dplnn,
      'dplnn',
      'dplcn'
    )
    return dpcbn;
  }
  catch(err){
    console.error(err);
    throw new Error(
      `${dplnn} is not a valid [dplnn].`);
  }
}

// Delta paladin nickname set
const getDpnns = () => {
  try{
    return utPropMap('dplnn', dpldl);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [dpnns].');
  }
}

const dpnns = getDpnns();

export const isValidDplnn = dplnn => {
  return R.includes(dplnn, dpnns);
}
