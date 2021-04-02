import * as R from 'ramda';
import { elrs } from '../twigs/twig_1';

// Epsilon Cross Type Set
const ecsts = [
  'Jack',
  'Queen',
  'King',
  'Killer'
]

const isValidEcsts = ecrsType => {
  return R.includes(ecrsType, ecsts);
}

const eslSpecs = [
  {
    esldscn: '特色爻之間的五行關係',
    eslfname: 'Epsilon Source Target Relation',
    eslabn: 'DT-STRL',
    eslprops: {
      esrcr: 'Epsilon Source Cross',
      ettcr: 'Epsilon Target Cross',
      ecrel: 'Epsilon Cross Relation'
    }
  },
  {

  }
]

const checkEsrcr = rule => {

  if(R.isNil(rule.esrcr)){
    throw new Error(
      'Epsilon Source Cross should not be nil.')
  }

  if(R.isNil(rule.ettcr)){
    throw new Error(
      'Epsilon Target Cross should not be nil.')
  }

  if(!isValidEcsts(rule.esrcr)){
    throw new Error(
      `${rule.esrcr} is not a valid Epsilon `
      + 'Cross Type.'
    )
  }


}
