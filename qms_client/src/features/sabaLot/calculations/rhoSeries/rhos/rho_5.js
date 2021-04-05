import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_4
} from './rho_4';
import {
  getElr,
  idxOfTrunk,
  itemOfTrunk
} from '../twigs/twig_1';


const getRhocs_5 = () => {

  // Focus Chinese Name List
  const fcnl = {
    'Draw': '丙兄弟',
    'Fruit': '丙子孫',
    'Bank': '丙妻財',
    'Hacker': '丙官鬼',
    'Seed': '丙父母',
  }

  // Map Function 1 non curried
  const mapFn_1n = (rhhElem, cross_1) => {


    try{
      const crfcs = getElr(rhhElem, cross_1.cbel);
      const fcn = fcnl[crfcs];
      let cross_2 = Object.assign({}, cross_1);
      cross_2.fcn = fcn;
      return cross_2;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 1 is error.');
    }
  }

  // Map Function 1 curried
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = lhc_4 => {

    try {
      const lhcres = R.map(
        mapFn_1c(lhc_4.rhhElem),
        lhc_4.lhcres);

      // Long Hook Context 5
      let lhc_5 = Object.assign({}, lhc_4);
      lhc_5.lhcres = lhcres;

      return lhc_5;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 is error.');
    }

  }

  return R.map(mapFn_2, rhocs_4);
}

export const rhocs_5 = getRhocs_4();

const getRhocs_5 = () => {

  // Map Function 1 non-curried.
  const mapFn_1n = (rhhElem, cross) => {

    const crfcs = getElr(
      rhhElem,
      cross.cbel);

    return {
      ...cross,
      crfcs
    }
  }

  // Map Function 1 curried
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = (lhContext) => {

    const lhcres = R.map(
      mapFn_1c(lhContext.rhhElem),
      lhContext.lhcres);

    return {
      ...lhContext,
      lhcres
    }
  }

  const result = R.map(mapFn_2, rhocs_4);
  return result;
}

export const rhocs_5 = getRhocs_5();
