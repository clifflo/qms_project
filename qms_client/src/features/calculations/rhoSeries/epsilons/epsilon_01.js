import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDfcen,
  isValidDplen,
  isValidRfcad,
  getClbfe,
  getRfccr,
  dfnns,
  rfacs
} from '../deltas/delta_09';
import {
  getElre
} '../../twigs/twig_02';

// [epcnt] is the epsilon condition text.
const _epsfn_01 = (epcnt, slcrl) => {

  const patt_1 = R.join(
    '|', RA.concatAll(dfnns, rfacs));

  const patt_2 = 'hacks|produces';

  const patt_full = new Regexp(
    `(${patt_1}) (${patt_2}) (${patt_1})\.`);

  const matches = patt_full.exec(epcnt);

  try{
    if(!R.isNil(matches)){

      const firstMint = matches[1];
      const epsvb_01 = matches[2];
      const secondMint = matches[3];

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
        const scross = getRfccr(firstMint);

        // Target cross list
        const tcrolt = getClbfe(secondMint);

        const elre = getElre(
          scross.crbel, tcrolt[0].crbel);

        const isProducing =
          epsvb_01 == 'produces' &&
          elre == 'Seed';

        const isHacking =
          epsvb_01 == 'hacks' &&
          elre == 'Money';

        return isProducing || isHacking;
      }
      else if(startWdfc){

        // Source cross list
        const scrolt = getClbfe(firstMint);
        E.cknwa(scrolt);

        // Target cross
        const tcross = getRfccr(secondMint);
        E.cknwo(tcross);

        const elre = getElre(
          scrolt[0].crbel, tcross.crbel);

        const isProducing =
          epsvb_01 == 'produces' &&
          elre == 'Seed';

        const isHacking =
          epsvb_01 == 'hacks' &&
          elre == 'Money';

        return isProducing || isHacking;
      }
      else if(bothRfcds){

        const scross = getRfccr(firstMint);
        E.cknwo(scross);

        const tcross = getRfccr(secondMint);
        E.cknwo(tcross);

        const elre = getElre(
          scross.crbel, tcross.crbel);

        const isProducing =
          epsvb_01 == 'produces' &&
          elre == 'Seed';

        const isHacking =
          epsvb_01 == 'hacks' &&
          elre == 'Money';

        return isProducing || isHacking;
      }

    }
    else {
      return null;
    }
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [epsfn_01].');
  }
}

export const epfsn_01 = R.curry(_epfsn_01);
