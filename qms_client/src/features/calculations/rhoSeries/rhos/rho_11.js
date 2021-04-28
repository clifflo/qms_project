import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  idxOfBranch,
  trkod
} from '../../twigs/twig_01';
import {
  binaryToDecimal,
  octalToDecimal
} from '../../utils/util_02';
import {
  rhocs_1
} from './rho_01';
import {
  getRcxt1ByLhn
} from './rho_05';
import {
  getRcxt6ByLhn,
  rhocs_6
} from './rho_10';

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

const getRhocs_7 = () => {

  const mapFn_1n =
    (rjkdi, rkgdi, rqndi, lhcros) => {

    if(R.isNil(rjkdi)){
      throw new Error(
        'RJKDI should not be nil.');
    }

    const lhcdwi = lhcros.lhcdwi;

    if(R.isNil(lhcdwi)){
      throw new Error(
        'LHCDWI should not be nil.');
    }

    const isRjk = lhcdwi == rjkdi;
    const isRqn = lhcdwi == rqndi;
    const isRkg = lhcdwi == rkgdi;

    // Rho jack render function
    const rjkrt = isRjk ? '世' : '';
    const rjrqt = isRqn ? '身' : '';
    const rkgrt = isRkg ? '應' : '';

    // Rho face cards render text
    const rfcrt = RA.concatAll([
      rjkrt, rjrqt, rkgrt
    ]);

    return {
      ...lhcros,
      rfcrt
    };
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    const { rjkdi, rkgdi } = rhocxt;
    const lhcres_1 = rhocxt.lhcres;

    if(R.isNil(rjkdi)){
      throw new Error(
        'RJKDI should not be nil.');
    }

    if(R.isNil(rkgdi)){
      throw new Error(
        'RKGDI should not be nil.');
    }

    if(R.isNil(lhcres_1)){
      throw new Error(
        'LHCRES should not be nil.');
    }

    const rjkcr = lhcres_1[rjkdi];

    if(R.isNil(rjkcr)){
      throw new Error(
        'RKKCR should not be nil.');
    }

    const rjkbh = rjkcr.crbh;

    if(R.isNil(rjkbh)){
      throw new Error(
        'RJKBH should not be nil.')
    }

    const rqndi = 5 - (idxOfBranch(rjkbh) % 6);

    const lhcres_2 =
      R.map(
        mapFn_1c(rjkdi)(rkgdi)(rqndi),
        lhcres_1);

    return {
      ...rhocxt,
      lhcres: lhcres_2
    }
  }

  try{
    return R.map(mapFn_2, rhocs_6);
  }
  catch(err){
    throw new Error(
      'Cannot get RHOCS_7');
  }
}

export const rhocs_7 = getRhocs_7();
