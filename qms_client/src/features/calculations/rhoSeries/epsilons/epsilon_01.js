import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {

}

// [epcnt] is the epsilon condition text.
const rjkrl_1 = (epcnt, dltvb) => {

  const spacedDltvb = ` ${dltvb} `;

  if(R.includes(spacedDltvb)){
    const mints = R.split(spacedDltvb, epcnt);
    const firstMint = mints[0];
    const secondMint = mints[1];
  }
}
