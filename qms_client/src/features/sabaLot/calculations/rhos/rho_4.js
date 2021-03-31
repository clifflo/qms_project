import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  lhcts_2
} from './rho_2';
import {
  nattos
} from './rho_1';
import {
  lhcts_3
} from './rho_3';
import {
  getIdx
} from '../utils/util_1';
import {
  getElr
} from '../twigs/twig_1';

const getLhcts_4 = () => {

  const headHookOrder = '乾坎艮震巽離坤兌';

  // Head Hook Elemental Order
  const rhhElemOrder = '金水土木木火土金';

  const getHeadHookIndex = (headHook) => {

    try{

      const result = getIdx(
        headHook, headHookOrder);

      if(R.isNil(result)){
        throw new Error(
          `${headHook} is not a valid head hook.`);
      }

      return result;
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot get hook palace index.');
    }
  }

  const mapFn = (context_3) => {

    const context_2 = R.find(
      R.propEq('lhName', context_3.lhName),
      lhcts_2);

    const lpalIndex = context_3.lpalIndex;

    // Head Hook Index
    const hhIndex = getHeadHookIndex(context_3.headHook);

    // Global Palace Index
    const gpalIndex = (hhIndex * 8) + lpalIndex;
    const rhhElem = rhhElemOrder[hhIndex]

    return {
      ...context_2,
      ...context_3,
      gpalIndex,
      rhhElem
    }
  }

  try {

    const rawContexts = R.map(mapFn, lhcts_3);
    const sortedContexts = R.sortBy(
      R.prop('gpalIndex'), rawContexts);
    return sortedContexts;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get LH Contexts 4.');
  }
}

export const lhcts_4 = getLhcts_4();

const getLhcts_5 = () => {

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
      const crosses = R.map(
        mapFn_1c(lhc_4.rhhElem),
        lhc_4.crosses);

      // Long Hook Context 5
      let lhc_5 = Object.assign({}, lhc_4);
      lhc_5.crosses = crosses;

      return lhc_5;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 is error.');
    }

  }

  return R.map(mapFn_2, lhcts_4);
}

export const lhcts_5 = getLhcts_5();
