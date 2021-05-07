import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getElre,
  indexOfTrunk,
  itemOfTrunk
} from '../../twigs/twig_01';
import {
  bkntos
} from './rho_01';
import {
  getRcxtvByLhn
} from './rho_05';
import {
  rhocs_2
} from './rho_04';
import {
  rhocs_3
} from './rho_07';

const getRhocs_4 = () => {

  const mapFn = rhocxt_3 => {

    const rhocxt_2 = R.find(
      R.propEq('lhname', rhocxt_3.lhname),
      rhocs_2);

    const natto = R.find(
      R.propEq('gshori', rhocxt_3.rhlhn),
      bkntos);

    if(R.isNil(natto)){
      throw new Error(
        'Natto should not be nil.');
    }

    const rhshel = natto.gshele;

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

    const rhocs_4a = R.map(mapFn, rhocs_3);

    const rhocs_4b = R.sortBy(
      R.prop('rglhi'), rhocs_4a);

    return rhocs_4b;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RHOCS_4.');
  }
}

export const rhocs_4 = getRhocs_4();

export const getRcxt4ByLhn = lhname => {
  try {
    return getRcxtvByLhn(
      lhname, rhocs_4, 4);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_4 by long hook name.')
  }
}
