import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  idxOfBranch
} from '../twigs/twig_1';
import {
  matchBsc
} from '../twigs/twig_4';
import { rhocs_6 } from './rho_6';
import produce from 'immer';

const mapFn_1 = rhocxt_1 => {

  const getRfcso = () => {

    // Rho Jack Cross Index
    const rjkdi = rhocxt_1.rjkdi;

    if(R.isNil(rjkdi)){
      throw new Error(
        'RJKDI should not be nil.');
    }

    const rjcrs = rhocxt_1.lhcres[rjkdi];

    if(R.isNil(rjcrs)){
      throw new Error(
        'Rho Jack Cross should not be nil.');
    }

    const rjcbh = rjcrs.crbh;

    if(R.isNil(rjcbh)){
      throw new Error(
        'Rho Jack Cross Branch should '
        + 'not be nil.');
    }

    const rhoqnIdx =
      5 - (idxOfBranch(rjcbh) % 6);

    return {
      rhokgIdx: rhocxt_1.rhokgIdx,
      rjkdi: rhocxt_1.rjkdi,
      rhoqnIdx
    }

  }
  const rfcso = getRfcso();

  // Rho Face Cards stand for King, Queen, Jack
  const mapFn_2n = (rfcso, cross, idx) => {

    if(R.isNil(rfcso)){
      throw new Error(
        'Rho Face Cards Object should '
        + 'not be nil.');
    }

    const isRkg = idx == rfcso.rhokgIdx;
    const isRjk = idx == rfcso.rjkdi;
    const isRqn = idx == rfcso.rhoqnIdx;

    return {
      ...cross,
      isRkg,
      isRjk,
      isRqn
    }
  }

  const mapFn_2c = R.curry(mapFn_2n);

  const rhocxt_2b = produce(
    rhocxt_1, rhocxt_2a => {

    const mapFn_2f = mapFn_2c(rfcso);

    rhocxt_2a.lhcres =
      RA.mapIndexed(
        mapFn_2f, rhocxt_1.lhcres);

    delete rhocxt_2a.lpalIndex;
    delete rhocxt_2a.rjkdi;
    delete rhocxt_2a.rhokgIdx;
    delete rhocxt_2a.rhhElem;

    return rhocxt_2a;
  });

  return rhocxt_2b;
}

const getRhocs_7 = () => {
  try{
    return R.map(mapFn_1, rhocs_6);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho Context Set 7.');
  }

}

export const rhocs_7 = getRhocs_7();
