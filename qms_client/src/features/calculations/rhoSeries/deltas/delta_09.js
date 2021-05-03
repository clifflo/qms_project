import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDplen
} from './delta_01';
import {
  getDfebcn
} from '../rhos/rho_09';
import {
  rfcds,
  getClbfc,
  getClbpl
} from './delta_08';

const getNickname = fullEnglishName => {
  return R.split(' ', fullEnglishName)[1];
}

// Get cross list by focus in english
export const getClbfe = dfcen => {

  E.cknws(dfcen);

  try{
    const clbfe = R.compose(
      getClbfc,
      getDfcbe,
      getNickname)
    (dfcen);

    E.cknwa(clbfe);
    return clbfe;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbfe].');
  }
}

// Get cross list by paladin in english
export const getClbpe = dplen => {

  E.cknws(dplen, 'dplen');

  try{
    const clbpe = R.compose(
      getClbpl,
      getDpcbe,
      getNickname)
    (dplen);

    return clbpe;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [clbpe].');
  }

}

const dltmts = [
  'Jack',
  'Queen',
  'King',
  'Dragon',
  'Phoenix',
  'Unicorn',
  'Cobra',
  'Tiger',
  'Turtle',
  'Parent',
  'Son',
  'Brother',
  'Money',
  'Ghost'
]

const isValidDltmnt = dltmnt => {
  return R.includes(dltmts);
}

export const exelrs = [
  'produces',
  'produced by',
  'hacks',
  'hacked by',
  'draws with',
  'co-produces with',
  'co-hacks with'
]

export const getClbmt = (dltmnt, slcrl) => {

  const faceCards =
    ['Jack', 'Queen', 'King'];

  const paladins = [
    'Dragon',
    'Phoenix',
    'Unicorn',
    'Cobra',
    'Tiger',
    'Turtle'
  ];

  const focuses = [
    'Parent',
    'Son',
    'Brother',
    'Money',
    'Ghost'
  ];

  const includeFn = list => {
    return R.includes(dltmnt, list);
  }

  const isFaceCard = includeFn(faceCards)
  const isPaladin = includeFn(paladins);
  const isFocus = includeFn(focuses);

  if(isFaceCard){
    return getRfccr(dltmnt, slcrl);
  }
  else if(isPaladin){
    return getClbpl(dltmnt, slcrl);
  }
  else if(isFocus){
    return getClbfc(dltmnt, slcrl);
  }
  else {
    throw new Error(
      `${dltmnt} is not a valid [dltmnt]`);
  }
}
