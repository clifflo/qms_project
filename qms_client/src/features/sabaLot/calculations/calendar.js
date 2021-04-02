import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { item } from './utils/util_1';
import { itemOfBtp } from './twigs/twig_3';
import moment from 'moment';
import {
  idxOfTrunk,
  itemOfTrunk,
  itemOfBranch
} from './twigs/twig_1';

// Get Day Betapsi
export const getDbp = day => {

  // Reference day is 2020-1-22 which is 甲子
  const rday =  moment('2020-1-22', 'YYYY-MM-DD');
  const diff = day.diff(rday, 'days') % 60;
  const betapsi = itemOfBtp(diff);

  return betapsi;
}




const getCalr_3 = () => {

  const months_3 = RA.concatAll(
    R.map(year => year.months, calr_2));

  let months_4 = [];

  for(var i = 0; i < months_3.length - 1; i++){
    const wmoend = months_3[i+1].wmost;
    months_4.push({
      ...months_3[i],
      wmoend
    })
  }

  return months_4;
}

const calr_3 = getCalr_3();

const getCalr_4 = () => {

  const mapFn = month => {

    const yrContext = R.find(
      R.propEq('year', parseInt(month.year)),
      calr_2);

    const leap = yrContext.leap;

    if(leap == '---'){
      return {
        ...month,
        wyrHasLeap: false
      }
    }
    else {

      const isLeap = moment(leap)
        .isBetween(
          month.wmost,
          month.wmoend,
          undefined,
          '[)');

      if(!isLeap){
        return {
          ...month,
          wyrHasLeap: true,
          isLeap: false
        }
      }
      else {
        return {
          ...month,
          wyrHasLeap: true,
          isLeap: true,
          leap
        }
      }
    }
  }

  return R.map(mapFn, calr_3);

}

const calr_4 = getCalr_4();

// Get Wan Nian Li Day
const getWniday = dateMoment => {

  const findFn = _month => {
    const result = dateMoment
      .isBetween(
        _month.wmost,
        _month.wmoend,
        undefined,
        '[)');

    return result;
  }

  const month = R.find(findFn, calr_4);
  const wdbp = getDbp(dateMoment);
  const atLeap = dateMoment
    .isBetween(month.leap, month.wmoend, undefined, '[)');

  const wybp = month.wybp;

  // Trunk of year
  const tkyr = wybp[0];
  const tkyi = idxOfTrunk(tkyr) % 5;

  // Index of start trunk of year
  const styi = (tkyi + 1) * 2;
  const stoy = itemOfTrunk(styi);

  // Month's trunk index
  const mtix = styi + month.wmidx;
  const mtrk = itemOfTrunk(mtix);
  const mbix = month.wmidx + 2;
  const mbrh = itemOfBranch(mbix);
  const wmbp = mtrk + mbrh;

  return {
    date: dateMoment.format('YYYY-MM-DD'),
    ...month,
    wdbp,
    wmbp,
    atLeap
  }
}

// Get Wan Nian Li Today
export const getWtoday = () => {
  return getWniday(moment());
}
