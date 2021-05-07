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
  utDictMove,
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
// [dplen] is delta paladin nickname.
// [dplen] is delta paladin full english name.
// [dplsid] is delta paladin specification ID.
export const dpldl = [
  {
    dplcn: '丙青龍',
    dplen: 'Delta Dragon'
  },
  {
    dplcn: '丙朱雀',
    dplen: 'Delta Phoenix'
  },
  {
    dplcn: '丙勾陳',
    dplen: 'Delta Unicorn'
  },
  {
    dplcn: '丙螣蛇',
    dplen: 'Delta Cobra'
  },
  {
    dplcn: '丙白虎',
    dplen: 'Delta Tiger'
  },
  {
    dplcn: '丙玄武',
    dplen: 'Delta Turtle'
  }
]

export const getDplen = dplcn => {

  E.cknws(dplcn, 'dplcn');

  try{
    const result = R.find(
      R.propEq('dplcn', dplcn),
      dpldl).dplen;

    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [dplen].')
  }
}

export const isDeltaTiger =
  dplen => dplen == 'Delta Tiger';

export const isDeltaPhoenix =
  dplen => dplen == 'Delta Phoenix';

export const isDeltaTurtle =
  dplen => dplen == 'Delta Turtle';

export const isDeltaUnicorn =
  dplen => dplen == 'Delta Unicorn';

export const isDeltaDragon =
  dplen => dplen == 'Delta Dragon';

export const isDeltaCobra =
  dplen => dplen == 'Delta Cobra';
