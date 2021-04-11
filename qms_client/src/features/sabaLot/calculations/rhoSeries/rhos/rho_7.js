import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_2';
import {
  getRcxt1ByLhn
} from './rho_2';
import {
  getRplbd,
  getRcxt6ByLhn
} from './rho_6';


export const getLhnFromBilot = bilot => {

  try{

    if(R.isNil(bilot)){
      throw new Error(
        'BILOT should not be nil.');
    }

    if(!RA.isString(bilot)){
      throw new Error(
        'BILOT must be a string.');
    }

    if(bilot.length != 7){
      throw new Error(
        'Length of BILOT must be 7.');
    }

    const lhidx = binaryToDecimal(bilot);
    const lhname = getRcxt1ByLhn(lhidx).lhname;

    if(R.isNil(lhname)){
      throw new Error(
        'Long hook name should not be nil.');
    }

    return lhname;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Long hook name.');
  }

}

export const getLhnFromOclot = oclot => {

  if(R.isNil(oclot)){
    throw new Error(
      'OCLOT should not be nil.');
  }

  if(!RA.isString(oclot)){
    throw new Error(
      'OCLOT must be a string.');
  }

  if(oclot.length != 5){
    throw new Error(
      'Length of OCLOT must be 5.');
  }

  const lhidx = octalToDecimal(oclot);
  return getRcxt1ByLhn(lhidx).lhname;
}

export const getRhocxt_7 = (rdtr, lhname) => {

  if(R.isNil(rdtr)){
    throw new Error(
      'RDTR should not be nil.');
  }

  if(R.isNil(lhname)){
    throw new Error(
      'LHNAME should not be nil.');
  }

  const rplbd = getRplbd(rdtr);
  const rhocxt_6 = getRcxt6ByLhn(lhname);
  const lhcres_1 = rhocxt_6.lhcres;


  const mapFn = idx => {
    const lhcros = lhcres_1[idx];
    return {
      ...lhcros,
      rcpld: rplbd[idx]
    }
  }

  const lhcres_2 = R.map(mapFn, R.range(0, 6));

  return {
    ...rhocxt_6,
    lhcres: lhcres_2
  }
}
