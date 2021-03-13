import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  lhContexts_4
} from './rho_4';
import {
  getElr,
  idxOfTrunk,
  itemOfTrunk
} from '../plastics/plastic_1';

const getLhContexts_5 = () => {

  // Map Function 1 non-curried.
  const mapFn_1n = (hhElem, cross) => {

    const focus = getElr(
      hhElem,
      cross.crossBrelem);

    return {
      ...cross,
      focus
    }
  }

  // Map Function 1 curried
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = (lhContext) => {

    const crosses = R.map(
      mapFn_1c(lhContext.hhElem),
      lhContext.crosses);

    return {
      ...lhContext,
      crosses
    }
  }

  const result = R.map(mapFn_2, lhContexts_4);
  return result;
}

export const lhContexts_5 = getLhContexts_5();

// Paladin Start Position
const getPspSet = () => {
  const mapFn = i => {
    // Paladin Start Position Sentence
    const pspSce = '青龍,朱雀,勾陳,螣蛇,白虎,玄武';
    const pspOrder = R.map(s => '丁' + s, R.split(',', pspSce));
    const pspKey = [5,5,4,4,3,2,1,1,0,0];
    const trunk = itemOfTrunk(i);

    const pspIdx = pspKey[i];
    const psp = pspOrder[pspIdx];
    return {
      trunk,
      psp
    }
  }

  try{
    return R.map(mapFn, R.range(0, 10));
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Paladin Start Position Set.'
    )
  }
}

export const pspSet = getPspSet();
