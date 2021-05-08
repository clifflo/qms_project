import * as R from 'ramda';
import * as E from '../../examiner';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  getDlcxt_1,
} from './delta_03';
import {
  getDcstl
} from './delta_04';
import {
  getRcxt8ByLhn
} from '../rhos/rho_13';

export const getDlcxt_2 =
  (wbllhn, chelhn, dpdtr) => {

  E.cknws(wbllhn, 'wbllhn');
  E.cknws(chelhn, 'chelhn');
  E.cknws(dpdtr, 'dpdtr');

  const dlcxt_1 = getDlcxt_1(wbllhn, dpdtr);
  const dcstl = getDcstl(wbllhn, chelhn);
  const chrcxt = getRcxt8ByLhn(chelhn);

  // Wheat bowl external short hook element
  const wbeshe = dlcxt_1.eshele;

  // Wheat bowl internal short hook element
  const wbishe = dlcxt_1.ishele;

  // Wheat bowl external short hook original
  const wbesho = dlcxt_1.eshori;

  // Wheat bowl internal short hook original
  const wbisho = dlcxt_1.ishori;

  // Wheat bowl generation
  const wbrgen = dlcxt_1.rhogen;

  // Cheese external short hook element
  const cheshe = dlcxt_1.eshele;

  // Cheese internal short hook element
  const chishe = dlcxt_1.ishele;

  // Cheese external short hook original
  const chesho = chrcxt.eshori;

  // Cheese internal short hook original
  const chisho = chrcxt.ishori;

  // Cheese rho generation
  const chrgen = chrcxt.rhogen;

  const mapFn_1 = longHookCross => {
    const isStrike = dcstl[longHookCross.longHookCrossDownwardIndex];
    if(isStrike){
      const strkcr =
        chrcxt.lhcrsl[longHookCross.longHookCrossDownwardIndex];
      return {
        ...longHookCross,
        isStrike,
        strkcr
      }
    }
    else {
      return {
        ...longHookCross,
        isStrike
      }
    }


  }

  const mapFn_2 = longHookCross => {
    const isStruck = dcstl[longHookCross.longHookCrossDownwardIndex];
    return {
      ...longHookCross,
      isStruck
    }
  }

  const wbowcl = R.map(
    mapFn_1, dlcxt_1.lhcrsl);

  const chescl = R.map(
    mapFn_2, chrcxt.lhcrsl);

  return {
    wbllhn,
    chelhn,
    wbowcl,
    chescl,
    wbesho,
    wbisho,
    chesho,
    chisho,
    wbrgen,
    chrgen,
    cheshe,
    chishe,
    wbeshe,
    wbishe
  }
}
