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

// Rho focus set map
const rcfsm = {
  'Draw': '丙兄弟',
  'Fruit': '丙子孫',
  'Bank': '丙妻財',
  'Hacker': '丙官鬼',
  'Seed': '丙父母',
};

const rfcmap = {
  '丙兄弟': 'dtf-xd',
  '丙子孫': 'dtf-zs',
  '丙妻財': 'dtf-qc',
  '丙官鬼': 'dtf-gg',
  '丙父母': 'dtf-fm',
}

const rcfset = R.values(rcfsm);

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, lhcros_1) => {

    try{
      const rrfcs = getElre(rhshel, lhcros_1.crbel);
      const rcfcs = rcfsm[crfcs];
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

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    // Non unique Rho Focus Set
    const ncfss = R.map(
      R.prop('rofcs'), rhocxt.lhcres);

    if(R.isNil(ncfss)){
      throw new Error(
        'Non Unique Cross Focus Set should '
        + 'not be nil.');
    }

    // Unique Cross Focus Set
    const ucfss = R.uniq(ncfss);

    // Long Hook with hidden
    const isLhhd = ucfss.length < 5;

    // Rho Hidden Hook Focus Set
    const rhhfs = R.difference(rfsset, ucfss);

    if(isLhhd){

      // Rho Head Long Hook
      const rhces = R.find(
        R.propEq('lhname', '純' + rhocxt.rhshn),
        rhocs_5).lhcres;

      if(R.isNil(rhces)){
        throw new Error(
          'Cannot find the Rho Head Long Hook. '
          + `${rhocxt.rhHook} may not be a valid `
          + 'Rho Head Hook Name.')
      }

      return {
        ...rhocxt,
        isLhhd,
        rhhfs,
        rhces
      }
    }
    else {
      return {
        ...rhocxt,
        isLhhd
      }
    }

  }

  return R.map(mapFn, rhocs_5)
}

export const rhocs_6 = getRhocs_6();
