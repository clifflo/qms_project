import * as R from 'ramda';
import {
  binaryToDecimal
} from '../utils/util_1';
import {
  getLhcByIdx
} from './rho_3';

// Get Long Hook Binaries A and B
export const castRhoLots = (lhba, lhbb) => {

  const lhia = binaryToDecimal('b' + lhba);
  const lhib = binaryToDecimal('b' + lhbb);

  const lhna = getLhcByIdx(lhia).lhn;
  const lhnb = getLhcByIdx(lhib).lhn;

}
