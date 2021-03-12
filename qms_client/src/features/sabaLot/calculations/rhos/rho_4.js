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
  getIndexFromList
} from '../utils/util_1';

const getShortHookElementalByOriginal =
  (shortHookOriginal) => {
  const natto = R.find(
    R.propEq('shortHookOriginal', shortHookOriginal),
    nattos);

  if(R.isNil(natto)){
    throw new Error(
      `${shortHookOriginal} is not a valid short hook original.`);
  }

  return natto.shortHookElemental;
}

const getLhContexts_4 = () => {

  const headHookOrder = '乾坎艮震巽離坤兌';

  // Head Hook Elemental Order
  const hhElemOrder = '金水土木木火土金';

  const getHeadHookIndex = (headHook) => {

    try{

      const result = getIndexFromList(
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
