import * as R from 'ramda';
import * as E from '../../examiner';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  getDlcxt_1
} from './delta_03';
import {
  getRcxt2ByLhn
} from '../rhos/rho_05';
import {
  getRcxt8ByLhn
} from '../rhos/rho_13';

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

      const wcrsi = wblrct.lhcrsl[cridx].crsi;
      const ccrsi = cherct.lhcrsl[cridx].crsi;

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
