import {
  isValidBranch
} from '../plastics/plastic_1';
import {
  getBpse
} from '../plastics/plastic_2';
import {
  lhContexts_4
} from '../rhos/rho_4';

// 'Rin' stands for Rho Input.
export const parseRin = rin => {

  const regex = /(.)月(..)日(.*)之(.*)卦/;

  // Capturing group
  const cgr = rin.match(regex);
  const month = cgr[1];

  if(!isValidBranch(month)){
    throw new Error(
      `${month} is not a valid month.`
    )
  }

  const day = cgr[2];

  // Long Hook Name A
  const lhna = cgr[3];

  // Long Hook Name B
  const lhnb = cgr[4];

  // Long Hook Context A
  const lhca = R.filter(
    R.propEq('lhName', lhna),
    lhContexts_4);

  // Long Hook Context B
  const lhcb = R.filter(
    R.propEq('lhName', lhnb),
    lhContexts_4);

  const strikeFn = (cross, idx) => {
    const cr_1 = lhca.crosses[idx];
    const cr_2 = lhcb.crosses[idx];
    return cr_1 == cr_2
  }

  try{
    // Day Betapsi Series
    const dbse = getBpse(day);
    const strikes = R.map(strikeFn, R.range(0, 6));

    return {
      month,
      day,
      lhca,
      lhcb,
      dbse,
      strikes
    }
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot parse Rho Input.'
    );
  }



}
