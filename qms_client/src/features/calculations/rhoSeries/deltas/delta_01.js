import * as R from 'ramda';
import {
  getRcxt2ByLhn
} from '../rhos/rho_03';
import {
  getRcxt4ByLhn
} from '../rhos/rho_05';
import {
  decimalToBinary
} from '../../utils/util_02';

export const getCrsts = (boklhn, chelhn) => {

  const bkrcxt_2 = getRcxt2ByLhn(boklhn);
  const chrcxt_2 = getRcxt2ByLhn(chelhn);

  const isZeroOrOne = crsi => {
    return (crsi == '0') || (crsi == '1');
  }

  const mapFn = cridx => {
    const bcrsi = bkrcxt_2.lhcres[cridx].crsi;
    const ccrsi = chrcxt_2.lhcres[cridx].crsi;

    if(R.isNil(bcrsi)){
      throw new Error(
        'Book CRSI should not be nil.');
    }

    if(R.isNil(ccrsi)){
      throw new Error(
        'Cheese CRSI should not be nil.');
    }

    if(!isZeroOrOne(bcrsi)){
      throw new Error(
        'BCRSI must be 1 or 0.');
    }

    if(!isZeroOrOne(ccrsi)){
      throw new Error(
        'CCRSI must be 1 or 0.');
    }

    return bcrsi != ccrsi;
  }

  return R.map(mapFn, R.range(0, 6));

}
