import * as R from 'ramda';
import * as RA from 'ramda';

// Delta handler Jack
export const dhJack = dlcxt_2 => {
  return R.find(
    R.prop('isRjk'), dlcxt_2.wbowcl);
}

export const dhKing = dlcxt_2 => {
  return R.find(
    R.prop('isRkg'), dlcxt_2.wbowcl);
}

export const dhQueen = dlcxt_2 => {
  return R.find(
    R.prop('isRqn'), dlcxt_2.wbowcl);
}

export {
  isDeltaBrother,
  isDeltaSon,
  isDeltaParent,
  isDeltaGhost,
  isDeltaMoney
} from '../rhos/rho_09';

export {
  isDeltaTiger,
  isDeltaPhoenix,
  isDeltaTurtle,
  isDeltaUnicorn,
  isDeltaDragon,
  isDeltaCobra
} from './delta_01';
