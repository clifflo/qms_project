import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_4
} from './rho_4';
import {
  getElre,
  idxOfTrunk,
  itemOfTrunk
} from '../../twigs/twig_1';

// Rho focus raw map
const rfram = {
  'Draw': '丙兄弟',
  'Fruit': '丙子孫',
  'Bank': '丙妻財',
  'Hacker': '丙官鬼',
  'Seed': '丙父母',
};

// Rho focus Chinese map
export const rfcim = {
  '丙兄弟': 'dtf-xd',
  '丙子孫': 'dtf-zs',
  '丙妻財': 'dtf-qc',
  '丙官鬼': 'dtf-gg',
  '丙父母': 'dtf-fm',
}

// Rho focus code set
export const rfcds = R.values(rfcim);

// Rho focus Chinese set
export const rfcis = R.values(rfram);

// Rho focus map inverted
export const rfcmi = R.invertObj(rfcim);

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

// Get rho focus Chinese
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

  return rfcmi[rfcode];
}

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, lhcros_1) => {

    try{
      const rrfcs = getElre(
        rhshel, lhcros_1.crbel);
      const rofcs = rfcim[rrfcs];
      const rofcsLens = R.lensProp('rofcs');
      let lhcros_2 = R.set(
        rofcsLens, rofcs, lhcros_1);
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
