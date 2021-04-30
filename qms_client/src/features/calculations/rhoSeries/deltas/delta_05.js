import * as R from 'ramda';
import * as E from '../../egghead';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  getDlcxt_1,
} from './delta_02';
import {
  getDcstl
} from './delta_03';
import {
  getRcxt8ByLhn
} from '../rhos/rho_12';
import {
  utDissoc
} from '../../utils/util_06';

export const getDlcxt_2 = (wbllhn, chelhn, dpdtr) => {

  E.cknws(wbllhn, 'wbllhn');
  E.cknws(chelhn, 'chelhn');
  E.cknws(dpdtr, 'dpdtr');

  const dlcxt_1a = getDlcxt_1(wbllhn, dpdtr);
  const dcstl = getDcstl(wbllhn, chelhn);
  const chrcxt = getRcxt8ByLhn(chelhn);

  // Wheat bowl external short hook original
  const wbesho = dlcxt_1a.eshori;

  // Wheat bowl internal short hook original
  const wbisho = dlcxt_1a.ishori;

  // Wheat bowl generation
  const wbrgen = dlcxt_1a.rhogen;

  // Cheese external short hook original
  const chesho = chrcxt.eshori;

  // Cheese internal short hook original
  const chisho = chrcxt.ishori;

  // Cheese rho generation
  const chrgen = chrcxt.rhogen;

  const mapFn_1 = lhcros => {
    const isStrike = dcstl[lhcros.lhcdwi];
    return {
      ...lhcros,
      isStrike
    }
  }

  const mapFn_2 = lhcros => {
    const isStruck = dcstl[lhcros.lhcdwi];
    return {
      ...lhcros,
      isStruck
    }
  }

  const wbowcl = R.map(mapFn_1, dlcxt_1a.lhcrsl);
  const chescl = R.map(mapFn_2, chrcxt.lhcrsl);

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
    chrgen
  }
}
