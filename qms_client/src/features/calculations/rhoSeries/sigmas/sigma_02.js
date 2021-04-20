import { sgcxts_2 } from './sigma_01';
import {
  getBhdcvs
} from '../../twigs/twig_09';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  idxOfGtwig
} from '../twigs/twig_07';

export const getSgcxts_3 = () => {

  const mapFn_1 = bkmch => {

    if(R.isNil(bkmch)){
      throw new Error(
        'BKMCH should not be nil.');
    }

    const bkmkey = RA.concatAll(
      getBhdcvs(bkmch[1]));

    const bkmval = RA.concatAll(
      getBhdcvs(bkmch[2]));

    return [bkmkey, bkmval];
  }

  const mapFn_2 = sigma => {

    const bkcont = R.compose(
      R.fromPairs,
      R.map(mapFn_1))
    (sigma.bkmhes);

    const rawObj = {
      ...sigma,
      bkcont
    }

    const pickedProps = [
      'bkcont',
      'mthcoa',
      'mthcob',
      'sgmna',
      'adjsen',
      'regns'
    ]

    const finalObj = R.pick(
      pickedProps, rawObj);

    return finalObj;
  }

  return R.map(mapFn_2, sgcxts_2);
}

export const sgcxts_3 = getSgcxts_3();
