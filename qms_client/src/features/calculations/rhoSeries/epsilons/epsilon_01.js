import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isValidDfcen,
  isValidDplen,
  isValidRfcad
} from '../epsilons/epsilon_01';

// [epcnt] is the epsilon condition text.
const rjkrl_1 = (epcnt, dltvb) => {

  const spacedDltvb = ` ${dltvb} `;

  if(R.includes(spacedDltvb)){
    const mints = R.split(spacedDltvb, epcnt);
    const mint_1 = mints[0];
    const mint_2 = mints[1];

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

      if(dltvb == 'produces'){
        
      }
    }


  }
}
