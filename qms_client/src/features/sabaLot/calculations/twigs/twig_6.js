import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import moment from 'moment';
import {
  itemOfBtp
} from './twig_3';


// Get Day Betapsi
export const getDbp = dayText => {

  if(R.isNil(dayText)){
    throw new Error('Day text is nil');
  }

  if(!RA.isString(dayText)){
    throw new Error('Day text must be of string type.');
  }

  const day = moment(dayText, 'YYYY-MM-DD');

  // Reference day is 2020-1-22 which is 甲子
  const rday =  moment('2020-1-22', 'YYYY-MM-DD');
  const diff = day.diff(rday, 'days') % 60;
  const betapsi = itemOfBtp(diff);

  return betapsi;
}
