import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDfcen,
  isValidDplen,
  isValidRfcad
} from '../epsilons/epsilon_01';
import {
  getElre
} '../../twigs/twig_02';

// [epcnt] is the epsilon condition text.
const epsfn_01 = (epcnt, dltvb, slcrl) => {

  const patt = new Regexp(
    `(\w+) ${dltvb} (\w+)\.`);

  const mints = patt.exec(patt);

  if(!R.isNil(matches)){

    const mint_1 = mints[1];
    const mint_2 = mints[2];

    // Starts with face cards (first mint
    // is face card) and ends with focus
    const startWfcd =
      isValidRfcad(firstMint) &&
      isValidDfcen(secondMint);

    // Starts with delta focus and ends
    // with face card
    const startWdfc =
      isValidDfcen(firstMint) &&
      isValidRfcad(secondMint);

    const bothRfcds =
      ifValidRfcad(firstMint) &&
      isValidRfcad(secondMint);

    if(startWfcd){

      // Source cross
      const scross = getClbfe(firstMint);

      // Target cross list
      const tcrolt = getClbfc(secondMint);

      const elre = getElre(
        scross.crbel, tcrolt[0].crbel);

      const isProducing =
        dltvb == 'produces' &&
        elre == 'Seed';

      const isHacking =
        dltvb == 'hacks' &&
        elre == 'Money';

      return R.anyPass([
        isProducing,
        isHacking
      ]);
    }

    if(startWdfc){

    }

  }
  else {
    return false;
  }
}
