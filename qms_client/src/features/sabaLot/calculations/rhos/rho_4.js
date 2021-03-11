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
  const headHookElementalOrder = '金水土木木火土金';

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
      R.propEq('longHookName', context_3.longHookName),
      lhContexts_2);

    const headHookIndex = getHeadHookIndex(context_3.headHook);
    const globalPalaceIndex = (headHookIndex * 8) + headHookIndex;
    const headHookElemental = headHookElementalOrder[headHookIndex];

    return {
      ...context_2,
      ...context_3,
      globalPalaceIndex,
      headHookElemental
    }
  }

  try{
    const rawContexts = R.map(mapFn, lhContexts_3);
    const sortedContexts = R.sortBy(
      R.prop('globalPalaceIndex'), rawContexts);
    return sortedContexts;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get LH Contexts 4.');
  }
}

export const lhContexts_4 = getLhContexts_4();