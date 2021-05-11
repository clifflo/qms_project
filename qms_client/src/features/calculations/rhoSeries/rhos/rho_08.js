import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getElre,
  indexOfTrunk,
  itemOfTrunk
} from '../../twigs/twig_01';
import {
  bakedNattos
} from './rho_01';
import {
  getRcxtvByLhn
} from './rho_05';
import {
  rhoLongHookContextSet_2
} from './rho_04';
import {
  rhoLongHookContextSet_3
} from './rho_07';

const getRhoLongHookContextSet_4 = () => {

  const mapFn = rhocxt_3 => {

    const rhocxt_2 = R.find(
      R.propEq('longHookName', rhocxt_3.longHookName),
      rhoLongHookContextSet_2);

    const natto = R.find(
      R.propEq('genericShortHookOriginal', rhocxt_3.rhlhn),
      bakedNattos);

    if(R.isNil(natto)){
      throw new Error(
        'Natto should not be nil.');
    }

    const rhshel = natto.genericShortHookElemental;

    if(R.isNil(rhshel)){
      throw new Error(
        '[rhshel] should not be nil.');
    }

    return {
      ...rhocxt_2,
      ...rhocxt_3,
      rhshel,
      _type: 'rhocxt_4'
    }
  }

  try {

    const rhoLongHookContextSet_4a = R.map(mapFn, rhoLongHookContextSet_3);

    const rhoLongHookContextSet_4b = R.sortBy(
      R.prop('rglhi'), rhoLongHookContextSet_4a);

    return rhoLongHookContextSet_4b;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RHOCS_4.');
  }
}

export const rhoLongHookContextSet_4 = getRhoLongHookContextSet_4();

export const getRcxt4ByLhn = longHookName => {
  try {
    return getRcxtvByLhn(
      longHookName, rhoLongHookContextSet_4, 4);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_4 by long hook name.')
  }
}
