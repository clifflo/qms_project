import { sgcxts_2 } from './sigma_01';
import {
  getBhdcvs
} from '../../twigs/twig_09';
import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

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

export const getSgcxts_4 = () => {

  // Brake match key part
  const mapFn_1n = (mthcoa, bkmval, bkmkp)  => {

    // Baked brake match key part
    const getBkbkp = () => {
      if(mthcoa){
        if(bkmkp == '子'){
          return '霜';
        }
        else if(bkmkp == '丑'){
          return '臘';
        }
        else {
          return bkmkp;
        }
      }
      else {
        return bkmkp;
      }
    }

    const bkbkp = getBkbkp();

    return [bkbkp, bkmval];
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2n = (mthcoa, bkctpa) => {

    return R.map(
      mapFn_1c(mthcoa)(bkctpa[1]),
      bkctpa[0]);
  }

  const mapFn_2c = R.curry(mapFn_2n);

  const mapFn_3 = sgmcxt => {

    const sortFn = R.sortBy(R.compose(R.toLower, R.prop('name')));

    const bktgm = R.compose(
      R.fromPairs,
      RA.concatAll,
      R.map(mapFn_2c(sgmcxt.mthcoa)),
      R.toPairs)
    (sgmcxt.bkcont);

    return {
      ...sgmcxt,
      bktgm
    }
  }

  return R.map(mapFn_3, sgcxts_3);

}

export const sgcxts_4 = getSgcxts_4();
