import {
  isValidBranch
} from '../plastics/plastic_1';
import {
  getBpse
} from '../plastics/plastic_2';
import {
  lhContexts_5
} from '../rhos/rho_4';
import * as R from 'ramda';

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
  const lhca = R.find(
    R.propEq('lhName', lhna),
    lhContexts_5);

  // Long Hook Context B
  const lhcb = R.find(
    R.propEq('lhName', lhnb),
    lhContexts_5);

  console.log(lhca);

  const acdFn = idx => {
    const csi_1 = lhca.crosses[idx].csi;
    const csi_2 = lhcb.crosses[idx].csi;

    // Is Activated
    const isAcd = csi_1 != csi_2;
    const cross = lhca.crosses[idx];

    console.log(cross);

    return {
      ...cross,
      isAcd
    }
  }

  try{
    // Day Betapsi Series
    const dbse = getBpse(day);
    const crsa = R.map(acdFn, R.range(0, 6));
    const crsb = lhcb.crosses;

    return {
      month,
      day,
      lhna,
      lhnb,
      crsa,
      crsb,
      dbse
    }
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot parse Rho Input.'
    );
  }



}
