import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  lhContexts_2
} from './rho_2';
import {
  nattos
} from './rho_1';
import {
  lhContexts_3
} from './rho_3';
import {
  getIdx
} from '../utils/util_1';
import {
  getElr
} from '../twigs/twig_1';

const getLhContexts_4 = () => {

  const headHookOrder = '乾坎艮震巽離坤兌';

  // Head Hook Elemental Order
  const hhElemOrder = '金水土木木火土金';

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
      lhContexts_2);

    const lpalIndex = context_3.lpalIndex;

    // Head Hook Index
    const hhIndex = getHeadHookIndex(context_3.headHook);

    // Global Palace Index
    const gpalIndex = (hhIndex * 8) + lpalIndex;
    const hhElem = hhElemOrder[hhIndex]

    return {
      ...context_2,
      ...context_3,
      gpalIndex,
      hhElem
    }
  }

  try {

    const rawContexts = R.map(mapFn, lhContexts_3);
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

export const lhContexts_4 = getLhContexts_4();

const getLhContexts_5 = () => {

  // Focus Chinese Name List
  const fcnl = {
    'Draw': '丙兄弟',
    'Fruit': '丙子孫',
    'Bank': '丙妻財',
    'Hacker': '丙官鬼',
    'Seed': '丙父母',
  }

  // Map Function 1 non curried
  const mapFn_1n = (hhElem, cross_1) => {

    try{
      const focus = getElr(hhElem, cross_1.cbe);
      const fcn = fcnl[focus];
      let cross_2 = Object.assign({}, cross_1);
      cross_2.fcn = fcn;
      return cross_2;
    }
    catch(err){
      console.log(err);
      throw new Error(
        'Map function 1 is error.');
    }
  }

  // Map Function 1 curried
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = lhc_4 => {

    try {
      const crosses = R.map(
        mapFn_1c(lhc_4.hhElem),
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

  return R.map(mapFn_2, lhContexts_4);
}

export const lhContexts_5 = getLhContexts_5();
