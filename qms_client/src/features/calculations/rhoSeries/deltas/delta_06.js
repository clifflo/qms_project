import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../egghead';
import { utDissoc } from '../../utils/util_06';

export const buildDlcxt_3 = dlcxt_2 => {

  // [iswbo] means is wheat bowl or not.
  const mapFn = (isWbo, lhcres_1) => {

    if(!lhcres.isRbxc){

      const trucrs_1 = utDissoc(lhcres_1, ['rpilcs']);
      const rpilcs_1 = lhcres.rpilcs;

      const trucrs_2 = {
        ...trucrs_1,
        isWbo,
        isDpcrs: true
      }

      const rpilcs_2 = {
        ...rpilcs_1,
        isDpcrs: false
      }

      return [
        trucrs_2,
        rpilcs_2
      ]
    }
    else {

      const lhcres_2 = {
        ...lhcres_1,
        isWbo,
        isDpcrs: true
      }

      return [
        lhcres_2
      ]
    }
  }
}
