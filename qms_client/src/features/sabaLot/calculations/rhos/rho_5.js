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

    const crosses = R.map(
      mapFn_1c(lhContext.rhhElem),
      lhContext.crosses);

    return {
      ...lhContext,
      crosses
    }
  }

  const result = R.map(mapFn_2, rhocs_4);
  return result;
}

export const rhocs_5 = getRhocs_5();

const rpalSce = '青龍,朱雀,勾陳,螣蛇,白虎,玄武';

export const rpalOrder =
  R.compose(
    R.reverse,
    R.map(s => '丙' + s),
    R.split(','))
  (rpalSce);

// Rho Paladin Start Position
const getRpldSet = () => {

  const mapFn = i => {

    const rpldKey = R.reverse([0,0,1,1,2,3,4,4,5,5]);
    const trunk = itemOfTrunk(i);

    const rpdix = rpldKey[i];
    const rpld = rpalOrder[rpdix];
    return {
      trunk,
      rpdix,
      rpld
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

export const rpldSet = getRpldSet();
