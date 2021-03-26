import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  matchBsc
} from '../twigs/twig_4';
import { getDelta_1 } from './delta_1';

export const getDelta_2 = delta_1 => {

  const lhjia = delta_1.lhjia;
  const lhqia = delta_1.lhqia;
  const lhkia = delta_1.lhkia;

  const mapFn = (cross_1, idx) => {

    const cross_2 = Object.assign({}, cross_1);

    if(idx == lhkia){
      cross_2.isRkg = true;
    }
    else {
      cross_2.isRkg = false;
    }

    if(idx == lhjia){
      cross_2.isRjk = true;
    }
    else {
      cross_2.isRjk = false;
    }

    if(idx == lhqia){
      cross_2.isRqn = true;
    }
    else {
      cross_2.isRqn = false;
    }

    return cross_2;

  }

  const delta_2 = Object.assign({}, delta_1);
  delta_2.crsa = RA.mapIndexed(mapFn, delta_1.crsa);
  delete delta_2.lhjia;
  delete delta_2.lhkia;
  delete delta_2.lhqia;

  return delta_2;
}
