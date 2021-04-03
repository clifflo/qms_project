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

const getRhocs_4 = () => {

  const rhHookOrder = '乾坎艮震巽離坤兌';

  // Head Hook Elemental Order
  const rhhElemOrder = '金水土木木火土金';

  const getHeadHookIndex = (rhHook) => {

    try{

      const result = utGetIdx(
        rhHook, rhHookOrder);

      if(R.isNil(result)){
        throw new Error(
          `${rhHook} is not a valid head hook.`);
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
      rhocs_2);

    const lpalIndex = context_3.lpalIndex;

    // Head Hook Index
    const hhIndex = getHeadHookIndex(context_3.rhHook);

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

    const rawContexts = R.map(mapFn, rhocs_3);
    const sortedContexts = R.sortBy(
      R.prop('gpalIndex'), rawContexts);
    return sortedContexts;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho Contexts 4.');
  }
}

export const rhocs_4 = getRhocs_4();

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

  return R.map(mapFn_2, rhocs_4);
}

export const rhocs_5 = getRhocs_5();
