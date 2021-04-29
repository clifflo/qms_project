import * as R from 'ramda';
import * as E from '../../egghead';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  getDlcxt_1
} from './delta_02';
import {
  getRcxt2ByLhn
} from '../rhos/rho_05';
import {
  getRcxt8ByLhn
} from '../rhos/rho_12';


//    // Cheese with wheat bowl regex
//    const cwwbrg = /(.+)之(.+)/g;

    // Cheese with wheat bowl matches
//    const cwwbms = cwwbrg.exec(chiwbl);
//    const wbllhn = cwwbms[1];
//    const chelhn = cwwbms[2];

// Get delta cross strike list by
// cheese in wheat bowl
export const getDcstl = (wbllhn, chelhn) => {

  try{

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
      E.cknws(ccrsi, 'ccrsi');

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

export const getDlcxt_2 = (wbllhn, chelhn, dpdtr) => {

  E.cknws(wbllhn, 'wbllhn');
  E.cknws(chelhn, 'chelhn');
  E.cknws(dpdtr, 'dpdtr');

  const dlcxt_1a = getDlcxt_1(wbllhn, dpdtr);
  const dcstl = getDcstl(wbllhn, chelhn);
  const chrcxt = getRcxt8ByLhn(chelhn);

  const mapFn_1 = lhcros => {
    const isStrike = dcstl[lhcros.lhcdwi];
    return {
      ...lhcros,
      isStrike
    }
  }

  const mapFn_2 = lhcros => {
    const fromStrike = dcstl[lhcros.lhcdwi];
    return {
      ...lhcros,
      fromStrike
    }
  }

  const dlcxt_1b = R.set(
    R.lensProp('wbcres'),
    R.map(mapFn_1, dlcxt_1a.lhcres),
    dlcxt_1a);

  const dlcxt_1c = R.set(
    R.lensProp('chcres'),
    R.map(mapFn_2, chrcxt.lhcres),
    dlcxt_1b);

  const dlcxt_2 = R.dissoc('lhcres', dlcxt_1b);

  return dlcxt_2;
}
