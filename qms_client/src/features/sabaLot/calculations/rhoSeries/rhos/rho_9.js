import * as R from 'ramda';
import * as RA from 'ramda-adjunct';

export const getRhocxt_8 = (rdtr, lhname) => {

  if(R.isNil(rdtr)){
    throw new Error(
      'RDTR should not be nil.');
  }

  if(R.isNil(lhname)){
    throw new Error(
      'LHNAME should not be nil.');
  }

  const rpcst = getRpcstByRdtr(rdtr);
  const rhocxt_6 = getRcxt6ByLhn(lhname);
  const lhcres_1 = rhocxt_6.lhcres;

  const mapFn = idx => {
    const lhcros = lhcres_1[idx];
    return {
      ...lhcros,
      rplch: rpcst[idx]
    }
  }

  const lhcres_2 = R.map(mapFn, R.range(0, 6));

  return {
    ...rhocxt_6,
    lhcres: lhcres_2
  }
}
