import { sgcxts_2 } from './sigma_01';
import {
  getBhdcvs
} from '../../twigs/twig_08';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getSgcxts_3 = () => {

  const mapFn_1 = bkmch => {

    const key = RA.concatAll(
      getBhdcvs(bkmch[1]));

    const value = RA.concatAll(
      getBhdcvs(bkmch[2]));

    return [key, value];
  }

  const mapFn_2 = sigma => {

    const bkcont = R.compose(
      R.fromPairs,
      R.map(mapFn_1))
    (sigma.bkmhes);

    return {
      adjdStce: sigma.adjdStce,
      sgmna: sigma.sgmna,
      bkcont
    }
  }

  return R.map(mapFn_2, sgcxts_2);
}

export const sgcxts_3 = getSgcxts_3();

export const getSgcxts_4 = () => {

}
