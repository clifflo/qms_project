import * as R from 'ramda';

// Get all cross by focus. Noted that it does not
// differentiate between source long hook
// or target long hook. This will be handled
// later.
export const getCsbfc = (rofcs, lhcres) => {

  if(R.isNil(rofcs)){
    throw new Error(
      'ROFCS should not be nil.');
  }

  if(R.isNil(lhcres)){
    throw new Error(
      'LHCRES should not be nil.');
  }

  const csbfc = R.filter(
    R.propEq('rofcs', rofcs),
    lhcres);



}
