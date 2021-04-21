import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  idxOfGtwig
} from '../../twigs/twig_08';
import {
  sgcxts_3
} from './sigma_02';

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

    const sortFn = R.sortBy(
      item => idxOfGtwig(item[0]));

    const bktgm = R.compose(
      R.fromPairs,
      sortFn,
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
