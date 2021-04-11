import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getElre,
  idxOfTrunk,
  itemOfTrunk
} from '../../twigs/twig_1';
import {
  nattos
} from './rho_1';
import {
  getRcxtvByLhn
} from './rho_2';
import {
  rhocs_2
} from './rho_3';
import {
  rhocs_3
} from './rho_4';

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

export const isValidRfchi = rfchi => {

  if(R.isNil(rfchi)){
    throw new Error(
      'RFCHI should not be nil.');
  }

  if(!RA.isString(rfchi)){
    throw new Error(
      'RFCHI must be a string.');
  }

  const isValid = R.includes(rfchi, rfcis);

  return isValid;
}

export const isValidRfcode = rfcode => {

  if(R.isNil(rfcode)){
    throw new Error(
      'RFCODE should not be nil.');
  }

  if(!RA.isString(rfcode)){
    throw new Error(
      'RFCODE must be a string.');
  }

  const isValid = R.includes(rfcode, rfcds);

  return isValid;
}

// Get rho focus chinese
export const getRfchi = rfcode => {

  if(R.isNil(rfcode)){
    throw new Error(
      'RFCODE should not be nil for ' +
      'getting RFCHI.')
  }

  if(!isValidRfcode(rfcode)){
    throw new Error(
      `${rfcode} is not a valid RFCODE.`);
  }

  return rfcom[rfcode];
}

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, lhcros_1) => {

    try{
      const rrfcs = getElre(
        rhshel, lhcros_1.crbel);

      if(R.isNil(rrfcs)){
        throw new Error(
          'RRFCS should not be nil.');
      }

      // Rho chinese focus
      const rfchi = rfram[rrfcs];

      if(R.isNil(rfchi)){
        throw new Error(
          'ROFCS should not be nil.');
      }

      const rfchiLens = R.lensProp('rfchi');
      let lhcros_2 = R.set(
        rfchiLens, rfchi, lhcros_1);
      return lhcros_2;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'MAPFN_1 is error for get RHOCS_5.');
    }
  }
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt_4 => {

    try{
      const lhcres = R.map(
        mapFn_1c(rhocxt_4.rhshel),
        rhocxt_4.lhcres);
      const lhcresLens = R.lensProp('lhcres');
      const rhocxt_5 = R.set(
        lhcresLens, lhcres, rhocxt_4);
      return rhocxt_5;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'MAPFN_2 for get RHOCS_5 is error.');
    }
  }

  return R.map(mapFn_2, rhocs_4);
}

export const rhocs_5 = getRhocs_5();
