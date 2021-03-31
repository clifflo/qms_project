import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidBranch,
  elrs
} from '../twigs/twig_1';
import { getBpse } from '../twigs/twig_3';
import { lhcts_5 } from './rho_4';
import { rpsSet, rpalOrder } from './rho_5';
import { item } from '../utils/util_1';
import { getWToday } from '../calendar';
import { getLhcByIdx } from './rho_3';
import { idxOfBranch } from '../twigs/twig_1';
import { getDelta_1 } from '../deltas/delta_1';
import { getDelta_2 } from '../deltas/delta_2';
import { getDelta_3 } from '../deltas/delta_3';

// 'Rin' stands for Rho Input.
const castRhoLots = (lhia, lhib) => {

  try{
    const lhna = getLhcByIdx(lhia).lhName;
    const lhnb = getLhcByIdx(lhib).lhName;

    const wToday = getWToday();
    const mBrh = wToday.mbp[1];
    const dbp = wToday.dbp;
    const delta_0 = `${mBrh}月${dbp}日${lhna}之${lhnb}卦`;
    return R.compose(
      getDelta_3,
      getDelta_2,
      getDelta_1)(delta_0);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot cast rho lots.');
  }


}

// Cast eight faced rho lots
const efRhoLots_1 =
  (efda_1, efda_2, efdb_1, efdb_2) => {

  try{
    const lhia_1 = (efda_1 % 8) * 8;
    const lhia_2 = efda_2 % 8;
    const lhia_3 = lhia_1 + lhia_2;

    const lhib_1 = (efdb_1 % 8) * 8;
    const lhib_2 = efdb_2 % 8;
    const lhib_3 = lhib_1 + lhib_2;

    return castRhoLots(lhia_3, lhib_3);
  }
  catch(err){
    throw new Error(
      'Cannot cast eight faced rho lots.');
  }


}

// Eight faced dice results
export const efRhoLots_2 = (efdr) => {

  return efRhoLots_1(...R.split('', efdr));
}
