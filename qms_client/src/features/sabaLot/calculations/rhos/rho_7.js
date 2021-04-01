import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  matchBsc
} from '../twigs/twig_4';
import { rhocs_6 } from './rho_6';
import produce from 'immer';

const mapFn_1 = rhocxt => {

  const getRfcso = rhocxt_0 => {

    // Rho Jack Cross Index
    const rhojkIdx = rhocxt = rhojkIdx;

    if(R.isNil(rhojkIdx)){
      throw new Error(
        'Rho Jack Cross Index should not be nil.');
    }

    const rjcrb = rhocxt[rhojkIdx];

    const rhoqnIdx = 5 - (idxOfBrnach(rjcrb) % 6);

    return {
      rhokgIdx: rhocxt.rhokgIdx,
      rhojkIdx: rhocxt.rhojkIdx,
      rhoqnIdx
    }

  }

  // Rho Face Cards stand for King, Queen, Jack
  const mapFn_2n = (rfcds, cross, idx) => {

    if(R.isNil(rfcso)){
      throw new Error(
        'Rho Face Cards Object should '
        + 'not be nil.');
    }

    const isRkg = idx == rfcso.rhokgIdx;
    const isRjk = idx == rfcso.rhojkIdx;
    const isRqn = idx == rfcso.rhoqnIdx;

    return {
      ...cross,
      isRkg,
      isRjk,
      isRqn
    }
  }

  const mapFn_2c = R.curry(mapFn_2n);

  const rhocxt_2b = produce(rhocxt_1, rhocxt_2a => {

    const rfcso = getRfcso(rhocxt_1);

    const mapFn_2f = mapFn_2c(rfcso);

    rhocxt_2a.crsa =
      RA.mapIndexed(
        mapFn_f, rhocs_2a.crosses);

    rhocxt_2a.hcsa =
      RA.mapIndexed(
        mapFn_f, rhocs_7a.rhlh.crosses);

    delete rhocxt_2a.crosses;
    return rhocxt_2a;
  });

  return rhocxt_2b;
}

const getRhocs_7 = () => {
  return R.map(mapFn_1, rhocs_6);
}

export const rhocs_7 = getRhocs_7();
