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
// [dplal] is delta paladin nickname.
// [dplal] is delta paladin full english name.
// [dplsid] is delta paladin specification ID.
const _dpldl = [
  {
    dplcn: '丙青龍',
    dplal: 'Dragon',
    dplsid: 'dtp-ql'
  },
  {
    dplcn: '丙朱雀',
    dplal: 'Phoenix',
    dplsid: 'dtp-zj'
  },
  {
    dplcn: '丙勾陳',
    dplal: 'Unicorn',
    dplsid: 'dtp-gc'
  },
  {
    dplcn: '丙螣蛇',
    dplal: 'Cobra',
    dplsid: 'dtp-ts'
  },
  {
    dplcn: '丙白虎',
    dplal: 'Tiger',
    dplsid: 'dtp-bh'
  },
  {
    dplcn: '丙玄武',
    dplal: 'Turtle',
    dplsid: 'dtp-xw'
  }
]

const dpldlMapFn = dpldi => {
  const dplen = 'Delta ' + dpldi.dplal;
  return {
    ...dpldi,
    dplen
  }
}

export const dpldl = R.map(dpldlMapFn, _dpldl);

// Get delta paladin chinese by nickname
export const getDpcbe = dplal => {

  E.cknws(dplal, 'dplal');

  try{
    const dpcbn = utDictParse(
      dplal,
      'dplal',
      'dplcn'
    )
    return dpcbn;
  }
  catch(err){
    console.error(err);
    throw new Error(
      `${dplal} is not a valid [dplal].`);
  }
}

// Delta paladin nickname set
const getDpnns = () => {
  try{
    return utPropMap('dplal', dpldl);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [dpnns].');
  }
}

const dpnns = getDpnns();

export const isValidDplnn = dplal => {
  return R.includes(dplal, dpnns);
}
