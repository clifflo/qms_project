import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

const _epsfn_02 = (epcnt, slcrl) => {

  const _patt_1 = [
    'Jack',
    'Queen',
    'King'
  ]

  const _patt_2 = [
    'cooperate',
    'clash',
    'draw'
  ]

  const patt_1 = R.join('|', _patt_1);
  const patt_2 = R.join('|', _patt_2);

  const patt_full = new Regexp(
    `(${patt_1}) and (${patt_1}) (${patt_2})\.`);

  const matches = patt_full.exec(epcnt);
}
