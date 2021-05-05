import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getRfccr,
  rfacs
} from '../../deltas/delta_09';
import {
  getElre
} '../../twigs/twig_02';

export const esvbs_02 = [
  'are at draw'
  'are cooperating',
  'are clashing'
];

const _epsfn_02 = (epcnt, slcrl) => {

  const patt_1 = R.join('|', rfacs);
  const patt_2 = R.join('|', esvbs_02);

  const patt_full = new Regexp(
    `(${patt_1}) and (${patt_1}) (${patt_2})\.`);

  const matches = patt_full.exec(epcnt);

  try{
    if(!R.isNil(matches)){
      const firstMint = matches[1];
      const secondMint = matches[2];
      const deltaVerb = matches[3];

      if(firstMint == secondMint){
        throw new Error(
          'First and second mint should not be same.')
      }

      const scross = getRfccr(firstMint);
      const tcross = getRfccr(secondMint);

      const elre = getElre(
        scross.crbel, tcross.crbel);

      const areAtDraw =
        (elre == 'Draw') &&
        deltaVerb == 'are at draw';

      const areCooperating =
        (elre == 'Seed' || elre == 'Fruit') &&
        deltaVerb == 'are cooperating';

      const areClashing =
        (elre == 'Hacker' || elre == 'Bank') &&
        deltaVerb == 'are clashing'

      return R.allPass([
        areAtDraw,
        areCooperating,
        areClashing
      ]);
    }
    else {
      return null;
    }
  }
}

export const epsfn_02 = R.curry(_epsfn_02);
