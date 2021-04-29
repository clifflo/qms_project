import * as R from 'ramda';
import * as E from '../../egghead';
import {
  getRcxt2ByLhn
} from '../rhos/rho_05';
import {
  getRcxt4ByLhn
} from '../rhos/rho_06';
import {
  decimalToBinary
} from '../../utils/util_02';

// Get delta cross strike list by
// cheese in wheat bowl
export const getDcstl = chiwbl => {

  try{

    // Cheese with wheat bowl regex
    const cwwbrg = /(.+)之(.+)/g;

    // Cheese with wheat bowl matches
    const cwwbms = cwwbrg.exec(chiwbl);
    const wbllhn = cwwbms[1];
    const chelhn = cwwbms[2];
    const wblrct = getRcxt2ByLhn(wbllhn);
    const cherct = getRcxt2ByLhn(chelhn);

    E.cknwo(wblrct, 'wblrct');
    E.cknwo(cherct, 'cherct');

    const isZeroOrOne = crsi => {
      return (crsi == '0') || (crsi == '1');
    }

    const mapFn = cridx => {
      const wcrsi = wblrct.lhcres[cridx].crsi;
      const ccrsi = cherct.lhcres[cridx].crsi;

      E.cknws(wcrsi, 'wcrsi');

      E.cknws(wcrsi);
      E.cknws(ccrsi);

      if(!isZeroOrOne(wcrsi)){
        throw new Error(
          '[wcrsi] must be 1 or 0.');
      }

      if(!isZeroOrOne(ccrsi)){
        throw new Error(
          '[ccrsi] must be 1 or 0.');
      }

      return wcrsi != ccrsi;
    }

    return R.map(mapFn, R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [dcstl].');
  }

}

export const getDlocs_1 = (bwllhn, chelhn) => {

}
