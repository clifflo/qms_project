import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rlhsl
} from './rho_06';

// Rho hook generation index
export const buildRjkdi = rhogen => {

  const mapper = {
    0: 5,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 3,
    7: 2
  }

  const lhcuwi = mapper[rhogen];
  const longHookCrossDownwardIndex = 5 - lhcuwi;
  return longHookCrossDownwardIndex;
}

const getRhoContextSet_3 = () => {

  const mapFn_1 = (
    rlhsc,
    longHookName,
    rhogen) => {

    try{

      const rjkdi = buildRjkdi(rhogen);
      const rkgdi = (rjkdi + 3) % 6;
      const rhlhn = rlhsc.rhlhn;

      if(R.isNil(rhlhn)){
        throw new Error(
          '[rhlhn] should not be nil.');
      }

      return {
        _type: 'rhocxt_3',
        longHookName,
        rhlhn,
        rhogen,
        rjkdi,
        rkgdi
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Mapfn 2 error for get RHOCS_3.');
    }

  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = rlhsc => {

    try{

      const result = RA.mapIndexed(
        mapFn_1c(rlhsc),
        rlhsc.rlhsf);

      return result;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Get RHOCS_3 Map Function 2 error.')
    }
  }

  try{
    const rhocs_3a = R.map(mapFn_2, rlhsl);
    const rhocs_3b = R.flatten(rhocs_3a);
    return rhocs_3b;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [rhocs_3].');
  }

}

export const rhocs_3 = getRhoContextSet_3();

const getRcxt3ByLn = longHookName => {

  if(R.isNil(longHookName)){
    throw new Error(
      'Long hook name should not be nil '
      + 'for RHOCS_3.');
  }

  const rhocxt_3 = R.find(
    R.propEq('longHookName', longHookName),
    rhocs_3);

  if(R.isNil(rhocxt_3)){
    throw new Error(
      `${longHookName} is not a valid [longHookName].`);
  }

  return rhocxt_3;
}
