import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhksrs
} from './rho_04';

export const buildRjkdi = rhgidx => {

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

  const lhcuwi = mapper[rhgidx];
  const lhcdwi = 5 - lhcuwi;
  return lhcdwi;
}

const getRhocs_3 = () => {

  const mapFn_1 = (
    rhksrs,
    lhname,
    rhgidx) => {

    try{

      const rjkdi = buildRjkdi(rhgidx);
      const rkgdi = (rjkdi + 3) % 6;

      return {
        lhname,
        rhshn: rhksrs.rhshn,
        rhgidx,
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

  const mapFn_2 = rhksrs => {

    try{

      const result = RA.mapIndexed(
        mapFn_1c(rhksrs),
        rhksrs.rlhkss);

      return result;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Get RHOCS_3 Map Function 2 error.')
    }

  }

  try{
    const nestedList = R.map(mapFn_2, rhksrs);
    const flatList = R.flatten(nestedList);
    return flatList;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RHOCS_3.');
  }

}

export const rhocs_3 = getRhocs_3();

const getRcxt3ByLn = lhname => {

  if(R.isNil(lhname)){
    throw new Error(
      'Long hook name should not be nil '
      + 'for RHOCS_3.');
  }

  const rhocxt_3 = R.find(
    R.propEq('lhname', lhname),
    rhocs_3);

  if(R.isNil(rhocxt_3)){
    throw new Error(
      `${lhname} is not a valid long hook `
      + 'name for RHOCS_3.');
  }

  return rhocxt_3;
}
