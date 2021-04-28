import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getElre,
  idxOfTrunk,
  itemOfTrunk
} from '../../twigs/twig_01';
import {
  nattos
} from './rho_01';
import {
  getRcxtvByLhx
} from './rho_04';
import {
  rhocs_2
} from './rho_02';
import {
  rhocs_3
} from './rho_05';

const getRhocs_4 = () => {

  const mapFn = rhocxt_3 => {

    const rhocxt_2 = R.find(
      R.propEq('lhname', rhocxt_3.lhname),
      rhocs_2);

    const natto = R.find(
      R.propEq('gshori', rhocxt_3.rhshn),
      nattos);

    if(R.isNil(natto)){
      throw new Error(
        'Natto should not be nil.');
    }

    const rhshel = natto.gshele;

    if(R.isNil(rhshel)){
      throw new Error(
        'RHSHEL should not be nil.');
    }

    return {
      ...rhocxt_2,
      ...rhocxt_3,
      rhshel
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

// Rho focus raw map
const rfram = {
  'Draw': '丙兄弟',
  'Fruit': '丙子孫',
  'Bank': '丙妻財',
  'Hacker': '丙官鬼',
  'Seed': '丙父母',
};

// Rho focus chinese map
export const rfcim = {
  '丙兄弟': 'dtf-xd',
  '丙子孫': 'dtf-zs',
  '丙妻財': 'dtf-qc',
  '丙官鬼': 'dtf-gg',
  '丙父母': 'dtf-fm',
}

// Rho focus code set
export const rfcds = R.values(rfcim);

// Rho focus chinese set
export const rfcis = R.values(rfram);

// Rho focus code map
export const rfcom = R.invertObj(rfcim);
