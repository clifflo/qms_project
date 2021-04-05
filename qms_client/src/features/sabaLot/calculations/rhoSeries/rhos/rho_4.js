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

  const mapFn = rhocxt_3 => {

    const rhocxt_2 = R.find(
      R.propEq('lhname', rhocxt_3.lhname),
      rhocs_2);

    const lpalIndex = rhocxt_3.lpalIndex;

    // Head Hook Index
    const hhIndex = getHeadHookIndex(rhocxt_3.rhHook);

    // Global Palace Index
    const gpalIndex = (hhIndex * 8) + lpalIndex;
    const rhhElem = rhhElemOrder[hhIndex]

    return {
      ...rhocxt_2,
      ...rhocxt_3,
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
      'Cannot get Rho contexts 4.');
  }
}

export const rhocs_4 = getRhocs_4();
