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
  rhoLongHookContextSet_5,
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

export const dpldl = [
  {
    deltaPaladinChinese: '丙青龍',
    deltaPaladinEnglish: 'Delta Dragon'
  },
  {
    deltaPaladinChinese: '丙朱雀',
    deltaPaladinEnglish: 'Delta Phoenix'
  },
  {
    deltaPaladinChinese: '丙勾陳',
    deltaPaladinEnglish: 'Delta Unicorn'
  },
  {
    deltaPaladinChinese: '丙螣蛇',
    deltaPaladinEnglish: 'Delta Cobra'
  },
  {
    deltaPaladinChinese: '丙白虎',
    deltaPaladinEnglish: 'Delta Tiger'
  },
  {
    deltaPaladinChinese: '丙玄武',
    deltaPaladinEnglish: 'Delta Turtle'
  }
]

export const getDplen = deltaPaladinChinese => {

  E.checkNilWithString(
    deltaPaladinChinese,
    'Delta Paladin Chinese');

  try{
    const result = R.find(
      R.propEq(
        'deltaPaladinChinese',
        deltaPaladinChinese),
      dpldl).deltaPaladinEnglish;

    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [deltaPaladinEnglish].')
  }
}

export const isDeltaTiger =
  deltaPaladinEnglish =>
  deltaPaladinEnglish == 'Delta Tiger';

export const isDeltaPhoenix =
  deltaPaladinEnglish =>
  deltaPaladinEnglish == 'Delta Phoenix';

export const isDeltaTurtle =
  deltaPaladinEnglish =>
  deltaPaladinEnglish == 'Delta Turtle';

export const isDeltaPaladinUnicorn =
  deltaPaladinEnglish =>
  deltaPaladinEnglish == 'Delta Unicorn';

export const isDeltaPaladinDragon =
  deltaPaladinEnglish =>
  deltaPaladinEnglish == 'Delta Dragon';

export const isDeltaPaladinCobra =
  deltaPaladinEnglish =>
  deltaPaladinEnglish == 'Delta Cobra';
