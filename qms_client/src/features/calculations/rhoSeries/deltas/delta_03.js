import * as R from 'ramda';
import {
  getRcxt2ByLhn
} from '../rhos/rho_04';
import {
  getRcxt4ByLhn
} from '../rhos/rho_06';
import {
  decimalToBinary
} from '../../utils/util_02';

// Delta cross strike list
export const getDcstl = (boklhn, chelhn) => {

  try{

    const bkrcxt = getRcxt2ByLhn(boklhn);
    const chrcxt = getRcxt2ByLhn(chelhn);

    E.chnwo(bkrcxt, 'bkrcxt');
    E.chnwo(chrcxt, 'chrcxt');

    const isZeroOrOne = crsi => {
      return (crsi == '0') || (crsi == '1');
    }

    const mapFn = cridx => {
      const bcrsi = bkrcxt.lhcres[cridx].crsi;
      const ccrsi = chrcxt.lhcres[cridx].crsi;

      E.cknws(bcrsi, 'bcrsi');

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


}

export const getDlocs_1 = (boklhn, chelhn) => {

}
