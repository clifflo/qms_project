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

    const isZeroOrOne = crossSign => {
      return (crossSign == '0') || (crossSign == '1');
    }

    const mapFn = cridx => {

      const wcrossSign = wblrct.lhcrsl[cridx].crossSign;
      const ccrossSign = cherct.lhcrsl[cridx].crossSign;

      E.cknws(wcrossSign, 'wcrossSign');
      E.cknws(ccrossSign, 'ccrossSign');

      if(!isZeroOrOne(wcrossSign)){
        throw new Error(
          '[wcrossSign] must be 1 or 0.');
      }

      if(!isZeroOrOne(ccrossSign)){
        throw new Error(
          '[ccrossSign] must be 1 or 0.');
      }

      return wcrossSign != ccrossSign;
    }
    return R.map(mapFn, R.range(0, 6));
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [dcstl].');
  }

}
