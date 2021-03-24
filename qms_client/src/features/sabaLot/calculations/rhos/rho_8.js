import * as R from 'ramda';
import {
  matchBsc
} from '../twigs/twig_4';
import {
  getDelta_1
} from './rho_6';


// Handle Rho's Day Construct.
// Flush, Arrestment, Pause and Compound will be handled.
// Hit will be ignored.
const hrdc = (delta_1) => {

  // 'DBSE' is Day Betapsi Series
  const { month, day, lhna, lhnb,
    crsa, crsb, dbse } = delta_1;

  const mapFn = cross => {

    // Is Compound for Day Construct
    const icdc = matchBsc(day[1], cross.crbh);
    return icdc;
  }

  // Crosses in delta 1
  const dcsa_1 = R.map(mapFn, crsa);
  const dcsb_1 = R.map(mapFn, crsb);

  return {
    delta_1,
    dcsa_1,
    dcsb_1
  }
}

export const getDelta_2 = rin => {
  return R.compose(hrdc, getDelta_1)(rin);
}
