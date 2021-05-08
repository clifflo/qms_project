import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  indexOfBranch,
  isValidBranch,
  trunkOrder
} from '../../twigs/twig_01';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_02';
import {
  rhocs_1
} from './rho_01';
import {
  getRhoContext1ByLongHookName
} from './rho_05';
import {
  getRcxt6ByLhn,
  rhocs_6
} from './rho_11';

const getRhoContextSet_7 = () => {

  const mapFn_1n =
    (rjkdi, rkgdi, rqndi, longHookCross) => {

    if(R.isNil(rjkdi)){
      throw new Error(
        'RJKDI should not be nil.');
    }

    const longHookCrossDownwardIndex = longHookCross.longHookCrossDownwardIndex;

    if(R.isNil(longHookCrossDownwardIndex)){
      throw new Error(
        '[longHookCrossDownwardIndex] should not be nil.');
    }

    const isRhoJack = longHookCrossDownwardIndex == rjkdi;
    const isRqn = longHookCrossDownwardIndex == rqndi;
    const isRkg = longHookCrossDownwardIndex == rkgdi;

    // Rho jack render text
    const rjkrt = isRhoJack ? '世' : '';

    // Rho queen render text
    const rqnrt = isRqn ? '身' : '';

    // Rho king render text
    const rkgrt = isRkg ? '應' : '';

    // Rho face cards render text
    const rfcrt = RA.concatAll([
      rjkrt, rqnrt, rkgrt
    ]);

    return {
      ...longHookCross,
      rfcrt,
      isRhoJack,
      isRqn,
      isRkg
    };
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    const { rjkdi, rkgdi } = rhocxt;
    const _lhcrsl = rhocxt.lhcrsl;

    E.cknwn(rjkdi, 'rjkdi');
    E.cknwn(rkgdi, 'rkgdi');
    E.checkNilWithArray(_lhcrsl, '_lhcrsl');

    // Rho jack cross
    const rjkcr = _lhcrsl[rjkdi];
    E.cknwo(rjkcr, 'rjkcr');

    // Rho jack cross branch
    const rjkbh = rjkcr.crossBranch;
    E.checkNilWithString(rjkbh, 'rjkbh');

    if(!isValidBranch(rjkbh)){
      throw new Error(
        `${rjkbh} is not a valid [rjkbh].`)
    }

    // Rho queen index
    const rqndi = 5 - (indexOfBranch(rjkbh) % 6);
    E.cknwn(rqndi, 'rqndi');

    const lhcrsl =
      R.map(
        mapFn_1c(rjkdi)(rkgdi)(rqndi),
        _lhcrsl);

    return {
      ...rhocxt,
      lhcrsl,
      _type: 'rhocxt_7'
    }
  }

  try{
    return R.map(mapFn_2, rhocs_6);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [rhocs_7].');
  }
}

export const rhocs_7 = getRhoContextSet_7();
