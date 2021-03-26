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
    let dcrStatus = [];

    if(idx == lhkia){
      dcrStatus.push('Delta King');
    }

    if(idx == lhjia){
      dcrStatus.push('Delta Jack');
    }

    if(idx == lhqia){
      dcrStatus.push('Delta Queen');
    }

    cross_2.dcrStatus = dcrStatus;

    return cross_2;

  }

  const delta_2 = Object.assign({}, delta_1);
  delta_2.crsa = RA.mapIndexed(mapFn, delta_1.crsa);
  delete delta_2.lhjia;
  delete delta_2.lhkia;
  delete delta_2.lhqia;

  return delta_2;
}
