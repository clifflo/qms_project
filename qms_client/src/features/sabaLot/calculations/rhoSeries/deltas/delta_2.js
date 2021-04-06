import * as R from 'ramda';
import {
  getRcxt2ByLhn
} from '../rhos/rho_2';
import {
  decimalToBinary
} from '../../utils/util_2';

export const getCestm = (srclhn, tgtlhn) => {

  const srocxt_2 = getRcxt2ByLhn(srclhn);
  const tgtcxt_2 = getRcxt2ByLhn(tgtlhn);

  const isZeroOrOne = crsi => {
    return (crsi == '0') || (crsi == '1');
  }

  const mapFn = cridx => {
    const scrsi = srocxt_2.lhcres[cridx].crsi;
    const tcrsi = tgtcxt_2.lhcres[cridx].crsi;

    if(R.isNil(scrsi)){
      throw new Error(
        'Source Cross Sign should not be nil.');
    }

    if(R.isNil(tcrsi)){
      throw new Error(
        'Target Cross Sign should not be nil.');
    }

    if(!isZeroOrOne(scrsi)){
      throw new Error(
        'Source Cross Sign must be 1 or 0.');
    }

    if(!isZeroOrOne(tcrsi)){
      throw new Error(
        'Target Cross Sign must be 1 or 0.');
    }

    return scrsi != tcrsi;
  }

  return R.map(mapFn, R.range(0, 6));

}

export const getRdfhs = (rdbr, lhname) => {
  
}

export const getRdhgs = (rdbr, lnname) => {

}
