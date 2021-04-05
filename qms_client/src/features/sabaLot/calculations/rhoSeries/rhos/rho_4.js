import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_2
} from './rho_2';
import {
  nattos
} from './rho_1';
import {
  rhocs_3
} from './rho_3';
import {
  utGetIdx
} from '../utils/util_1';
import {
  getElr
} from '../twigs/twig_1';
import {
  nattos
} from '../rhos/rho_1';

const getRhocs_4 = () => {

  const mapFn = rhocxt_3 => {

    const rhocxt_2 = R.find(
      R.propEq('lhname', rhocxt_3.lhname),
      rhocs_2);

    const rlhgn = rhocxt_3.rlhgn;

    if(R.isNil(rlhgn)){
      throw new Error(
        'RLHGN should not be nil.');
    }

    const hhIndex = getRhhix(rhocxt_3.rhhook);

    // Global Palace Index
    const gpalIndex = (hhIndex * 8) + lpalIndex;
    const rhhElem = rhhelOrder[hhIndex]

    return {
      ...rhocxt_2,
      ...rhocxt_3,
      gpalIndex,
      rhhElem
    }
  }

  try {

    const rawContexts = R.map(mapFn, rhocs_3);
    const sortedContexts = R.sortBy(
      R.prop('gpalIndex'), rawContexts);
    return sortedContexts;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho contexts 4.');
  }
}

export const rhocs_4 = getRhocs_4();
