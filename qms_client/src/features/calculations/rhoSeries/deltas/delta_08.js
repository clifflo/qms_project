import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getRjkcr,
  getRqncr,
  getRkgcr
} from './delta_07';

// Delta mints stands for paladins, focuses, face
// cards, extended elemental relations and
// some miscellaneous conditions.

// Delta mint set 'A'
export const dlmsa = [
  'Jack',
  'Queen',
  'King'
];

// Delta mint set 'B'
export const dlmsb = [
  'Parent',
  'Brother',
  'Money',
  'Ghost',
  'Son'
];

// Delta mint set 'C'
export const dlmsc = [
  'Dragon',
  'Phoenix',
  'Unicorn',
  'Cobra',
  'Tiger',
  'Turtle'
]

// Delta mint set 'D' is the sum of
// 'A', 'B' and 'C' mint set
export const dlmsd =
  RA.concatAll(dlmsa, dlmsb, dlmsc);

// Delta mint set 'E'
export const dlmsd = [
  'draws with',
  'produces',
  'produced by',
  'hacks',
  'hacked by',
  'cooperates with',
  'clashes with'
]

// Delta mint set 'F'
export const dlmse = [
  'stands on',
  'converts to',
  'strikes internally',
  'strikes externally',
  'total silence',
  'enters the void'
]

export const isValidDlmta = dlmta => {
  return R.includes(dlmta, dlmsa);
}

export const isValidDlmtb = dlmtb => {
  return R.includes(dlmtb, dlmsb);
}

export const isValidDlmtc = dlmtc => {
  return R.includes(dlmtc, dlmsc);
}

export cosnt isValidDlmtd = dlmtd => {
  return R.includes(dlmtd, dlmsd);
}

// [dlmta] is the delta mint in set 'A'
export const getRfccr = (dlmta, slcrl) => {

  if(!isValidDlmta(dlmta)){
    throw new Error(
      `${dlmta} is not a valid [dlmta].`);
  }

  if(dlmta == 'Jack'){
    return getRjkcr(slcrl)
  }
  else if(dlmta == 'Queen'){
    return getRqncr(slcrl);
  }
  else{
    return getRkgcr(slcrl);
  }
}

// [dlmtd] is the delta mint in set 'D'
export const getCldtd = (dlmtd, slcrl) => {

  if(!isValidDlmtd(dlmtd)){
    throw new Error(
      `${dlmtd} is not a valid [dlmtd]`);
  }

}
