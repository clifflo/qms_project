import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import moment from 'moment';
import {
  itemOfBtp
} from './twig_3';


// Get Day Betapsi
export const getDbp = day => {

  // Reference day is 2020-1-22 which is 甲子
  const rday =  moment('2020-1-22', 'YYYY-MM-DD');
  const diff = day.diff(rday, 'days') % 60;
  const betapsi = itemOfBtp(diff);

  return betapsi;
}
