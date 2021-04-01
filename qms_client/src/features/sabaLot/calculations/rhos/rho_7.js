import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  matchBsc
} from '../twigs/twig_4';
import { rhocs_6 } from './rho_6';
import produce from 'immer';

const getRhocs_7 = () => {

  console.log(rhocs_6);

  const lhjia = rhocs_6.lhjia;
  const lhqia = rhocs_6.lhqia;
  const lhkia = rhocs_6.lhkia;

  const mapFn = (cross, idx) => {

    const isRkg = idx == lhkia;
    const isRjk = idx == lhqia;
    const isRqn = idx == lhkia;

    return {
      ...rhocs_6,
      isRkg,
      isRjk,
      isRqn
    }
  }

  const rhocs_7b = produce(rhocs_6, rhocs_7a => {

    rhocs_7a.crsa =
      RA.mapIndexed(mapFn, rhocs_7a.crosses);

    rhocs_7a.hcsa =
      RA.mapIndexed(mapFn, rhocs_7a.rhlh.crosses);

    delete rhocs_7a.lhjia;
    delete rhocs_7a.lhkia;
    delete rhocs_7a.lhqia;

    return rhocs_7a;
  });

  return rhocs_7b;
}

export const rhocs_7 = getRhocs_7();
