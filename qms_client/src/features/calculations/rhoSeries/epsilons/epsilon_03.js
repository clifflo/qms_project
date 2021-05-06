import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  dfnns,
  dpnns
} from '../deltas/delta_09';

const _epsfn_03 = (epcnt, slcrl) => {

  const patt_1 = R.join(dfnns, '|');
  const patt_2 = R.join(dpnns, '|');

  const patt_full = new Regexp(
    `(${patt_1}) strikes on (${patt_2})\.`);

  const matches = patt_full.exec(epcnt);

  try{
    if(!R.isNil(matches)){
      const firstMint = matches[1];
      const secondMint = matches[2];

      
    }
  }
}
