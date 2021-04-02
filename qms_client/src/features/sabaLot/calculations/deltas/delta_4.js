// RSRCR is the Rho Source Cross.
// RTTCR is the Rho Target Cross.
// ROLCR is the Rho Only Cross.
// RCRCON is the Rho Cross Condition.
// RFSTC is Rho First Cross.
// RSNDC is Rho Second Cross.
// RDCCON is Rho Dual Cross Condition.
// RCRFC is Rho Cross At Focus.

// Rho Crosses Type

import * as R from 'ramda';
import { elrs } from '../twigs/twig_1';

// Epsilon Cross Type Set
const dcsts = [
  'Jack',
  'Queen',
  'King',
  'Killer'
]

const isValidDcsts = dcrsType => {
  return R.includes(dcrsType, dcsts);
}

const epsiSpecs = {
  eercrSpec: {
    epsiDscn: '特色爻之間的五行關係',
    epsiFname: 'Epsilon Source Target Relation',
    epsiAname: 'DT-STRL',
    epsiProps: {
      esrcr: 'Epsilon Source Cross',
      ettcr: 'Epsilon Target Cross',
      ecrel: 'Epsilon Cross Relation'
    }
  }
}

const checkDsrcr = rule => {

  if(R.isNil(rule.dsrcr)){
    throw new Error(
      'Epsilon Source Cross should not be nil.')
  }

  if(R.isNil(rule.dttcr)){
    throw new Error(
      'Epsilon Target Cross should not be nil.')
  }

  if(!isValidDcsts(rule.dsrcr)){
    throw new Error(
      `${rule.dsrcr} is not a valid Epsilon `
      + 'Cross Type.'
    )
  }

  if(!isValid)

}
